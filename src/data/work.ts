// Entregas no trabalho atual, tiradas das descrições das PRs (repositórios privados).
// Regra: sem link, sem código e sem nome de cliente. Descrever problema e solução.
// Escolhidas pelas mais trabalhosas entre as 59 PRs mergeadas (levantamento de 30/10/2026).
// Tamanho = linhas e arquivos da PR sem os arquivos gerados pelo Entity Framework
// (*.Designer.cs e ModelSnapshot.cs), que inflam o número do GitHub em milhares de linhas.

export type WorkArea = 'Full-stack' | 'Back-end' | 'Front-end'

// Tamanho de uma PR, como o GitHub mostra: linhas adicionadas, removidas e arquivos.
export type Diff = { label?: string; add: number; del: number; files: number }

export type WorkEntry = {
  id: string
  area: WorkArea
  title: string
  problem: string
  action: string
  result: string
  stack: string[]
  diffs?: Diff[]
  diffNote?: string
  // Só na entrega em destaque: o que foi feito em cada lado.
  split?: { back: string[]; front: string[]; proof: string; note: string }
}

export const workStats = {
  asOf: '30/10/2026',
  items: [
    { value: '59', label: 'PRs mergeadas desde jul/2026' },
    { value: '15', label: 'na API em .NET' },
    { value: '43', label: 'no front-end web' },
    { value: '1', label: 'no app mobile' },
  ],
}

export const workEntries: WorkEntry[] = [
  {
    id: 'suporte',
    area: 'Full-stack',
    title: 'Suporte a usuários sem abrir chamado para o time de desenvolvimento',
    problem:
      'Quando um cliente não conseguia entrar no sistema, até um e-mail digitado errado virava chamado para o time de desenvolvimento.',
    action: '',
    result: 'A operação resolve sozinha os casos simples de acesso, e cada ação fica registrada com autor e motivo.',
    stack: ['.NET', 'C#', 'Entity Framework', 'React', 'TypeScript', 'Zod'],
    diffs: [
      { label: 'API', add: 2610, del: 21, files: 28 },
      { label: 'Front', add: 1553, del: 16, files: 26 },
    ],
    split: {
      back: [
        'Papel Suporte com permissão própria e endpoints para achar o usuário de qualquer empresa.',
        'Diagnóstico do motivo da recusa: conta inativa, senha nunca criada, bloqueio por tentativas, link vencido.',
        'Ações com motivo obrigatório e registro no histórico: reenviar convite, corrigir e-mail, ativar ou inativar, gerar link de senha.',
      ],
      front: [
        'Busca por nome, e-mail, CPF ou CNPJ, com ou sem máscara.',
        'Painel “Por que não consegue entrar?”, com a ação sugerida para cada problema.',
        'Sugestão de correção quando o e-mail parece digitado errado, como gmial.com.',
      ],
      proof: '386 testes aprovados nas suítes afetadas da API · 81 no front',
      note: 'Conheço esse chamado do outro lado: antes de programar, fui analista de suporte N2.',
    },
  },
  {
    id: 'pagamento',
    area: 'Full-stack',
    title: 'Pagamento confirmado sem precisar de F5',
    problem: 'Depois de pagar um Pix, a tela ficava parada no QR Code até alguém apertar F5.',
    action:
      'Na API, a baixa só acontecia quando alguém consultava o saldo. Criei um processo em segundo plano que confere as recargas pendentes a cada 5 minutos e avisa no site e no app uma única vez, uma consulta leve de status por transação e a gravação da forma de pagamento. No front, o modal acompanha o status e para de consultar quando o pagamento entra.',
    result: 'Quem paga vê a confirmação sem recarregar, e um cartão ainda em análise deixa de aparecer como recusado.',
    stack: ['.NET', 'Worker em segundo plano', 'EF Core', 'React', 'RTK Query'],
    diffs: [
      { label: 'API', add: 1500, del: 55, files: 31 },
      { label: 'Front', add: 644, del: 54, files: 16 },
    ],
    diffNote: 'Na API, sem os arquivos gerados pelo Entity Framework.',
  },
  {
    id: 'contato',
    area: 'Full-stack',
    title: 'Formulário de contato com anexo, e anexo seguro',
    problem: 'O formulário de contato só aceitava duas opções de assunto e nenhum arquivo.',
    action:
      'Na API, troquei o endereço de atendimento antigo que aparecia nos e-mails automáticos. O assunto virou texto livre e o formulário passou a aceitar um anexo de até 5 MB em PDF, JPG ou PNG, conferido pela extensão e pelos primeiros bytes do arquivo. O texto digitado passou a ser codificado antes de entrar no e-mail. No front, assunto livre, campo de anexo e os mesmos contatos da página informativa.',
    result: 'Quem pede suporte manda o print ou o documento junto, e um executável renomeado para .pdf é recusado.',
    stack: ['.NET', 'C#', 'SMTP', 'React', 'TypeScript'],
    diffs: [
      { label: 'API', add: 438, del: 26, files: 10 },
      { label: 'Front', add: 191, del: 74, files: 6 },
    ],
  },
  {
    id: 'notificacoes',
    area: 'Front-end',
    title: 'Painel de notificações em dois sistemas',
    problem: 'Em um sistema, o sino de notificações era só decorativo. No outro, era um arquivo de 570 linhas.',
    action:
      'No primeiro, criei o painel do zero: popover reutilizável, abas Não lidas e Lidas com contador, marcar como lida e excluir, e um hook que isola o estado para trocar os dados de exemplo pela API depois. No segundo, dividi o menu em componentes por responsabilidade, redesenhei os cards e corrigi eventos de chegada que apareciam com o rótulo “Saída”.',
    result: 'O sino funciona nos dois sistemas, com as mesmas abas e um código mais fácil de manter.',
    stack: ['React', 'TypeScript', 'Radix UI', 'Tailwind CSS'],
    diffs: [
      { label: 'Painel novo', add: 1514, del: 194, files: 31 },
      { label: 'Refatoração', add: 578, del: 441, files: 11 },
    ],
  },
  {
    id: 'padronizacao',
    area: 'Front-end',
    title: 'Padronização visual e dropdowns legíveis no tema escuro',
    problem: 'Os dropdowns ficavam ilegíveis no tema escuro, e cada tela tinha sua própria cor, selo e botão de voltar.',
    action:
      'O dropdown nativo é desenhado pelo navegador e ignora o tema do site. Troquei todos os dropdowns nativos de valor único pelo Select do design system, nos dois sistemas. Criei um selo de página aplicado em 24 telas, padronizei o botão de voltar em 9, levei a barra lateral para tokens de cor com fechamento por toque fora no celular, e extraí um seletor de mapa que estava duplicado em 4 páginas.',
    result: 'Dropdowns legíveis nos dois temas e um só padrão de cabeçalho, cores e navegação.',
    stack: ['React', 'shadcn/ui', 'Radix UI', 'react-hook-form', 'Tailwind CSS'],
    diffs: [
      { label: 'Dropdowns', add: 968, del: 623, files: 26 },
      { label: 'Layouts', add: 911, del: 558, files: 34 },
    ],
  },
]

