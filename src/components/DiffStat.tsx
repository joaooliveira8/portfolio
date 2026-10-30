import type { Diff } from '../data/work'

const fmt = (n: number) => n.toLocaleString('pt-BR')

// Cinco quadradinhos como no GitHub: verdes na proporção das linhas adicionadas, o resto vermelho.
function DiffBar({ add, del }: { add: number; del: number }) {
  const total = add + del
  const green = total === 0 ? 0 : Math.round((add / total) * 5)
  return (
    <span className="inline-flex gap-[2px]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={`size-2 rounded-[2px] ${i < green ? 'bg-ok' : 'bg-err'}`} />
      ))}
    </span>
  )
}

export default function DiffStat({ diff }: { diff: Diff }) {
  const files = diff.files === 1 ? '1 arquivo' : `${diff.files} arquivos`
  return (
    <span
      className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] tabular-nums"
      aria-label={`${diff.label ? `${diff.label}: ` : ''}${fmt(diff.add)} linhas adicionadas, ${fmt(diff.del)} removidas, em ${files}`}
    >
      {diff.label && <span className="text-sub">{diff.label}</span>}
      <span className="text-ok">+{fmt(diff.add)}</span>
      <span className="text-err">−{fmt(diff.del)}</span>
      <DiffBar add={diff.add} del={diff.del} />
      <span className="text-sub">{files}</span>
    </span>
  )
}
