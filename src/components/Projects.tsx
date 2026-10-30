import { profile } from '../data/profile'
import { projects, type Project } from '../data/projects'
import { ArrowIcon, GitHubIcon } from './Icons'
import { projectVisuals } from './ProjectVisuals'
import { buttonGhost, container, eyebrow, tile } from './ui'

function ProjectCase({ project }: { project: Project }) {
  const Visual = project.visual ? projectVisuals[project.visual] : null
  const story = [
    { label: 'Problema', text: project.problem },
    { label: 'O que fiz', text: project.action },
    { label: 'Resultado', text: project.result },
  ]

  return (
    <article aria-labelledby={`projeto-${project.id}`} className="border-t border-line py-14 first:border-t-0 first:pt-4">
      <p className={`${eyebrow} flex flex-wrap gap-x-4 gap-y-1 text-sub`}>
        {project.meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </p>
      <h3
        id={`projeto-${project.id}`}
        className="mt-3 font-display text-[32px] leading-[1.04] font-bold tracking-[-0.03em] sm:text-5xl"
      >
        {project.title}
      </h3>
      <p className="mt-3 max-w-[56ch] text-lg text-sub">{project.summary}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
        {Visual && (
          <div className="min-w-0 lg:col-span-7">
            <Visual />
          </div>
        )}
        <div className={`grid content-start gap-6 ${Visual ? 'lg:col-span-5' : 'lg:col-span-12 lg:grid-cols-3'}`}>
          {story.map((s) => (
            <div key={s.label}>
              <h4 className={`${eyebrow} mb-1.5 text-acc`}>{s.label}</h4>
              <p>{s.text}</p>
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={buttonGhost}>
                {l.label}
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {project.numbers && (
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-3 lg:grid-cols-5">
          {project.numbers.map((n) => (
            <div key={n.label} className="flex flex-col">
              <dt className="order-2 text-sm text-sub">{n.label}</dt>
              <dd className="font-display text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">{n.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos" className="border-t border-line">
      <div className={`${container} py-20`}>
        <p className={`${eyebrow} text-acc`}>Projetos</p>
        <h2
          id="titulo-projetos"
          className="mt-3 max-w-[18ch] font-display text-[40px] leading-[1] font-extrabold tracking-[-0.035em] sm:text-6xl"
        >
          O que já construí e documentei
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg text-sub">
          Cada projeto conta o problema, o que eu fiz e o que mudou. Menos lista, mais raciocínio.
        </p>

        <div className="mt-12">
          {projects.map((p) => (
            <ProjectCase key={p.id} project={p} />
          ))}
        </div>

        <div className={`${tile} mt-4 flex flex-wrap items-center justify-between gap-4`}>
          <p className="max-w-[52ch]">
            <strong>Novos projetos chegando.</strong>{' '}
            <span className="text-sub">Enquanto isso, o que estou estudando e construindo fica no GitHub.</span>
          </p>
          <a href={profile.github} target="_blank" rel="noreferrer" className={buttonGhost}>
            <GitHubIcon />
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
