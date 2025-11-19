export default function Education() {
  const education = [
    {
      degree: 'Bacharel em Ciência da Computação',
      institution: 'Universidade Federal de São Paulo',
      period: '2018 - 2022',
      details: 'Formação completa em ciência da computação com foco em desenvolvimento de software.',
    },
    {
      degree: 'Certificação: Full Stack Web Developer',
      institution: 'Curso Online - Plataforma XYZ',
      period: '2023',
      details: 'Especialização em desenvolvimento full-stack com React e Node.js.',
    },
    {
      degree: 'Certificação: AWS Solutions Architect',
      institution: 'Amazon Web Services',
      period: '2023',
      details: 'Certificação professional em arquitetura de soluções na AWS.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Educação</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-8 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-primary font-semibold mb-2">{edu.institution}</p>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
