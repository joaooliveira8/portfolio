import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { CloseIcon, MenuIcon } from './Icons'
import ThemeToggle from './ThemeToggle'
import { container } from './ui'

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#trabalho', label: 'No trabalho' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center gap-3`}>
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 rounded-lg">
          <span className="grid size-9 shrink-0 place-items-center rounded-[11px] bg-acc font-display text-[13px] font-extrabold text-acc-ink">
            {profile.initials}
          </span>
          <span className="truncate font-semibold">{profile.name}</span>
        </a>

        <nav aria-label="Principal" className="ml-auto hidden md:block">
          <ul className="flex gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-sub transition-colors hover:bg-tile hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line bg-tile md:hidden"
            aria-expanded={open}
            aria-controls="menu-celular"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav id="menu-celular" aria-label="Menu" hidden={!open} className="border-b border-line md:hidden">
        <ul className={`${container} grid pb-3`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-t border-line py-3 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
