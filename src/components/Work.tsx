import { useState } from 'react'
import { otherWork, workEntries, workStats, type MergedPr, type WorkArea, type WorkEntry } from '../data/work'
import DiffStat from './DiffStat'
import { FlowArrowIcon, MergeIcon } from './Icons'
import { container, eyebrow, tile, tileLabel } from './ui'

const areaStyle: Record<WorkArea, string> = {
  'Full-stack': 'bg-acc text-acc-ink border-acc',
  'Back-end': 'border-acc text-acc',
  'Front-end': 'border-line text-sub',
}

function AreaBadge({ area }: { area: WorkArea }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${areaStyle[area]}`}>
      {area}
    </span>
  )
}

// No card ficam só problema e resultado; o "como" abre sob demanda, para a seção ler rápido.
function Story({ entry }: { entry: WorkEntry }) {
  const parts = [
    { label: 'Problema', text: entry.problem },
    { label: 'Resultado', text: entry.result },
  ]

  return (
    <dl className="grid gap-4">
      {parts.map((p) => (
        <div key={p.label}>
          <dt className={`${eyebrow} mb-1 text-[11px] text-acc`}>{p.label}</dt>
          <dd className="text-[15px]">{p.text}</dd>
        </div>
      ))}
    </dl>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
      {items.map((s) => (
        <li key={s} className="rounded-full border border-line bg-tile-2 px-2.5 py-1 text-[13px]">
          {s}
        </li>
      ))}
    </ul>
  )
}

function FeaturedCard({ entry }: { entry: WorkEntry }) {
  const split = entry.split!
  return (
    <article aria-labelledby={`trabalho-${entry.id}`} className={`${tile} grid gap-6 sm:p-8 lg:col-span-2`}>
      <div className="flex flex-wrap items-center gap-2.5">
        <MergeIcon className="text-merged" />
        <span className="font-mono text-[12px] text-merged">merged</span>
        <AreaBadge area={entry.area} />
        <span className="font-mono text-[12px] text-sub">{split.proof}</span>
      </div>
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h3
            id={`trabalho-${entry.id}`}
            className="font-display text-[28px] leading-[1.06] font-bold tracking-[-0.025em] sm:text-4xl"
          >
            {entry.title}
          </h3>
          <p className="mt-4 text-sub">{entry.problem}</p>
          <p className="mt-4 border-l-2 border-acc pl-4 text-[15px] italic">{split.note}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {[
            { label: 'Na API · .NET', items: split.back },
            { label: 'Na tela · React', items: split.front },
          ].map((side) => (
            <div key={side.label} className="min-w-0 rounded-2xl bg-tile-2 p-5">
              <h4 className={tileLabel}>{side.label}</h4>
              <ul className="grid gap-3 text-[15px]">
                {side.items.map((item) => (
                  <li key={item} className="grid grid-cols-[10px_1fr] gap-2.5">
                    <span className="mt-2 size-1.5 rounded-full bg-acc" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <p>
          <span className={`${eyebrow} mr-2 text-[11px] text-acc`}>Resultado</span>
          {entry.result}
        </p>
        <Chips items={entry.stack} />
      </div>
      {entry.diffs && (
        <div className="-mt-2 flex flex-wrap gap-x-8 gap-y-1.5">
          {entry.diffs.map((d) => (
            <DiffStat key={d.label ?? 'total'} diff={d} />
          ))}
        </div>
      )}
    </article>
  )
}

function WorkCard({ entry }: { entry: WorkEntry }) {
  return (
    <article aria-labelledby={`trabalho-${entry.id}`} className={`${tile} flex flex-col gap-5`}>
      <div className="flex flex-wrap items-center gap-2.5">
        <MergeIcon className="text-merged" />
        <span className="font-mono text-[12px] text-merged">merged</span>
        <AreaBadge area={entry.area} />
      </div>
      <h3 id={`trabalho-${entry.id}`} className="font-display text-2xl leading-tight font-bold tracking-[-0.02em]">
        {entry.title}
      </h3>
      <Story entry={entry} />
      <details className="group rounded-xl border border-line bg-tile-2">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
          Como resolvi
          <FlowArrowIcon className="rotate-90 text-acc transition-transform group-open:-rotate-90" />
        </summary>
        <p className="px-4 pb-4 text-[15px]">{entry.action}</p>
      </details>
      <div className="mt-auto grid gap-4 pt-1">
        <Chips items={entry.stack} />
        {entry.diffs && (
          <div className="grid gap-1.5 border-t border-dashed border-line pt-4">
            {entry.diffs.map((d) => (
              <DiffStat key={d.label ?? 'total'} diff={d} />
            ))}
            {entry.diffNote && <p className="text-[12px] text-sub">{entry.diffNote}</p>}
          </div>
        )}
      </div>
    </article>
  )
}

const typeStyle: Record<MergedPr['type'], string> = {
  feat: 'text-ok border-ok/40',
  fix: 'text-err border-err/40',
  refactor: 'text-sub border-line',
}

const filters = ['Todas', 'Front-end', 'Back-end'] as const
type Filter = (typeof filters)[number]

function MergedList() {
  const [filter, setFilter] = useState<Filter>('Todas')
  const visible = filter === 'Todas' ? otherWork : otherWork.filter((pr) => pr.area === filter)

  return (
    <article className="mt-3 min-w-0 overflow-hidden rounded-[20px] border border-line bg-tile md:mt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
        <h3 className="font-mono text-[11px] font-medium tracking-[0.12em] text-sub uppercase">Também mergeado</h3>
        <div role="group" aria-label="Filtrar por área" className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className="rounded-full border border-line px-3 py-1 font-mono text-[12px] text-sub transition-colors hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-bg"
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {visible.map((pr) => (
          <li
            key={pr.text}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-2 border-t border-line px-5 py-4 first:border-t-0 sm:px-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center"
          >
            <MergeIcon className="mt-0.5 text-merged md:mt-0" />
            <p className="text-[15px]">
              <span className={`mr-2 rounded border px-1.5 py-px font-mono text-[11px] ${typeStyle[pr.type]}`}>
                {pr.type}
              </span>
              {pr.text}
            </p>
            <div className="col-start-2 flex flex-wrap items-center gap-x-3 gap-y-1 md:col-start-auto md:justify-end">
              <span className="font-mono text-[11px] text-sub">{pr.area}</span>
              <DiffStat diff={pr.diff} />
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Work() {
  const [featured, ...rest] = workEntries

  return (
    <section id="trabalho" aria-labelledby="titulo-trabalho" className="border-t border-line">
      <div className={`${container} py-20`}>
        <p className={`${eyebrow} text-acc`}>No trabalho · DataSmartCom</p>
        <h2
          id="titulo-trabalho"
          className="mt-3 max-w-[18ch] font-display text-[40px] leading-[1] font-extrabold tracking-[-0.035em] sm:text-6xl"
        >
          Do front ao back, quando o problema pede
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg text-sub">
          Trabalho em plataformas web e mobile de logística. Meu foco é o front-end, mas sigo a tarefa até a API em
          .NET quando é lá que o problema está. Cada PR que abro explica a situação, o que mudou e o que ficou sem
          testar.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-6 lg:grid-cols-4">
          {workStats.items.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 text-sm text-sub">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-3 md:gap-4 lg:grid-cols-2 lg:items-start">
          <FeaturedCard entry={featured} />
          {rest.map((e) => (
            <WorkCard key={e.id} entry={e} />
          ))}
        </div>

        <MergedList />

        <p className="mt-5 max-w-[70ch] text-sm text-sub">
          O código é privado da empresa. Por isso as entregas aparecem descritas, sem links, trechos de código ou
          nomes de clientes. Contagem de PRs feita no GitHub em {workStats.asOf}.
        </p>
      </div>
    </section>
  )
}
