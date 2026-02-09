import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.testimonial-card', {
                y: 60,
                opacity: 0,
                rotateX: 10
            }, {
                scrollTrigger: {
                    trigger: sectionRef.current,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const testimonials = [
        {
            name: "Ana Silva",
            role: "CEO, TechSolutions",
            image: "https://randomuser.me/api/portraits/women/43.jpg",
            text: "Trabalhar com o Celso foi uma experiência incrível. Entregou nosso projeto antes do prazo e com qualidade excepcional. Recomendo fortemente!",
            stars: 5
        },
        {
            name: "Carlos Mendes",
            role: "Diretor, DigitalAgency",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "Profissional altamente qualificado e comprometido. Sua capacidade de resolver problemas complexos é impressionante. Nosso projeto teve um aumento de 40% nas conversões.",
            stars: 5
        },
        {
            name: "Juliana Oliveira",
            role: "Gerente, InovaTech",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            text: "Excelente comunicação e profissionalismo. Entendeu perfeitamente nossas necessidades e entregou uma solução que superou nossas expectativas.",
            stars: 4.5
        }
    ];

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 bg-dark-800 relative z-10 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">Depoimentos</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        O que clientes e colegas dizem sobre o meu trabalho.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={index} className={`testimonial-card p-8 rounded-xl bg-dark-900 border border-white/5 shadow-lg backdrop-blur-sm hover:border-gold-500/30 transition-all duration-300 opacity-0 ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-gold-500/50">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-white font-serif">{item.name}</h4>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic mb-6 leading-relaxed">
                                "{item.text}"
                            </p>
                            <div className="flex text-gold-400">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fas fa-star${i >= Math.floor(item.stars) && item.stars % 1 !== 0 ? '-half-alt' : ''} ${i >= item.stars ? 'text-gray-600' : ''}`}></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
