export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Sobre</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Graduando em Engenharia de Computação, atuo com foco em engenharia de software para sistemas 
              embarcados. Domino linguagens como C, C++ e Python, e utilizo ferramentas de simulação (como MATLAB
              e Ricardo WAVE) para projetar e otimizar sistemas complexos. Minha atuação abrange a integração de
              hardware e software, apoiada por uma base sólida em lógica de programação e estruturas de dados. Essa 
              combinação me permite desenvolver soluções eficientes e confiáveis.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Na equipe de competição PUCPR Racing, apliquei essas habilidades no desenvolvimento de sistemas 
              embarcados para um carro de competição. Nesse projeto, realizei simulações de desempenho com o 
              software Ricardo WAVE para otimizar o motor e a dinâmica veicular. Também liderei o desenvolvimento de 
              um sistema CRM embarcado, integrando componentes de hardware e software para atender a necessidades 
              específicas de negócios. Essas experiências reforçaram minha familiaridade com algoritmos e otimização de desempenho, além de me proporcionarem oportunidades de exercer liderança técnica ao coordenar 
              soluções e orientar equipes.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Além do foco em sistemas embarcados, tenho experiência em desenvolvimento web moderno e domino 
              frameworks como React e Next.js. Isso adiciona versatilidade ao meu perfil de desenvolvedor. Mantenho-me 
              sempre curioso quanto a novas tecnologias e procuro contribuir ativamente para projetos open-source. 
              Valorizo a oportunidade de compartilhar conhecimento com a comunidade, seja por meio de mentorias, 
              publicações técnicas ou colaboração em iniciativas educacionais.
            </p>
          </div>

          <div className="flex items-center justify-center">
             <img
                src="/profile.jpg"
                alt="Murilo Otavio Bertelli Cristiano"
                className="w-40 h-40 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
    
    </section>
  );
}
