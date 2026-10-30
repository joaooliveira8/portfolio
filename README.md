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

Para adicionar um projeto, copie um objeto em `projects.ts` e troque os textos. O campo `visual` é opcional.

## Publicar

### Opção 1 · Vercel (mais simples)

1. Suba este projeto para um repositório no GitHub (ex.: `portfolio`).
2. Entre em [vercel.com](https://vercel.com) com a conta do GitHub e clique em **Add New → Project**.
3. Escolha o repositório. A Vercel detecta o Vite sozinha. Clique em **Deploy**.
4. O site fica em `https://<nome>.vercel.app`. Cada push na `main` publica de novo.

### Opção 2 · GitHub Pages

O workflow em `.github/workflows/deploy.yml` já publica a cada push na `main`.

1. Suba o projeto para o GitHub.
2. No repositório, vá em **Settings → Pages → Build and deployment** e escolha **GitHub Actions**.
3. O site fica em `https://joaooliveira8.github.io/<nome-do-repo>/`.

O `base: './'` no `vite.config.ts` faz o mesmo build funcionar nas duas opções.
