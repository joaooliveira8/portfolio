// Dados pessoais e de carreira. Fonte: currículo de out/2026.
// Para mudar texto do site, comece por aqui e por projects.ts.

export const profile = {
  name: 'João Pedro Oliveira',
  shortName: 'João Pedro',
  initials: 'JP',
  role: 'Desenvolvedor Front-end Júnior',
  location: 'Vargem Grande Paulista, SP',
  email: 'jpramiro5@gmail.com',
  phone: '(11) 97063-1515',
  whatsapp: 'https://wa.me/5511970631515',
  github: 'https://github.com/joaooliveira8',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-de-oliveira-8a1684262/',
  resume: `${import.meta.env.BASE_URL}curriculo-joao-pedro-oliveira.pdf`,
  now: 'Dev Front-end Júnior na DataSmartCom desde jul/2026 e cursando o 5º semestre de Sistemas de Informação na Faculdade Impacta.',
  language: 'Inglês intermediário, com leitura técnica avançada.',
}

export const stack: { group: string; items: string[] }[] = [
  { group: 'Front-end', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'RTK Query', 'Zod', 'HTML5', 'CSS'] },
  { group: 'Back-end e dados', items: ['.NET', 'C#', 'Entity Framework', 'APIs REST', 'SQL', 'PostgreSQL', 'Node.js'] },
  { group: 'Qualidade', items: ['Casos de teste', 'Requisitos', 'UML', 'JIRA'] },
  { group: 'Dia a dia', items: ['Git', 'GitHub', 'VS Code', 'Kanban'] },
]

export type Job = {
  period: string
  role: string
  company: string
  summary: string
}

export const jobs: Job[] = [
  {
    period: 'jul/2026 — hoje',
    role: 'Desenvolvedor Front-end Júnior',
    company: 'DataSmartCom',
    summary:
      'Interfaces em React e TypeScript, integração com APIs REST e ajustes pontuais no back-end em .NET, em time com Git e Kanban.',
  },
  {
    period: 'out/2024 — jun/2026',
    role: 'Analista de Service Desk N2',
    company: 'Delfia – Field Service',
    summary:
      'Análise e resolução de incidentes em sistemas bancários críticos, com SLA, documentação de ocorrências e acompanhamento no JIRA.',
  },
  {
    period: 'fev/2023 — set/2024',
    role: 'Auxiliar Administrativo',
    company: 'M&A Serviços Mecânicos',
    summary: 'Organização administrativa, atendimento ao cliente e suporte às rotinas do dia a dia.',
  },
  {
    period: 'mar/2021 — jul/2022',
    role: 'Designer Gráfico e Edição de Vídeo',
    company: 'Nabat Comunicação Audiovisual',
    summary: 'Edição de vídeos e criação de artes gráficas para projetos audiovisuais.',
  },
]

export const education = {
  course: 'Sistemas de Informação',
  school: 'Faculdade Impacta',
  status: 'Cursando o 5º semestre',
}

export const certificates: { title: string; issuer: string; year: number }[] = [
  { title: 'SQL – Criando Sistemas de Banco de Dados', issuer: 'Faculdade Impacta', year: 2025 },
  { title: 'UX – Do Conceito à Aplicação', issuer: 'Faculdade Impacta', year: 2025 },
  { title: 'UX – Trabalhando com Projetos Web', issuer: 'Faculdade Impacta', year: 2025 },
  { title: 'Web Moderno Completo com JavaScript + Projetos', issuer: 'Udemy', year: 2024 },
  { title: 'Imersão Dev com Google Gemini', issuer: 'Alura', year: 2024 },
  { title: 'Programação Orientada a Objetos (POO)', issuer: 'Faculdade Impacta', year: 2024 },
]
