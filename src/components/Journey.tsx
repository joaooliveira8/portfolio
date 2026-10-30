import { certificates, education, jobs, profile } from '../data/profile'
import { container, eyebrow, tile, tileLabel } from './ui'

export default function Journey() {
  return (
    <section id="trajetoria" aria-labelledby="titulo-trajetoria" className="border-t border-line">
      <div className={`${container} py-20`}>
        <p className={`${eyebrow} text-acc`}>Trajetória</p>
        <h2
          id="titulo-trajetoria"
          className="mt-3 max-w-[16ch] font-display text-[40px] leading-[1] font-extrabold tracking-[-0.035em] sm:text-6xl"
        >
          Do suporte ao código
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg text-sub">
          Antes de programar, passei por design gráfico e edição de vídeo, rotina administrativa e suporte N2 em sistemas bancários.
          Hoje desenvolvo as telas que, antes, eu ajudava as pessoas a usar.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ol className="min-w-0 lg:col-span-7">
            {jobs.map((job) => (
              <li
                key={job.period}
                className="grid gap-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-6"
              >
                <p className="pt-1 font-mono text-[13px] text-sub tabular-nums">{job.period}</p>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl leading-tight font-bold tracking-[-0.015em]">{job.role}</h3>
                  <p className="font-semibold text-acc">{job.company}</p>
                  <p className="mt-2 max-w-[58ch] text-sub">{job.summary}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid content-start gap-3 lg:col-span-5">
            <article className={tile}>
              <h3 className={tileLabel}>Formação</h3>
              <p className="font-display text-xl font-bold">{education.course}</p>
              <p className="text-sub">
                {education.school} · {education.status}
              </p>
            </article>
            <article className={tile}>
              <h3 className={tileLabel}>Certificados</h3>
              <ul className="grid gap-3">
                {certificates.map((c) => (
                  <li key={c.title} className="grid grid-cols-[1fr_auto] gap-3">
                    <span>
                      <span className="block font-semibold leading-snug">{c.title}</span>
                      <span className="text-sm text-sub">{c.issuer}</span>
                    </span>
                    <span className="font-mono text-[13px] text-sub tabular-nums">{c.year}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className={tile}>
              <h3 className={tileLabel}>Idiomas</h3>
              <p>{profile.language}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
