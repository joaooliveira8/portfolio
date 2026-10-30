import { education, profile, stack } from '../data/profile'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons'
import ThemeToggle from './ThemeToggle'
import { buttonGhost, buttonPrimary, container, eyebrow, tile, tileLabel } from './ui'

const swatches = [
  { token: 'bg', color: 'var(--bg)' },
  { token: 'tile', color: 'var(--tile)' },
  { token: 'ink', color: 'var(--ink)' },
  { token: 'sub', color: 'var(--sub)' },
  { token: 'acc', color: 'var(--acc)' },
]

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className={`${container} pt-2 pb-20 sm:pt-4`}>
      <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        <article className={`${tile} flex flex-col justify-end gap-6 p-6 sm:p-10 md:col-span-2 lg:col-span-3 lg:row-span-2 lg:min-h-[520px]`}>
          <p className={`${eyebrow} text-acc`}>{profile.role}</p>
          <h1
            id="titulo-inicio"
            className="font-display text-[44px] leading-[0.98] font-extrabold tracking-[-0.04em] sm:text-7xl lg:text-[84px]"
          >
            Interfaces que <span className="hl">ninguém precisa explicar.</span>
          </h1>
          <p className="max-w-[54ch] text-lg text-sub">
            Sou o {profile.shortName}, desenvolvedor front-end com React e TypeScript, e me aventuro no back-end em
            .NET quando o problema pede. Antes do código, passei pelo suporte N2 em sistemas bancários, e é de lá que
            vem meu cuidado com erro, teste e com quem está do outro lado da tela.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a href="#projetos" className={buttonPrimary}>
              Ver projetos
            </a>
            <a href={profile.resume} download className={buttonGhost}>
              <DownloadIcon />
              Baixar currículo
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl border border-line hover:bg-tile-2"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-xl border border-line hover:bg-tile-2"
            >
              <LinkedInIcon />
            </a>
          </div>
        </article>

        <article className={tile}>
          <h2 className={tileLabel}>Agora</h2>
          <p className="text-[15px]">{profile.now}</p>
        </article>

        <article className={tile}>
          <h2 className={tileLabel}>Tema</h2>
          <p className="mb-4 text-[15px] text-sub">
            Este site tem tema claro e escuro. As cores vêm de tokens, então nada some na troca.
          </p>
          <ThemeToggle variant="pill" />
          <div className="mt-5 grid grid-cols-5 gap-1.5" aria-hidden="true">
            {swatches.map((s) => (
              <div key={s.token} className="grid min-w-0 gap-1">
                <span className="h-7 rounded-lg border border-line" style={{ background: s.color }} />
                <span className="truncate font-mono text-[10px] text-sub">{s.token}</span>
              </div>
            ))}
          </div>
        </article>

        <article className={`${tile} md:col-span-2`}>
          <h2 className={tileLabel}>Stack</h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {stack.map((g) => (
              <div key={g.group} className="min-w-0">
                <dt className="mb-2 text-sm font-semibold">{g.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="rounded-full border border-line bg-tile-2 px-2.5 py-1 text-[13px]">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        <article className={tile}>
          <h2 className={tileLabel}>Formação</h2>
          <p className="font-display text-xl leading-tight font-bold">{education.course}</p>
          <p className="mt-1 text-[15px] text-sub">
            {education.school} · {education.status}
          </p>
        </article>

        <article className={tile}>
          <h2 className={tileLabel}>Base</h2>
          <p className="font-display text-xl leading-tight font-bold">{profile.location}</p>
          <p className="mt-1 text-[15px] text-sub">{profile.language}</p>
        </article>
      </div>
    </section>
  )
}
