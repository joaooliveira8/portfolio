import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/figtree'
import '@fontsource-variable/jetbrains-mono'
import './index.css'
import Links from './components/Links'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Links />
  </StrictMode>,
)
