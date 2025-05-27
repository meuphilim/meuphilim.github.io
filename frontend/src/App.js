import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center, MeshWobbleMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Instagram, 
  MessageCircle, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Server, 
  Zap, 
  User,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';
import './App.css';

// Componente 3D para o hero
const FloatingGeometry = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshWobbleMaterial factor={0.4} speed={2} color="#3b82f6" />
      </mesh>
    </Float>
  );
};

// Componente para seção animada
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-800"
          >
            Celso L. Cavalheiro
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projetos" className="text-gray-600 hover:text-blue-600 transition-colors">Projetos</a>
            <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </motion.button>
          </nav>

          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#sobre" className="text-gray-600 hover:text-blue-600">Sobre</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
              <a href="#projetos" className="text-gray-600 hover:text-blue-600">Projetos</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-blue-600">Depoimentos</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit">
                Contato
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingGeometry />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Celso L. Cavalheiro
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Desenvolvedor de Soluções Digitais
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-4xl font-light text-blue-600 mb-8"
          >
            Criando experiências digitais únicas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
              Entrar em Contato
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skills = [
    {
      icon: <Code size={48} />,
      title: "Desenvolvimento Frontend",
      description: "React, Next.js, TypeScript e tecnologias modernas para criar interfaces responsivas e performáticas.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Server size={48} />,
      title: "Integração de APIs",
      description: "Conectando sistemas através de APIs REST e GraphQL, garantindo comunicação eficiente entre serviços.",
      tech: ["REST APIs", "GraphQL", "Node.js", "Microserviços"]
    },
    {
      icon: <Zap size={48} />,
      title: "Automação de Processos",
      description: "Desenvolvimento de soluções automatizadas para otimizar fluxos de trabalho e agendamentos.",
      tech: ["Python", "Cron Jobs", "Webhooks", "APIs de Terceiros"]
    },
    {
      icon: <User size={48} />,
      title: "Experiência do Usuário",
      description: "Criação de interfaces intuitivas focadas na experiência do usuário e usabilidade.",
      tech: ["UI/UX Design", "Figma", "Prototipagem", "Design System"]
    }
  ];

  return (
    <AnimatedSection id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Competências & Especialidades
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologias e metodologias que utilizo para criar soluções digitais inovadoras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Agendamento e Reservas",
      description: "Plataforma completa para pousadas com sistema de reservas online, gestão de quartos e dashboard administrativo.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Dashboard de Monitoramento de Rede",
      description: "Interface interativa para monitoramento em tempo real de infraestrutura de rede com alertas personalizados.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      tech: ["React", "D3.js", "WebSocket", "Python"],
      link: "#"
    },
    {
      title: "Gateway de Pagamentos Local",
      description: "Solução de pagamento simplificada para prestadores locais com painel de controle e links de pagamento.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      tech: ["React", "Express", "PostgreSQL", "PIX"],
      link: "#"
    }
  ];

  return (
    <AnimatedSection id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algumas das soluções digitais que desenvolvi para resolver problemas reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver Projeto <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO, PousadaTech",
      content: "O sistema de reservas desenvolvido pelo Celso revolucionou nossa pousada. Aumentamos as reservas em 40% no primeiro mês!",
      avatar: "AS"
    },
    {
      name: "Carlos Mendes",
      role: "CTO, NetSolutions",
      content: "Dashboard excepcional! A interface é intuitiva e os dados são apresentados de forma clara. Recomendo totalmente o trabalho do Celso.",
      avatar: "CM"
    },
    {
      name: "Marina Costa",
      role: "Diretora, LocalPay",
      content: "O gateway de pagamentos simplificou completamente nosso processo. Solução robusta e bem implementada.",
      avatar: "MC"
    },
    {
      name: "Pedro Santos",
      role: "Gerente de TI, Conecta",
      content: "Profissional competente e dedicado. Entrega sempre no prazo e com qualidade excepcional.",
      avatar: "PS"
    },
    {
      name: "Julia Oliveira",
      role: "Product Manager, InnovaTech",
      content: "Celso tem uma visão técnica impressionante e consegue traduzir necessidades complexas em soluções simples.",
      avatar: "JO"
    },
    {
      name: "Roberto Lima",
      role: "Fundador, StartupBR",
      content: "Desenvolvedor confiável que entende de negócio. Suas soluções sempre agregam valor real ao produto.",
      avatar: "RL"
    }
  ];

  return (
    <AnimatedSection id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O que clientes e parceiros falam sobre o meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl relative"
            >
              <Quote className="text-blue-600 mb-4" size={24} />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <AnimatedSection id="contato" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Tenho uma ideia ou projeto em mente? Entre em contato e vamos transformar suas ideias em realidade digital.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <motion.a
            href="https://wa.me/5567992624818"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all"
          >
            <MessageCircle size={32} className="mx-auto mb-4" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm opacity-80">+55 67 99262-4818</p>
          </motion.a>
          
          <motion.a
            href="mailto:celso@exemplo.com"
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all"
          >
            <Mail size={32} className="mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm opacity-80">celso@exemplo.com</p>
          </motion.a>
          
          <motion.a
            href="tel:+5567992624818"
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all"
          >
            <Phone size={32} className="mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Telefone</h3>
            <p className="text-sm opacity-80">+55 67 99262-4818</p>
          </motion.a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          onClick={() => window.open('https://wa.me/5567992624818', '_blank')}
        >
          Iniciar Conversa
        </motion.button>
      </div>
    </AnimatedSection>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Celso L. Cavalheiro</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvedor de Soluções Digitais especializado em criar experiências únicas e funcionais.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://wa.me/5567992624818"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={24} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/meuphilim"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com/meuphilim"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-gray-400 hover:text-white transition-colors">Sobre</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projetos" className="block text-gray-400 hover:text-white transition-colors">Projetos</a>
              <a href="#depoimentos" className="block text-gray-400 hover:text-white transition-colors">Depoimentos</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <div className="space-y-2 text-gray-400">
              <p>Desenvolvimento Frontend</p>
              <p>Integração de APIs</p>
              <p>Automação de Processos</p>
              <p>Consultoria Técnica</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Celso L. Cavalheiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;