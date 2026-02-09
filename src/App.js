import React from 'react';
import BackgroundCanvas from './components/ui/BackgroundCanvas';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans bg-dark-900 text-gray-100 overflow-x-hidden relative">
      <BackgroundCanvas />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
