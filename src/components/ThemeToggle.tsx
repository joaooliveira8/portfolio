import { useTheme } from '../lib/theme'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'
  const Icon = isDark ? MoonIcon : SunIcon

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-full border border-line bg-tile transition-colors hover:border-acc"
    >
      <Icon />
    </button>
  )
}
