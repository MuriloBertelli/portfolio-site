import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Portfólio Pessoal',
      description:
        'Website profissional desenvolvido com Next.js e Tailwind CSS, apresentando minhas experiências, projetos e habilidades em engenharia de software e sistemas embarcados.',
      tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/MuriloBertelli/portfolio-site',
      demo: '/',
    },
    {
      title: 'Pac-Man em C++',
      description:
        'Implementação do clássico Pac-Man utilizando C++, abordando conceitos de orientação a objetos, manipulação de matriz, lógica de colisão e atualização de estados.',
      tags: ['C++', 'OOP', 'Game Logic'],
      github: 'https://github.com/MuriloBertelli/PacMan',
      demo: '',
    },
    {
      title: 'Programação Imperativa em C',
      description:
        'Repositório contendo dezenas de exercícios práticos da disciplina de Programação Imperativa. Inclui estruturas de dados básicas, ponteiros, vetores, matrizes e lógica algorítmica.',
      tags: ['C', 'Algoritmos', 'Estruturas de Dados'],
      github: 'https://github.com/MuriloBertelli/imperative-programming-c-course',
      demo: '',
    },
    {
      title: 'Algoritmos Probabilísticos',
      description:
        'Implementações de algoritmos probabilísticos em C e Python, explorando temas como complexidade, randomização, hashing e geração pseudoaleatória.',
      tags: ['C', 'Python', 'Probabilidade', 'Algoritmos'],
      github: 'https://github.com/MuriloBertelli/algoritmos-probabilisticos',
      demo: '',
    },
    {
      title: 'Gerador de Certificados',
      description:
        'Sistema automatizado para geração de certificados em PDF, com personalização de dados, templates e exportação automática.',
      tags: ['Python', 'PDF Generator', 'Automação'],
      github: 'https://github.com/MuriloBertelli/certificate-generator',
      demo: '',
    },
    {
      title: 'Sistema Bancário',
      description:
        'Aplicação simulada de operações bancárias como depósitos, saques e criação de usuários. Feita com foco em lógica, estruturas de dados e manipulação de arquivos.',
      tags: ['C++', 'Lógica', 'Arquivos'],
      github: 'https://github.com/MuriloBertelli/__Bank__',
      demo: '',
    },
     {
      title: 'Loja de Materiais de Construção',
      description:
        'Protótipo de e-commerce de materiais de construção, com carrinho, listagem de produtos e lógica de cálculo de compras.',
      tags: ['python', 'kivy', 'CSS'],
      github: 'https://github.com/MuriloBertelli/building-materials-store',
      demo: '',
  },
    {
      title: 'Validador de CPF',
      description:
        'Implementação do algoritmo oficial de validação de CPF, incluindo cálculo dos dígitos verificadores e tratamento de exceções. Um dos projetos mais interessantes e matemáticos do portfólio.',
      tags: ['C', 'Algoritmos', 'Validação'],
      github: 'https://github.com/MuriloBertelli/-ValidationCPF-',
      demo: '',
    },
    
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Projetos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background"
            >
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
