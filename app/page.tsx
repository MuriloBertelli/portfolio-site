'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'experiencias', 'projetos', 'competencias', 'educacao', 'contato'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="sobre">
        <About />
      </section>
      
      <section id="experiencias">
        <Experience />
      </section>
      
      <section id="projetos">
        <Projects />
      </section>
      
      <section id="competencias">
        <Skills />
      </section>
      
      <section id="educacao">
        <Education />
      </section>
      
      <section id="contato">
        <Contact />
      </section>
    </main>
  );
}
