import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import './App.css';
import Image from 'next/image';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Project details data
const projectsData = [
  {
    id: 1,
    title: "Sistema de Agendamento",
    description: "Plataforma completa para pousadas com sistema de reservas online e gestão de quartos.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    category: "Sistema Web",
    categoryColor: "bg-blue-500",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    features: [
      "Sistema de reservas online em tempo real",
      "Gestão completa de quartos e disponibilidade",
      "Integração com pagamentos via Stripe",
      "Dashboard administrativo completo",
      "Notificações em tempo real",
      "Relatórios de ocupação e receita"
    ],
    challenges: "Desenvolvimento de um sistema robusto de reservas que evita conflitos de agendamento e oferece uma experiência fluida tanto para clientes quanto para administradores.",
    results: "Aumento de 40% nas reservas online e redução de 60% no tempo de gestão administrativa.",
    duration: "3 meses",
    role: "Desenvolvedor Full Stack"
  },
  {
    id: 2,
    title: "Dashboard de Monitoramento",
    description: "Interface interativa para monitoramento em tempo real de infraestrutura de rede.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    category: "Dashboard",
    categoryColor: "bg-purple-500",
    technologies: ["React", "D3.js", "WebSocket", "Python", "Redis"],
    features: [
      "Monitoramento em tempo real de servidores",
      "Gráficos interativos com D3.js",
      "Sistema de alertas personalizáveis",
      "Histórico de performance detalhado",
      "Interface responsiva e intuitiva",
      "Integração com múltiplos protocolos de monitoramento"
    ],
    challenges: "Criar uma interface que apresente dados complexos de forma clara e permita ação rápida em caso de problemas na infraestrutura.",
    results: "Redução de 75% no tempo de detecção de problemas e melhoria significativa na disponibilidade dos serviços.",
    duration: "2 meses",
    role: "Desenvolvedor Frontend + Data Visualization"
  },
  {
    id: 3,
    title: "Gateway de Pagamentos",
    description: "Solução de pagamento simplificada para prestadores locais com painel de controle.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    category: "FinTech",
    categoryColor: "bg-green-500",
    technologies: ["React", "Express", "PostgreSQL", "PIX", "Mercado Pago"],
    features: [
      "Integração completa com PIX",
      "Links de pagamento personalizáveis",
      "Dashboard financeiro completo",
      "Relatórios de transações detalhados",
      "Sistema de notificações",
      "API REST para integrações"
    ],
    challenges: "Desenvolver uma solução de pagamentos segura e confiável que atenda às necessidades de pequenos prestadores de serviço locais.",
    results: "Processamento de mais de R$ 50.000 em transações no primeiro mês e feedback 100% positivo dos usuários.",
    duration: "4 meses",
    role: "Desenvolvedor Full Stack + Integração Financeira"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const canvasRef = useRef(null);

  // Initialize Three.js
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    let animationId;
    let renderer, scene, camera, shapes = [];

    const initThreeJS = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      });
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create floating shapes with better visibility
      const geometry = new THREE.IcosahedronGeometry(1.2, 1);
      
      const count = 6; // Reduced count for better performance

      for (let i = 0; i < count; i++) {
        const material = new THREE.MeshBasicMaterial({ 
          color: i % 2 === 0 ? 0x3b82f6 : 0x8b5cf6,
          wireframe: true,
          transparent: true,
          opacity: 0.8
        });
        
        const shape = new THREE.Mesh(geometry, material);
        shape.position.x = (Math.random() - 0.5) * 15;
        shape.position.y = (Math.random() - 0.5) * 10;
        shape.position.z = (Math.random() - 0.5) * 10;
        shape.scale.setScalar(Math.random() * 0.7 + 0.5);
        
        // Add random rotation speed
        shape.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        };
        
        scene.add(shape);
        shapes.push(shape);
      }

      camera.position.z = 8;

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        shapes.forEach(shape => {
          shape.rotation.x += shape.rotationSpeed.x;
          shape.rotation.y += shape.rotationSpeed.y;
          shape.rotation.z += shape.rotationSpeed.z;
          
          // Add floating motion
          shape.position.y += Math.sin(Date.now() * 0.001 + shape.position.x) * 0.01;
        });

        renderer.render(scene, camera);
      };

      animate();
    };

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    initThreeJS();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer && container && renderer.domElement) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  // Initialize GSAP animations with better settings
  useEffect(() => {
    // Ensure elements are visible initially
    gsap.set('.rotate-3d', { opacity: 1 });
    gsap.set('.testimonial-card', { opacity: 1 });
    gsap.set('.card-3d', { opacity: 1 });
    gsap.set('.project-card', { opacity: 1 });

    // Hero section animation - improved
    gsap.fromTo('.hero-text', {
      y: 60,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: '#home',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.fromTo('.hero-image', {
      y: 60,
      opacity: 0,
      scale: 0.8
    }, {
      scrollTrigger: {
        trigger: '#home',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay: 0.3,
      ease: 'back.out(1.2)'
    });

    // Skills cards animation - improved
    gsap.fromTo('.card-3d', {
      y: 80,
      opacity: 0,
      rotateY: 15
    }, {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      rotateY: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    });

    // Projects animation - improved
    gsap.fromTo('.project-card', {
      y: 100,
      opacity: 0,
      scale: 0.9
    }, {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Testimonials animation - completely rewritten
    gsap.fromTo('.testimonial-card', {
      y: 60,
      opacity: 0,
      rotateX: 10
    }, {
      scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Contact form animation
    gsap.fromTo('.contact-form', {
      y: 50,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    });

    // Animate skill bars on scroll - improved
    ScrollTrigger.batch(".skill-progress", {
      onEnter: batch => {
        batch.forEach((element, index) => {
          const targetWidth = element.style.width || '90%';
          gsap.fromTo(element, {
            width: '0%'
          }, {
            width: targetWidth,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power2.out"
          });
        });
      },
      once: true
    });

  }, []);

  // Smooth scrolling function
  const scrollToSection = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  // Project Modal Component
  const ProjectModal = ({ project, onClose }) => {
    // Close modal with ESC key
    useEffect(() => {
      if (!project) return;
      
      const handleEscKey = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscKey);
      return () => document.removeEventListener('keydown', handleEscKey);
    }, [project, onClose]);

    if (!project) return null;

    // Close modal when clicking outside
    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
            >
              <i className="fas fa-times text-gray-600"></i>
            </button>
            <div className="absolute bottom-4 left-6">
              <span className={`${project.categoryColor} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                {project.category}
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{project.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Duração:</span>
                    <span className="ml-2 text-gray-600">{project.duration}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Minha Função:</span>
                    <span className="ml-2 text-gray-600">{project.role}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Principais Funcionalidades</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Desafios e Soluções</h3>
              <p className="text-gray-600 leading-relaxed">{project.challenges}</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resultados Alcançados</h3>
              <p className="text-gray-700 leading-relaxed">{project.results}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* 3D Background Canvas - Fixed positioning */}
      <div ref={canvasRef} className="canvas-container"></div>

      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text">CELSO L. CAVALHEIRO</a>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('#home')} className="nav-link">Início</button>
            <button onClick={() => scrollToSection('#skills')} className="nav-link">Habilidades</button>
            <button onClick={() => scrollToSection('#projects')} className="nav-link">Projetos</button>
            <button onClick={() => scrollToSection('#testimonials')} className="nav-link">Depoimentos</button>
            <button onClick={() => scrollToSection('#contact')} className="nav-link">Contato</button>
          </nav>
          <button 
            onClick={() => scrollToSection('#contact')} 
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Vamos conversar
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('#home')} className="nav-link text-left">Início</button>
              <button onClick={() => scrollToSection('#skills')} className="nav-link text-left">Habilidades</button>
              <button onClick={() => scrollToSection('#projects')} className="nav-link text-left">Projetos</button>
              <button onClick={() => scrollToSection('#testimonials')} className="nav-link text-left">Depoimentos</button>
              <button onClick={() => scrollToSection('#contact')} className="nav-link text-left">Contato</button>
              <button 
                onClick={() => scrollToSection('#contact')} 
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-center"
              >
                Vamos conversar
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Improved Structure */}
    <section id="home" className="min-h-screen flex items-center pt-20 perspective relative">
      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 hero-text">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Transformando ideias
            </span>
            <br />
            em experiências digitais
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Sou um desenvolvedor de soluções digitais com anos de experiência criando aplicações inovadoras e impactantes para clientes em diversos setores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Ver projetos
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-300"
            >
              Contato
            </button>
          </div>
        </div>

        {/* Avatar Image */}
        <div className="md:w-1/2 flex justify-center hero-image">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            
            {/* Avatar Container */}
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500">
              {process.env.NEXT_PUBLIC_GH_USERNAME ? (
                <Image
                  src={`https://github.com/${process.env.NEXT_PUBLIC_GH_USERNAME}.png`}
                  alt="Celso L. Cavalheiro"
                  width={300}
                  height={300}
                  quality={100}
                  className="object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/default-avatar.png';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Avatar</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Domínio técnico e experiência prática nas principais tecnologias do mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Skill 1 */}
            <div className="card-3d bg-white p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-code text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Desenvolvimento Frontend</h3>
              <p className="text-gray-600 mb-4">
                Criação de aplicações React modernas e responsivas com as melhores tecnologias.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
            
            {/* Skill 2 */}
            <div className="card-3d bg-white p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-server text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Integração de APIs</h3>
              <p className="text-gray-600 mb-4">
                Conectando sistemas através de APIs REST e GraphQL com eficiência.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            
            {/* Skill 3 */}
            <div className="card-3d bg-white p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Automação</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvimento de soluções automatizadas para otimizar processos.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '80%'}}></div>
              </div>
            </div>
            
            {/* Skill 4 */}
            <div className="card-3d bg-white p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-user-cog text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">UX/UI</h3>
              <p className="text-gray-600 mb-4">
                Design de interfaces intuitivas e experiências de usuário memoráveis.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Recentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alguns dos trabalhos que realizei para clientes e projetos pessoais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className={`${project.categoryColor} text-white text-xs font-medium px-2.5 py-0.5 rounded`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-500 font-medium hover:text-blue-700 flex items-center transition-colors group"
                  >
                    Ver detalhes 
                    <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all duration-300"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/meuphilim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 group"
            >
              Ver todos os projetos no GitHub 
              <i className="fab fa-github ml-2 group-hover:ml-3 transition-all duration-300"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Completely Restructured */}
      <section id="testimonials" className="py-20 bg-gray-100 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que clientes e colegas dizem sobre o meu trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="testimonial-card p-8 rounded-xl shadow-md backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/women/43.jpg" 
                    alt="Ana Silva" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900">Ana Silva</h4>
                  <p className="text-gray-600 text-sm">CEO, TechSolutions</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Trabalhar com o Celso foi uma experiência incrível. Entregou nosso projeto antes do prazo e com qualidade excepcional. Recomendo fortemente!"
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card p-8 rounded-xl shadow-md backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Carlos Mendes" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900">Carlos Mendes</h4>
                  <p className="text-gray-600 text-sm">Diretor, DigitalAgency</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Profissional altamente qualificado e comprometido. Sua capacidade de resolver problemas complexos é impressionante. Nosso projeto teve um aumento de 40% nas conversões."
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card p-8 rounded-xl shadow-md backdrop-blur-sm hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Juliana Oliveira" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900">Juliana Oliveira</h4>
                  <p className="text-gray-600 text-sm">Gerente, InovaTech</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Excelente comunicação e profissionalismo. Entendeu perfeitamente nossas necessidades e entregou uma solução que superou nossas expectativas."
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos</h2>
            <p className="text-xl text-gray-600">
              Tem um projeto em mente ou quer saber mais sobre meus serviços? Entre em contato e vamos conversar sobre como posso ajudar.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden contact-form">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-blue-100">celso@exemplo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone-alt mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium">Telefone</h4>
                      <p className="text-blue-100">+55 (67) 99262-4818</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium">Localização</h4>
                      <p className="text-blue-100">Campo Grande, MS - Brasil</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="https://wa.me/5567992624818" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://github.com/meuphilim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://instagram.com/meuphilim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">CELSO L. CAVALHEIRO</h3>
              <p className="mb-4">
                Desenvolvedor dedicado a criar soluções digitais inovadoras e impactantes.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/5567992624818" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://github.com/meuphilim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/meuphilim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('#home')} className="hover:text-white transition-colors duration-300">Início</button></li>
                <li><button onClick={() => scrollToSection('#skills')} className="hover:text-white transition-colors duration-300">Habilidades</button></li>
                <li><button onClick={() => scrollToSection('#projects')} className="hover:text-white transition-colors duration-300">Projetos</button></li>
                <li><button onClick={() => scrollToSection('#testimonials')} className="hover:text-white transition-colors duration-300">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('#contact')} className="hover:text-white transition-colors duration-300">Contato</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Desenvolvimento Frontend</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Integração de APIs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Automação de Processos</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Consultoria UX</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="mb-4">
                Assine para receber atualizações e conteúdos exclusivos.
              </p>
              <form className="flex">
                <input type="email" placeholder="Seu email" className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full" />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Celso L. Cavalheiro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;
