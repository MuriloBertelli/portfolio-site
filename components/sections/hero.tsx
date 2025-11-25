'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-1000">
        <div className="mb-6 overflow-hidden">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            Murilo Otavio
            <br />
            Bertelli Cristiano
          </h1>
        </div>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-in slide-in-from-bottom-4 duration-1000 fill-mode-both delay-100">
          Engenheiro de Software Embarcado / Embedded Software Engineer
        </p>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 fill-mode-both delay-200">
          Criando soluções integradas de hardware e software para sistemas embarcados de alto desempenho por 
          meio de código otimizado e simulações avançadas. Especializado em C/C++, Python e MATLAB, com 
          experiência em simulações computacionais com o software Ricardo WAVE e liderança técnica na equipe PUCPR Racing.
          <br />
          Possui experiência complementar em desenvolvimento web (React, Next.js).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 fill-mode-both delay-300">
          <button
            onClick={() => scrollToSection('projetos')}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity group"
          >
            Ver Projetos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </section>
  );
}
