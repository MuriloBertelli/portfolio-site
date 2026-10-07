/**
 * Copy e estrutura editorial da página inicial.
 *
 * image aponta para versões web sem metadados. imageCandidate preserva a
 * referência à foto original para decisões editoriais futuras.
 */

export type EvidenceLevel = "site-atual" | "codigo-revisado" | "documentado";

export type TimelineChapter = {
  id: string;
  period: string;
  eyebrow: string;
  title: string;
  lead: string;
  detail: string;
  image?: string;
  imageCandidate?: string;
  imageAlt?: string;
  evidenceLevel: EvidenceLevel;
};

export type PortfolioProject = {
  id: string;
  category: string;
  title: string;
  summary: string;
  detail: string;
  tags: readonly string[];
  image?: string;
  imageCandidate?: string;
  imageAlt?: string;
  href?: string;
  hrefLabel?: string;
  evidenceLevel: EvidenceLevel;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export const siteNavigation = [
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#cyber", label: "Cyber" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export const portfolioIntro = {
  eyebrow: "Engenharia · Software · Segurança",
  title: "Construir, entender, proteger.",
  lead: "Sou Murilo Bertelli. Minha trajetória passa pela engenharia de um carro de competição, pelo desenvolvimento de software e pela segurança de aplicações.",
  scrollCue: "Explore a trajetória",
  projectsLink: "Ver projetos",
  contactLink: "Entrar em contato",
} as const;

export const timelineIntro = {
  eyebrow: "Trajetória",
  title: "Uma mudança de escala, a mesma curiosidade.",
  lead: "De componentes físicos a sistemas digitais: cada etapa ampliou a forma como investigo problemas e construo soluções.",
} as const;

export const timelineChapters: readonly TimelineChapter[] = [
  {
    id: "empreender",
    period: "2019–2021",
    eyebrow: "01 / Iniciativa",
    title: "Aprender fazendo.",
    lead: "Criei uma marca própria de vestuário e cuidei da operação de ponta a ponta.",
    detail:
      "Produto, fornecedores, vendas online e logística me ensinaram a transformar ideia em entrega.",
    evidenceLevel: "site-atual",
  },
  {
    id: "engenharia",
    period: "2022–2026",
    eyebrow: "02 / Fundamentos",
    title: "Pensar como engenheiro.",
    lead: "Na Engenharia de Computação da PUCPR, aproximei programação, eletrônica e análise de sistemas.",
    detail:
      "Laboratórios de sinais, instrumentação e circuitos deram forma concreta ao que antes era teoria.",
    image: "/img/story/ac_analise.webp",
    imageCandidate: "AC_ANALISE.JPG",
    imageAlt: "Bancada de análise com osciloscópio em atividade acadêmica.",
    evidenceLevel: "site-atual",
  },
  {
    id: "formula",
    period: "2024–2025",
    eyebrow: "03 / Fórmula SAE",
    title: "Quando a teoria encontra a pista.",
    lead: "Na PUCPR Racing, atuei em Powertrain e depois na coordenação de projetos de Drivetrain.",
    detail:
      "Simulações no Ricardo WAVE, cálculos de transmissão, integração entre subsistemas e fabricação fizeram parte dessa etapa.",
    image: "/img/story/cartaz_sae.webp",
    imageCandidate: "CARTAZ_SAE.JPG",
    imageAlt:
      "Dois carros de Fórmula SAE diante do cartaz público do evento de 2025.",
    evidenceLevel: "site-atual",
  },
  {
    id: "software",
    period: "Em evolução",
    eyebrow: "04 / Software",
    title: "Do componente ao sistema.",
    lead: "Passei a construir também aplicações web e automações, conectando lógica, interface e operação.",
    detail:
      "Projetos em C, C++, Python, React e TypeScript ampliaram meu repertório para resolver problemas em diferentes camadas.",
    evidenceLevel: "site-atual",
  },
  {
    id: "appsec",
    period: "2026",
    eyebrow: "05 / AppSec e DevSecOps",
    title: "Projetar também para resistir.",
    lead: "A segurança passou a fazer parte das decisões de código, testes e entrega.",
    detail:
      "Trabalhei com revisão estática autorizada de acesso, testes de regressão e verificações de segurança em CI/CD. Achados e recomendações corporativos permanecem confidenciais.",
    evidenceLevel: "documentado",
  },
  {
    id: "laboratorio",
    period: "Pesquisa contínua",
    eyebrow: "06 / Laboratório",
    title: "Investigar para aprender.",
    lead: "No meu laboratório Kali, reproduzo cenários de sessão em uma aplicação local de treino.",
    detail:
      "Scripts, automação de navegador e runbooks tornam o estudo de segurança web e rede verificável e repetível.",
    image: "/img/story/puc_biblioteca_lendo_kalilinux.webp",
    imageCandidate: "PUC_BIBLIOTECA_LENDO_KALILINUX.JPG",
    imageAlt: "Estudo de Kali Linux em biblioteca.",
    evidenceLevel: "codigo-revisado",
  },
];

export const cyberIntro = {
  eyebrow: "Laboratório de segurança",
  title: "Abra o ambiente. Explore o método.",
  lead: "Um laboratório próprio para observar sessões, automatizar cenários e documentar testes autorizados.",
  interactionHint:
    "Continue rolando para explorar as ferramentas usadas no laboratório.",
  reducedMotionHint: "Explore as ferramentas usadas no laboratório.",
} as const;

/** Itens comprovados no laboratório local; a ordem também serve à narrativa da tela. */
export const cyberVerifiedTools: readonly {
  name: string;
  context: string;
  evidence?: string;
}[] = [
  {
    name: "Kali Linux",
    context: "Ambiente de estudo e pré-checagem para testes autorizados.",
    evidence: "Scripts e runbooks do laboratório local.",
  },
  {
    name: "Python",
    context: "Scripts para reproduzir e observar cenários de sessão.",
    evidence: "Código local do laboratório de sessões.",
  },
  {
    name: "Flask",
    context: "Aplicação local de treino para experimentos controlados.",
    evidence: "Aplicação web do laboratório.",
  },
  {
    name: "Selenium",
    context: "Automação do navegador nos cenários reproduzíveis.",
    evidence: "Scripts de automação do laboratório.",
  },
  {
    name: "Firefox",
    context: "Navegador usado nos testes automatizados.",
    evidence: "Configuração de automação local.",
  },
  {
    name: "Bash",
    context: "Preparação e diagnóstico do ambiente Kali.",
    evidence: "Scripts de pré-checagem local.",
  },
];

export const projectsIntro = {
  eyebrow: "Projetos selecionados",
  title: "O trabalho por trás da trajetória.",
  lead: "Cases de engenharia, desenvolvimento e segurança, apresentados conforme o que os artefatos permitem afirmar.",
} as const;

export const featuredProjects: readonly PortfolioProject[] = [
  {
    id: "formula-sae",
    category: "Engenharia",
    title: "PUCPR Racing · Fórmula SAE",
    summary:
      "Simulação de Powertrain e coordenação de projetos de Drivetrain para um veículo de competição.",
    detail:
      "Trabalho com Ricardo WAVE, cálculos de transmissão, fabricação e integração entre subsistemas.",
    tags: ["Fórmula SAE", "Ricardo WAVE", "Drivetrain"],
    image: "/img/story/drivetrain_car_pucpraicing.webp",
    imageCandidate: "DRIVETRAIN_CAR_PUCPRAICING.JPG",
    imageAlt: "Detalhe do conjunto traseiro do carro da PUCPR Racing.",
    evidenceLevel: "site-atual",
  },
  {
    id: "appsec-corporativo",
    category: "AppSec · Trabalho corporativo",
    title: "Segurança de aplicação e CI/CD",
    summary:
      "Revisão estática autorizada de controle de acesso e pipeline com verificações de segurança.",
    detail:
      "Análise de autorização em .NET e trabalho com CodeQL para C#, auditoria de dependências .NET, Gitleaks, Trivy e testes automatizados. Informações internas e achados ficam fora deste case.",
    tags: ["AppSec", ".NET", "CodeQL", "GitHub Actions"],
    evidenceLevel: "documentado",
  },
  {
    id: "timeshield",
    category: "Aplicação web · Segurança",
    title: "TimeShield",
    summary:
      "Controles na fronteira de autenticação e testes de regressão de segurança.",
    detail:
      "Verificação da origem de chamadas, tratamento de cabeçalhos de identidade e testes para acesso indevido e exportação CSV.",
    tags: ["TypeScript", "Cloudflare Workers", "Secure coding"],
    evidenceLevel: "codigo-revisado",
  },
  {
    id: "kali-lab",
    category: "Laboratório próprio",
    title: "Laboratório Kali de sessões e rede",
    summary:
      "Ambiente local para estudar sessões de navegador e documentar metodologia de análise autorizada.",
    detail:
      "Aplicação de treino, scripts Python, automação Selenium e runbooks de configuração e diagnóstico.",
    tags: ["Kali Linux", "Python", "Selenium"],
    image: "/img/story/puc_biblioteca_lendo_kalilinux.webp",
    imageCandidate: "PUC_BIBLIOTECA_LENDO_KALILINUX.JPG",
    imageAlt: "Estudo de Kali Linux em biblioteca.",
    evidenceLevel: "codigo-revisado",
  },
  {
    id: "planejamento-industrial",
    category: "Software",
    title: "Planejamento de matéria-prima",
    summary:
      "Aplicação para cálculo de fórmulas, consolidação de estoque e geração de relatórios técnicos.",
    detail: "Projeto web com múltiplos lotes e exportação em PDF.",
    tags: ["Next.js", "TypeScript", "Automação"],
    href: "https://vertex-lab.netlify.app",
    hrefLabel: "Ver aplicação",
    evidenceLevel: "site-atual",
  },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Engenharia e simulação",
    description: "Fundamentos aplicados em bancada e na Fórmula SAE.",
    items: [
      "C/C++",
      "Python",
      "Ricardo WAVE",
      "Eletrônica",
      "Sistemas embarcados",
    ],
  },
  {
    title: "Desenvolvimento web",
    description: "Aplicações e interfaces com atenção à lógica e à operação.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Cloudflare Workers",
      "Testes automatizados",
    ],
  },
  {
    title: "Segurança de aplicações",
    description:
      "Análise estática, controles de acesso e testes em ambiente autorizado.",
    items: [
      "Revisão de autorização",
      "Testes de regressão",
      "CodeQL C#",
      "SCA .NET",
      "Trivy",
      "Gitleaks",
    ],
  },
  {
    title: "Entrega e infraestrutura",
    description: "Pipelines e artefatos de entrega documentados em projetos.",
    items: [
      "GitHub Actions",
      "Docker",
      "Azure OIDC",
      "ACR",
      "App Service",
      "Container Apps",
    ],
  },
];

export const contactIntro = {
  eyebrow: "Contato",
  title: "Vamos construir a próxima conversa.",
  lead: "Projetos de software, engenharia e segurança começam com uma boa pergunta. Conte-me no que você está trabalhando.",
  submitLabel: "Enviar mensagem",
  sendingLabel: "Enviando…",
  successMessage: "Mensagem enviada. Obrigado pelo contato!",
  errorMessage:
    "Não foi possível enviar agora. Tente novamente ou escreva diretamente por e-mail.",
} as const;
