# João Pedro Oliveira · Portfólio

Portfólio pessoal de desenvolvedor front-end, feito com React, TypeScript, Vite e Tailwind CSS. Reúne projetos, entregas profissionais, trajetória e um canal de contato direto.

## Destaques

- **Tema claro e escuro.** Segue a preferência do sistema, guarda a escolha do visitante e é aplicado antes da primeira renderização, sem piscar a tela.
- **Formulário de contato com envio direto.** Usa a API do Web3Forms, valida os campos no cliente e leva o foco ao primeiro campo inválido.
- **Acessibilidade.** Os erros ficam ligados aos campos por `aria-invalid` e `aria-describedby`, e o status do envio é anunciado com `aria-live`.
- **Layout responsivo**, do celular ao computador.
- **Duas páginas no mesmo build** (Vite multi-page): o portfólio e uma página de links.
- **Conteúdo separado da interface.** Os textos e dados ficam em `src/data`, e os componentes apenas renderizam.

## Stack

| Camada | Tecnologia |
|---|---|
| Interface | React 19 + TypeScript |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 |
| Formulário | Web3Forms |
| Hospedagem | Vercel |

## Estrutura

```
src/
├── components/   componentes de interface
├── data/         conteúdo: perfil, projetos e entregas
├── lib/          lógica do tema claro/escuro
├── main.tsx      entrada do portfólio
└── links.tsx     entrada da página de links
```

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # checagem de tipos + build de produção
npm run preview   # serve o build em http://localhost:4173
```
