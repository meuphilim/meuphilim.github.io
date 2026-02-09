import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../../data/projects';
import ProjectModal from '../ui/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card', {
                y: 100,
                opacity: 0,
                scale: 0.9
            }, {
                scrollTrigger: {
                    trigger: sectionRef.current,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-20 bg-dark-900 relative z-10 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">Projetos Recentes</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Alguns dos trabalhos que realizei para clientes e projetos pessoais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={project.id} className="project-card bg-dark-800 rounded-xl overflow-hidden shadow-xl border border-white/5 hover:border-gold-500/50 transition-all duration-300 opacity-0 group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className={`${project.categoryColor} text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-lg`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white font-serif group-hover:text-gold-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 line-clamp-3 text-sm">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-gold-500 font-medium hover:text-gold-300 flex items-center transition-all group-hover:translate-x-1"
                                >
                                    Ver detalhes
                                    <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all duration-300"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href={`https://github.com/meuphilim`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:bg-white/5 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 group"
                    >
                        Ver todos os projetos no GitHub
                        <i className="fab fa-github ml-2 group-hover:ml-3 transition-all duration-300"></i>
                    </a>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
