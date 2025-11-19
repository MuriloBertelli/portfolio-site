export default function Experience() {
  const experiences = [
    {
      role: 'Senior Developer',
      company: 'Tech Startup',
      period: '2023 - Presente',
      achievements: [
        'Liderou desenvolvimento de arquitetura de frontend com React e Next.js',
        'Implementou sistema de caching que melhorou performance em 40%',
        'Mentorou 3 desenvolvedores junior no time',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2021 - 2023',
      achievements: [
        'Desenvolveu 15+ projetos web para clientes de diversos segmentos',
        'Implementou CI/CD pipelines usando GitHub Actions e Docker',
        'Reduziu tempo de carregamento do site em 60% através de otimizações',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'Web Development Studio',
      period: '2020 - 2021',
      achievements: [
        'Contribuiu no desenvolvimento de aplicações web responsivas',
        'Aprendeu e aplicou best practices de desenvolvimento',
        'Auxiliou na manutenção de código legado e refatoração',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Experiências</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-8 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-semibold mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
