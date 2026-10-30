// Cada projeto vira um caso: Problema → O que fiz → Resultado.
// Para adicionar um projeto, copie um objeto e troque os textos.
// `visual` é opcional: sem ele, o texto ocupa a largura toda.

export type ProjectVisual = 'tickets' | 'portfolio'

export type Project = {
  id: string
  meta: string[]
  title: string
  summary: string
  problem: string
  action: string
  result: string
  numbers?: { value: string; label: string }[]
  links: { label: string; href: string }[]
  visual?: ProjectVisual
}

export const projects: Project[] = [
  {
    id: 'tickets',
    meta: ['Modelagem de sistemas', 'QA'],
    title: 'Sistema de Gerenciamento de Tickets',
    summary: 'Um help desk especificado do zero, antes de qualquer linha de código.',
    problem:
      'Sem um processo claro, chamados de suporte se perdem, ficam sem responsável e ninguém sabe em que etapa estão.',
    action:
      'Levantei requisitos e regras de negócio, desenhei os diagramas UML (casos de uso, classes, atividades e máquina de estados) e escrevi casos de teste por módulo.',
    result:
      'Uma especificação rastreável: cada requisito aponta para o diagrama que o justifica, e os casos de teste dizem como validar.',
    // Contagens do repositório em out/2026 (docs/requisitos.md, docs/regras-do-negocio.md, testes/casos-de-teste.md).
    numbers: [
      { value: '19', label: 'requisitos funcionais' },
      { value: '4', label: 'requisitos não funcionais' },
      { value: '23', label: 'regras de negócio' },
      { value: '10', label: 'casos de teste' },
      { value: '4', label: 'diagramas UML' },
    ],
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/joaooliveira8/ticket-management-system' }],
    visual: 'tickets',
  },
  {
    id: 'portfolio',
    meta: ['Front-end', 'React'],
    title: 'Este portfólio',
    summary: 'Feito para ser testado por quem visita.',
    problem: 'Um portfólio que só lista tecnologias não mostra como a pessoa trabalha.',
    action:
      'Montei o site em React, TypeScript e Tailwind CSS. As cores vêm de tokens que mudam com o tema, e o formulário de contato leva o cursor até o primeiro campo com erro.',
    result:
      'Quem visita troca o tema e testa o formulário. O layout se adapta do celular ao computador com o mesmo código.',
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/joaooliveira8/portfolio' }],
    visual: 'portfolio',
  },
]
