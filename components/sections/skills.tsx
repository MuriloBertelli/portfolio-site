export default function Skills() {
  const skillsGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Linux'],
    },
    {
      category: 'Outras Tecnologias',
      skills: ['Python', 'JavaScript', 'Firebase', 'Redis', 'Figma', 'Agile'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Competências</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-primary mb-4">{group.category}</h3>
              <div className="space-y-3">
                {group.skills.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Alternative Badge Layout */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-6">Todos os Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skillsGroups.flatMap((group) => group.skills).map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
