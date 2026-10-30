import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base relativa: o mesmo build funciona na Vercel (raiz do domínio)
// e no GitHub Pages (subpasta /nome-do-repo/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
