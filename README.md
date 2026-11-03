# Portfólio · João Pedro Oliveira

Site pessoal feito com React, TypeScript, Vite e Tailwind CSS. Tem tema claro e escuro e funciona do celular ao computador.

## Rodar na máquina

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Para testar no celular na mesma rede Wi-Fi: `npm run dev -- --host` e abra o endereço "Network" que aparecer.

```bash
npm run build      # checa os tipos e gera a pasta dist/
npm run preview    # serve o dist/ em http://localhost:4173
```

## Onde mudar o conteúdo

| O quê | Arquivo |
|---|---|
| Nome, contatos, experiências, formação, certificados, stack | `src/data/profile.ts` |
| Projetos (Problema → O que fiz → Resultado) | `src/data/projects.ts` |
| Currículo em PDF | `public/curriculo-joao-pedro-oliveira.pdf` |
| Cores dos temas | `src/index.css`, no topo |
| Página de links da bio (`/links`) | `src/components/Links.tsx` |

Para adicionar um projeto, copie um objeto em `projects.ts` e troque os textos. O campo `visual` é opcional.

## Publicar

O site é publicado pela Vercel, ligada a este repositório. Cada push na `main` publica de novo.

Para ligar de novo do zero:

1. Entre em [vercel.com](https://vercel.com) com a conta do GitHub e clique em **Add New → Project**.
2. Escolha o repositório. A Vercel detecta o Vite sozinha. Clique em **Deploy**.
3. O site fica em `https://<nome>.vercel.app`.

O `base: './'` no `vite.config.ts` deixa o build funcionar em qualquer caminho, inclusive num subdiretório.
