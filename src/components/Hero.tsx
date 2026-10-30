import { education, profile, stack } from '../data/profile'
import { workStats } from '../data/work'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons'
import { buttonGhost, buttonPrimary, container, eyebrow, tile, tileLabel } from './ui'

// Os dois primeiros números da seção No trabalho: total de PRs e quantas foram na API.
const [totalPrs, apiPrs] = workStats.items

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className={`${container} pt-2 pb-20 sm:pt-4`}>
      <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        <article className={`${tile} flex flex-col justify-end gap-6 p-6 sm:p-10 md:col-span-2 lg:col-span-3 lg:row-span-2 lg:min-h-[520px]`}>
          <div className="grid gap-1.5">
            <p className="font-mono text-sm text-ok">$ whoami</p>
            <p className={`${eyebrow} text-acc`}>{profile.role}</p>
          </div>
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
            <a href="#trabalho" className={buttonPrimary}>
              Ver entregas
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

        <a
          href="#trabalho"
          className={`${tile} group flex flex-col transition-colors hover:border-acc`}
        >
          <h2 className={tileLabel}>No trabalho</h2>
          <dl className="grid grid-cols-2 gap-3">
            {[totalPrs, apiPrs].map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 text-sm leading-snug text-sub">{s.label}</dt>
                <dd className="font-display text-5xl font-extrabold tracking-tight tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-acc">
            Ver as entregas
            <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>

        <article className={`${tile} md:col-span-2`}>
          <h2 className={tileLabel}>Stack · package.json</h2>
          <pre className="overflow-x-auto rounded-xl bg-code-bg p-4 font-mono text-[12.5px] leading-[1.8] whitespace-pre-wrap text-code-fg sm:p-5 sm:text-[13px]">
            {/* Cada chave é um bloco com recuo deslocado: ao quebrar, a lista continua alinhada. */}
            <code>
              <span className="block text-code-punct">{'{'}</span>
              <span className="block" style={{ paddingLeft: '4ch', textIndent: '-2ch' }}>
                <span className="text-code-key">"nome"</span>: <span className="text-code-str">"joao-pedro-oliveira"</span>,
              </span>
              {stack.map((g, i) => (
                <span key={g.key} className="block" style={{ paddingLeft: '4ch', textIndent: '-2ch' }}>
                  <span className="text-code-key">"{g.key}"</span>: <span className="text-code-punct">[</span>
                  {g.items.map((item, j) => (
                    <span key={item}>
                      <span className="text-code-str">"{item}"</span>
                      {j < g.items.length - 1 && <span className="text-code-punct">, </span>}
                    </span>
                  ))}
                  <span className="text-code-punct">]</span>
                  {i < stack.length - 1 && ','}
                </span>
              ))}
              <span className="block text-code-punct">{'}'}</span>
            </code>
          </pre>
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
