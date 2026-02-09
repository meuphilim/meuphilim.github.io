import React, { useState } from 'react';
import { scrollToSection } from '../../lib/utils';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (id) => {
        scrollToSection(id, () => setMobileMenuOpen(false));
    };

    return (
        <header className="fixed w-full bg-dark-900/90 backdrop-blur-md z-50 border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-serif text-gold-500 tracking-wider">
                    CELSO L. CAVALHEIRO
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {['home', 'skills', 'projects', 'testimonials', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(`#${item}`)}
                            className="text-gray-300 hover:text-gold-400 capitalize transition-colors duration-300 text-sm font-medium tracking-wide"
                        >
                            {item === 'home' ? 'Início' : item}
                        </button>
                    ))}
                </nav>

                <button
                    onClick={() => handleNavClick('#contact')}
                    className="hidden md:block px-6 py-2 bg-gold-600 text-white rounded-full font-medium hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-900/20"
                >
                    Vamos conversar
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-gold-500"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-dark-800 py-4 px-6 shadow-xl border-t border-white/10">
                    <div className="flex flex-col space-y-4">
                        {['home', 'skills', 'projects', 'testimonials', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(`#${item}`)}
                                className="text-left text-gray-300 hover:text-gold-400 capitalize py-2"
                            >
                                {item === 'home' ? 'Início' : item}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="px-6 py-3 bg-gold-600 text-white rounded-lg font-medium text-center hover:bg-gold-500"
                        >
                            Vamos conversar
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
