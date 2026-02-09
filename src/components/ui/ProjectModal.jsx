import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    // Close modal with ESC key
    useEffect(() => {
        if (!project) return;

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscKey);
        };
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 animate-slide-up">
                <div className="relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-2xl opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-gold-600 transition-all backdrop-blur-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div className="absolute bottom-6 left-8">
                        <span className={`${project.categoryColor} text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg`}>
                            {project.category}
                        </span>
                        <h2 className="text-3xl font-bold font-serif text-white mt-2 drop-shadow-lg">{project.title}</h2>
                    </div>
                </div>

                <div className="p-8 text-gray-300">
                    <p className="text-lg mb-8 leading-relaxed border-l-4 border-gold-500 pl-4">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Informações do Projeto</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="font-medium text-gray-400">Duração:</span>
                                    <span className="text-gray-200">{project.duration}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="font-medium text-gray-400">Minha Função:</span>
                                    <span className="text-gray-200">{project.role}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Tecnologias Utilizadas</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-dark-700 text-gold-400 border border-gold-900/30 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 p-6 bg-dark-700/50 rounded-xl border border-white/5">
                        <h3 className="text-xl font-semibold text-white mb-4 font-serif">Principais Funcionalidades</h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-500 mt-1 mr-3 flex-shrink-0">✓</span>
                                    <span className="text-gray-400">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Desafios</h3>
                            <p className="text-gray-400 leading-relaxed text-sm bg-red-900/10 p-4 rounded-lg border border-red-900/20">{project.challenges}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Resultados</h3>
                            <p className="text-gray-400 leading-relaxed text-sm bg-green-900/10 p-4 rounded-lg border border-green-900/20">{project.results}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
