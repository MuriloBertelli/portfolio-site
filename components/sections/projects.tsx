import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com sistema de pagamento integrado, gerenciamento de estoque e dashboard administrativo.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Aplicação web para gerenciamento de tarefas com autenticação de usuários, sincronização em tempo real e interface intuitiva.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard de análise de dados com visualizações interativas, relatórios customizáveis e integração com múltiplas fontes.',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather App',
      description: 'Aplicação weather com dados em tempo real, geolocalização e interface responsiva. Integrada com API de clima.',
      tags: ['React Native', 'API REST', 'Expo', 'Context API'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blog moderna com suporte a markdown, sistema de comentários e SEO otimizado.',
      tags: ['Next.js', 'MDX', 'GraphQL', 'Vercel'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Network',
      description: 'Rede social com feed interativo, sistema de mensagens em tempo real e gerenciamento de perfil de usuários.',
      tags: ['MERN', 'Socket.io', 'JWT', 'Redis'],
      github: '#',
      demo: '#',
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
