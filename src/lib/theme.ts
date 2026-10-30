import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'tema'
const EVENT = 'tema:mudou'
const media = () => window.matchMedia('(prefers-color-scheme: dark)')

// Sem escolha salva, o site segue o tema do sistema operacional.
function readTheme(): Theme {
  const chosen = document.documentElement.dataset.theme
  if (chosen === 'light' || chosen === 'dark') return chosen
  return media().matches ? 'dark' : 'light'
}

function subscribe(onChange: () => void) {
  const mq = media()
  mq.addEventListener('change', onChange)
  window.addEventListener(EVENT, onChange)
  return () => {
    mq.removeEventListener('change', onChange)
    window.removeEventListener(EVENT, onChange)
  }
}

export function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Navegação privada ou armazenamento bloqueado: o tema vale só nesta visita.
  }
  window.dispatchEvent(new Event(EVENT))
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'light' as Theme)
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, toggle }
}