export type MergedPr = {
  type: 'feat' | 'fix' | 'refactor'
  area: Exclude<WorkArea, 'Full-stack'>
  text: string
  diff: Diff
}

export const otherWork: MergedPr[] = [
  {
    type: 'feat',
    area: 'Front-end',
    text: 'Tela de login redesenhada com os componentes do design system e um fundo animado feito com os tokens do tema.',
    diff: { add: 997, del: 189, files: 22 },
  },
  {
    type: 'feat',
    area: 'Back-end',
    text: 'Catálogo único na API para os nomes dos eventos, usado pela tela e pelo PDF do relatório de auditoria.',
    diff: { add: 390, del: 53, files: 11 },
  },
  {
    type: 'feat',
    area: 'Front-end',
    text: 'Validação do XML da NF-e ao anexar: a tela lista os itens perecíveis e bloqueia a emissão quando a nota não tem nenhum.',
    diff: { add: 359, del: 9, files: 4 },
  },
  {
    type: 'fix',
    area: 'Front-end',
    text: 'Painéis que atualizam sem F5: um indicador dizia 2 itens e a lista mostrava só 1.',
    diff: { add: 338, del: 90, files: 24 },
  },
  {
    type: 'fix',
    area: 'Front-end',
    text: 'Telas que ficavam ilegíveis no tema escuro, corrigidas com tokens semânticos de cor.',
    diff: { add: 210, del: 184, files: 12 },
  },
]
