'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Experiências', id: 'experiencias' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Competências', id: 'competencias' },
    { label: 'Educação', id: 'educacao' },
    { label: 'Contato', id: 'contato' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              MOB
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
