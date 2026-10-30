import { useTheme } from '../lib/theme'
import { MoonIcon, SunIcon } from './Icons'

type Props = { variant?: 'icon' | 'pill' }

export default function ThemeToggle({ variant = 'icon' }: Props) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'
  const Icon = isDark ? MoonIcon : SunIcon

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        className="inline-flex items-center gap-3 rounded-full border border-line bg-tile-2 py-1.5 pr-4 pl-1.5 text-sm font-semibold transition-colors hover:border-acc"
      >
        <span className="grid size-8 place-items-center rounded-full bg-acc text-acc-ink">
          <Icon />
        </span>
        {isDark ? 'Tema escuro' : 'Tema claro'}
      </button>
    )
  }

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
