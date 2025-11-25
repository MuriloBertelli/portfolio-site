export default function Education() {
  const education = [
    {
      degree: 'Engenharia de Computação',
      institution: 'Pontifícia Universidade Católica do Paraná (PUCPR)',
      period: '2022 - 2026',
      details:
        'Graduação com foco em sistemas embarcados, simulações computacionais e integração hardware-software.',
      link: null,
    },
    {
      degree: 'C: Conhecendo a Linguagem das Linguagens',
      institution: 'Alura',
      period: '2023',
      details:
        'Curso introdutório à linguagem C, abordando fundamentos, sintaxe, ponteiros e conceitos essenciais da programação de baixo nível.',
      link: 'https://cursos.alura.com.br/certificate/mrlbertelli/introducao-a-programacao-com-c-parte-1',
    },
    {
      degree: 'Degree: C Programming Language',
      institution: 'Alura',
      period: '2023',
      details:
        'Formação composta por 3 cursos totalizando 26 horas, cobrindo fundamentos, memória, ponteiros, arrays e boas práticas na linguagem C.',
      link: 'https://cursos.alura.com.br/user/mrlbertelli/degree-linguagem-c-459231/certificate?lang=en',
    },
    {
      degree: 'C++: Conhecendo a Linguagem e a STL',
      institution: 'Alura',
      period: '2023',
      details:
        'Curso focado na linguagem C++ moderna, containers da STL, iteração, gerenciamento de memória e boas práticas.',
      link: 'https://cursos.alura.com.br/certificate/mrlbertelli/cpp-introducao-a-linguagem',
    },
    {
      degree: 'Orientação a Objetos com C++: Classes, Métodos e Atributos',
      institution: 'Alura',
      period: '2024',
      details:
        'Introdução sólida ao paradigma de orientação a objetos aplicado à linguagem C++.',
      link: 'https://cursos.alura.com.br/certificate/mrlbertelli/c-plus-plus-orientacao-objetos-classes-metodos-atributos',
    },
    {
      degree: 'Orientação a Objetos com C++: Trabalhando com Herança',
      institution: 'Alura',
      period: '2024',
      details:
        'Conceitos de herança, polimorfismo, encapsulamento e hierarquia de classes em C++.',
      link: 'https://cursos.alura.com.br/certificate/mrlbertelli/c-plus-plus-orientacao-objetos-heranca',
    },
    {
      degree: 'Avançando com C++: Enum, Templates e Mais Recursos',
      institution: 'Alura',
      period: '2024',
      details:
        'Estudo avançado da linguagem C++ incluindo enums, templates, sobrecarga e recursos modernos.',
      link: 'https://cursos.alura.com.br/certificate/mrlbertelli/c-plus-plus-enum-templates-recursos',
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
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:text-primary/80 underline"
                >
                  Ver certificado
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
