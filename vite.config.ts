import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base relativa: o build funciona na raiz do domínio ou numa subpasta.
// Duas páginas: o portfólio (index.html) e a página de links da bio (links.html → /links).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: { main: 'index.html', links: 'links.html' },
    },
  },
})
