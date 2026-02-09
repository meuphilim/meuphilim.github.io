import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToSection } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current, {
                y: 60,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out'
            });

            gsap.fromTo(imageRef.current, {
                y: 60,
                opacity: 0,
                scale: 0.8
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                delay: 0.3,
                ease: 'back.out(1.2)'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-20 perspective relative border-b border-white/5">
            <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
                {/* Text Content */}
                <div ref={textRef} className="md:w-1/2 mb-12 md:mb-0 hero-text opacity-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-600">
                            Transformando ideias
                        </span>
                        <br />
                        em experiências digitais
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Sou um desenvolvedor de soluções digitais com anos de experiência criando aplicações inovadoras e impactantes para clientes em diversos setores.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollToSection('#projects')}
                            className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-gold-900/20 hover:scale-105 transition-all duration-300"
                        >
                            Ver projetos
                        </button>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="px-8 py-3 border border-gold-600/30 text-gold-400 rounded-full font-medium hover:bg-gold-600/10 hover:border-gold-500 hover:text-gold-300 hover:scale-105 transition-all duration-300"
                        >
                            Contato
                        </button>
                    </div>
                </div>

                {/* Avatar Image */}
                <div ref={imageRef} className="md:w-1/2 flex justify-center hero-image opacity-0">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

                        {/* Avatar Container */}
                        <div className="absolute inset-0 bg-dark-800 rounded-full shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500 group">
                            <img
                                src="https://github.com/meuphilim.png?size=400"
                                alt="Celso L. Cavalheiro"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
