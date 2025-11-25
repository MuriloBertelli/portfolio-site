export default function Experience() {
  const experiences = [
    {
      role: 'Gerente de Projetos – Drivetrain',
      company: 'PUCPR Racing • Fórmula SAE',
      period: '2024 - 2025/07',
      achievements: [
        'Gestão de equipe multidisciplinar no desenvolvimento do sistema de transmissão (Drivetrain) do veículo de competição',
        'Coordenação de cálculos de relação de transmissão, fabricação e testes de componentes mecânicos',
        'Integração do Drivetrain com outros subsistemas e treinamento de novos integrantes para a temporada F-SAE 2025',
      ],
    },
    {
      role: 'Projetista Powertrain',
      company: 'PUCPR Racing • Fórmula SAE',
      period: '2024',
      achievements: [
        'Realizou simulações do sistema de admissão e exaustão no Ricardo WAVE para otimizar curvas de torque e potência',
        'Aplicou equações de escoamento (Bernoulli, Navier–Stokes, Darcy–Weisbach) em cenários reais de projeto',
        'Participou da fabricação de componentes como plenum e coletores em fibra de vidro, em parceria com fornecedores técnicos',
      ],
    },
    {
      role: 'Empreendedor – Marca Própria de Vestuário (LifeStyles)',
      company: 'Negócio próprio em e-commerce',
      period: '2019 - 2021',
      achievements: [
        'Criou e gerenciou uma marca autoral de camisetas e moletons com foco em vendas online',
        'Atuou em branding, marketing digital, relacionamento com fornecedores, logística e controle de estoque',
        'Desenvolveu organização, visão de negócio e resiliência ao lidar com desafios operacionais e de crescimento',
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
