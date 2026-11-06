import type { JSX } from 'react'
import { profile } from '../data/profile'
import { ArrowIcon, ChatIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, TerminalIcon } from './Icons'
import ThemeToggle from './ThemeToggle'

// Página de links para a bio do Instagram: um toque leva a cada canal.
type LinkItem = {
  icon: (props: { className?: string }) => JSX.Element
  label: string
  hint: string
  href: string
  external?: boolean
  primary?: boolean
}

const links: LinkItem[] = [
  { icon: TerminalIcon, label: 'Portfólio', hint: 'Projetos, entregas e trajetória', href: './', primary: true },
  { icon: LinkedInIcon, label: 'LinkedIn', hint: 'joão-pedro-de-oliveira', href: profile.linkedin, external: true },
  { icon: GitHubIcon, label: 'GitHub', hint: 'joaooliveira8', href: profile.github, external: true },
  { icon: ChatIcon, label: 'WhatsApp', hint: profile.phone, href: profile.whatsapp, external: true },
  { icon: MailIcon, label: 'E-mail', hint: profile.email, href: `mailto:${profile.email}` },
  { icon: DownloadIcon, label: 'Currículo', hint: 'PDF para baixar', href: profile.resume, external: true },
]

export default function Links() {
  return (
    <div className="min-h-dvh bg-bg">
      <div className="mx-auto flex w-full max-w-[460px] justify-end px-4 pt-4">
        <ThemeToggle />
      </div>

      <main className="mx-auto w-full max-w-[460px] px-4 pt-4 pb-12">
        <header className="flex flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="grid size-24 place-items-center rounded-full bg-acc font-display text-4xl font-extrabold text-acc-ink"
          >
            {profile.initials}
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.03em]">{profile.name}</h1>
          <p className="mt-1 font-mono text-xs font-medium tracking-[0.12em] text-acc uppercase">{profile.role}</p>
          <p className="mt-3 max-w-[34ch] text-center text-sub">
            Veja minhas redes e canais de contato. Clique em qualquer link para acessar.
          </p>
        </header>

        <ul className="mt-8 grid gap-3">
          {links.map(({ icon: Icon, label, hint, href, external, primary }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: '_blank', rel: 'noreferrer' })}
                className={[
                  'flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-colors',
                  primary
                    ? 'border-acc bg-acc text-acc-ink hover:brightness-110'
                    : 'border-line bg-tile hover:border-acc',
                ].join(' ')}
              >
                <span
                  className={[
                    'grid size-10 shrink-0 place-items-center rounded-xl',
                    primary ? 'bg-acc-ink/15' : 'bg-tile-2',
                  ].join(' ')}
                >
                  <Icon />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-semibold">{label}</span>
                  <span className={`block truncate text-sm ${primary ? 'opacity-85' : 'text-sub'}`}>{hint}</span>
                </span>
                <ArrowIcon className="shrink-0 opacity-70" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-sub">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </main>
    </div>
  )
}
