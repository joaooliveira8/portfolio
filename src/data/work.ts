// Entregas no trabalho atual, tiradas das descrições das PRs (repositórios privados).
// Regra: sem link, sem código e sem nome de cliente. Descrever problema e solução.
// Números de diff e de testes copiados das próprias PRs; contagem de PRs via GitHub em 30/10/2026.

export type WorkArea = 'Full-stack' | 'Back-end' | 'Front-end'

export type WorkEntry = {
  id: string
  area: WorkArea
  title: string
  problem: string
  action: string
  result: string
  stack: string[]
  size?: string
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
    area: 'Back-end',
    title: 'Pagamento confirmado sem precisar de F5',
    problem:
      'Depois de pagar um Pix, a tela de adicionar saldo ficava parada no QR Code. Na API, a baixa só acontecia quando alguém consultava o saldo.',
    action:
      'Criei um processo em segundo plano que confere as recargas pendentes a cada 5 minutos e avisa no site e no app uma única vez, uma consulta leve de status por transação e a gravação da forma de pagamento. No front, o modal acompanha o status e para de consultar quando o pagamento entra.',
    result: 'Quem paga vê a confirmação sem recarregar, e um cartão ainda em análise deixa de aparecer como recusado.',
    stack: ['.NET', 'Worker em segundo plano', 'EF Core', 'React', 'RTK Query'],
    size: 'API: +1.503 −55 em 32 arquivos, sem o arquivo gerado pelo EF',
  },
  {
    id: 'cnpj',
    area: 'Full-stack',
    title: 'CNPJ alfanumérico de ponta a ponta',
    problem:
      'A Receita Federal criou o CNPJ com letras. A tela formatava o número novo, mas recusava ao salvar, e a API cortava as letras sem dar erro.',
    action:
      'No front, reescrevi a validação com o cálculo oficial dos dígitos verificadores e removi validadores duplicados. Na API, troquei a limpeza que mantinha só números pela regra do domínio, que preserva as letras.',
    result: 'Empresas com o CNPJ novo conseguem se cadastrar e editar o cadastro. O CNPJ numérico continua como antes.',
    stack: ['React', 'TypeScript', '.NET', 'C#'],
    size: 'Front +73 −71 em 5 arquivos · API +15 −6 em 2',
  },
  {
    id: 'eventos',
    area: 'Back-end',
    title: 'Um só lugar para os nomes dos eventos',
    problem:
      'Os nomes dos tipos de evento existiam em dois lugares. A tela dizia uma coisa e o PDF exportado dizia outra.',
    action:
      'Criei na API um catálogo único com nome, ordem e gravidade de cada evento, usado pela tela e pelo PDF, e um endpoint para o filtro. O relatório de auditoria passou a trazer só alarmes e avisos.',
    result: 'Renomear um evento virou uma mudança só, e o relatório mostra o que importa para investigar uma ocorrência.',
    stack: ['.NET', 'C#', 'React'],
    size: '+390 −53 em 11 arquivos',
  },
  {
    id: 'paineis',
    area: 'Front-end',
    title: 'Painéis que se atualizam sozinhos',
    problem: 'Um indicador mostrava 2 itens, mas ao clicar a lista trazia só 1. Com F5, apareciam os 2.',
    action:
      'Ajustei quando cada painel busca os dados: ao abrir um card, ao voltar para a aba e ao reconectar as notificações em tempo real. Enquanto a lista nova não chega, aparece o carregamento no lugar do dado antigo.',
    result: 'Uma ação feita no sistema aparece sem recarregar a página, e nenhum card mostra uma lista vazia falsa.',
    stack: ['React', 'TypeScript', 'RTK Query'],
    size: '+338 −90 em 24 arquivos',
  },
]

export const otherWork: { area: WorkArea; text: string }[] = [
  { area: 'Front-end', text: 'Telas que ficavam ilegíveis no tema escuro, corrigidas com tokens semânticos de cor.' },
  { area: 'Front-end', text: 'Formulário que leva o cursor ao primeiro campo com erro, em vez de listar tudo no rodapé.' },
  { area: 'Front-end', text: 'Respostas da API validadas com Zod em tempo de execução, no lugar de tipos que nada conferia.' },
  { area: 'Back-end', text: 'Aviso de renovação de documento que não sumia depois da renovação aprovada.' },
  { area: 'Back-end', text: 'Formulário de contato que dizia “enviado” mas mandava a mensagem para o próprio remetente.' },
]
