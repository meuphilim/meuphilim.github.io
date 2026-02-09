import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cards Animation
            gsap.fromTo('.card-3d', {
                y: 80,
                opacity: 0,
                rotateY: 15
            }, {
                scrollTrigger: {
                    trigger: sectionRef.current,
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

            // Progress Bars Animation
            ScrollTrigger.batch(".skill-progress", {
                onEnter: batch => {
                    batch.forEach((element, index) => {
                        const targetWidth = element.getAttribute('data-width');
                        gsap.fromTo(element, {
                            width: '0%'
                        }, {
                            width: targetWidth,
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "power2.out"
                        });
                    });
                },
                once: true
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        {
            icon: "fa-code",
            title: "Desenvolvimento Frontend",
            desc: "Criação de aplicações React modernas e responsivas com as melhores tecnologias.",
            progress: "90%",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: "fa-server",
            title: "Integração de APIs",
            desc: "Conectando sistemas através de APIs REST e GraphQL com eficiência.",
            progress: "85%",
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            icon: "fa-cogs",
            title: "Automação",
            desc: "Desenvolvimento de soluções automatizadas para otimizar processos.",
            progress: "80%",
            color: "text-green-400",
            bg: "bg-green-500/10"
        },
        {
            icon: "fa-paint-brush", // Changed icon for UX/UI
            title: "UX/UI Design",
            desc: "Design de interfaces intuitivas e experiências de usuário memoráveis.",
            progress: "75%",
            color: "text-gold-400",
            bg: "bg-gold-500/10"
        }
    ];

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-dark-800 relative z-10 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">Minhas Especialidades</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Domínio técnico e experiência prática nas principais tecnologias do mercado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="card-3d bg-dark-900 border border-white/5 p-8 rounded-xl hover:border-gold-500/30 transition-colors duration-300 opacity-0">
                            <div className={`w-16 h-16 ${skill.bg} rounded-lg flex items-center justify-center mb-6`}>
                                <i className={`fas ${skill.icon} ${skill.color} text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white font-serif">{skill.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                            <div className="w-full bg-dark-700 h-2 rounded-full overflow-hidden">
                                <div
                                    className="skill-progress h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
                                    data-width={skill.progress}
                                    style={{ width: '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
