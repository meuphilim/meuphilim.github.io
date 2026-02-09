import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-form', {
                y: 50,
                opacity: 0
            }, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada! Entraremos em contato em breve.');
    };

    return (
        <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-dark-900 to-black relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">Vamos trabalhar juntos</h2>
                    <p className="text-xl text-gray-400">
                        Tem um projeto em mente ou quer saber mais sobre meus serviços? Entre em contato e vamos conversar sobre como posso ajudar.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-dark-800 rounded-2xl shadow-2xl overflow-hidden contact-form border border-white/5">
                    <div className="md:flex">
                        <div className="md:w-5/12 bg-gradient-to-br from-gold-600 to-gold-700 p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
                            <h3 className="text-2xl font-bold mb-8 font-serif">Informações de Contato</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gold-100">Email</h4>
                                        <p className="text-white font-medium">celso@exemplo.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gold-100">Telefone</h4>
                                        <p className="text-white font-medium">+55 (11) 99999-9999</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gold-100">Localização</h4>
                                        <p className="text-white font-medium">São Paulo, SP</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="font-medium text-gold-100 mb-4">Redes Sociais</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-gold-600 transition-all transform hover:-translate-y-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-gold-600 transition-all transform hover:-translate-y-1">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-gold-600 transition-all transform hover:-translate-y-1">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-7/12 p-10 bg-dark-800">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">Nome</label>
                                        <input
                                            type="text"
                                            className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm font-medium mb-2">Assunto</label>
                                    <input
                                        type="text"
                                        className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                        placeholder="Sobre o que vamos conversar?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm font-medium mb-2">Mensagem</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                        placeholder="Conte-me sobre seu projeto..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold-600 text-white font-bold py-4 rounded-lg hover:bg-gold-500 transition-all transform hover:translate-y-px shadow-lg hover:shadow-gold-900/30"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Celso L. Cavalheiro. Todos os direitos reservados.</p>
                    <div className="mt-2">
                        Desenvolvido com <i className="fas fa-heart text-red-500 mx-1"></i> e React
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
