import type { JSX } from 'react'
import type { ProjectVisual } from '../data/projects'
import { FlowArrowIcon, LoopIcon } from './Icons'
import { tile, tileLabel } from './ui'

// Fluxo e regra tirados de docs/regras-do-negocio.md (RN-011 e RN-015)
// e de testes/casos-de-teste.md (CT-AUTH-002) do repositório do projeto.
const states = ['Aberto', 'Em andamento', 'Aguardando usuário', 'Resolvido', 'Fechado']

function TicketsVisual() {
  return (
    <figure className={`${tile} sm:p-7`}>
      <figcaption className={tileLabel}>Máquina de estados de um chamado</figcaption>
      <ol className="mt-5 flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
        {states.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={[
                'rounded-full border px-3 py-1.5 text-sm font-semibold whitespace-nowrap',
                i === 0 && 'border-acc text-acc',
                i === states.length - 1 && 'border-ink bg-ink text-bg',
                i > 0 && i < states.length - 1 && 'border-line bg-tile-2',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {s}
            </span>
            {i < states.length - 1 && <FlowArrowIcon className="shrink-0 rotate-90 text-sub sm:rotate-0" />}
          </li>
        ))}
      </ol>
      <p className="mt-5 flex gap-3 rounded-xl border border-dashed border-line p-4 text-[15px]">
        <LoopIcon className="mt-0.5 shrink-0 text-acc" />
        <span>
          <strong>Solução rejeitada:</strong> se o usuário recusar a solução, o chamado volta sozinho para Em
          andamento. <span className="font-mono text-[13px] text-sub">RN-015</span>
        </span>
      </p>
      <div className="mt-3 rounded-xl bg-tile-2 p-4">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-[12px]">
          <span className="font-medium text-acc">CT-AUTH-002</span>
          <span className="text-sub">Autenticação · prioridade alta</span>
        </div>
        <p className="mt-2 font-semibold">Login com credenciais inválidas</p>
        <p className="text-[15px] text-sub">Esperado: mensagem de erro, e o usuário não é autenticado.</p>
      </div>
    </figure>
  )
}

// Miniaturas com cores fixas: mostram os dois temas lado a lado, independente do tema atual.
const palettes = {
  claro: { bg: '#e9ecf0', tile: '#ffffff', ink: '#16191d', sub: '#c9ced6', acc: '#c94a12' },
  escuro: { bg: '#111316', tile: '#1a1d22', ink: '#eceef1', sub: '#3a4048', acc: '#ff7a45' },
}

function MiniScreen({ name }: { name: keyof typeof palettes }) {
  const p = palettes[name]
  return (
    <figure className="m-0 grid min-w-0 gap-2">
      <div
        className="grid aspect-[4/3] max-w-full grid-cols-3 grid-rows-[auto_1fr_auto] gap-1.5 rounded-xl border border-line p-2.5"
        style={{ background: p.bg }}
        aria-hidden="true"
      >
        <div className="col-span-3 flex items-center gap-1.5">
          <span className="size-3 rounded-[4px]" style={{ background: p.acc }} />
          <span className="h-1.5 w-1/3 rounded-full" style={{ background: p.sub }} />
        </div>
        <div className="col-span-2 flex flex-col justify-end gap-1 rounded-lg p-2" style={{ background: p.tile }}>
          <span className="h-2 w-4/5 rounded-full" style={{ background: p.ink }} />
          <span className="h-2 w-3/5 rounded-full" style={{ background: p.ink }} />
          <span className="mt-1 h-2.5 w-2/5 rounded" style={{ background: p.acc }} />
        </div>
        <div className="rounded-lg" style={{ background: p.tile }} />
        <div className="col-span-3 h-4 rounded-md" style={{ background: p.tile }} />
      </div>
      <figcaption className="text-sm text-sub">Tema {name}</figcaption>
    </figure>
  )
}

function PortfolioVisual() {
  return (
    <div className={`${tile} sm:p-7`}>
      <p className={tileLabel}>Os dois temas, um só código</p>
      <div className="grid grid-cols-2 gap-3">
        <MiniScreen name="claro" />
        <MiniScreen name="escuro" />
      </div>
      <p className="mt-4 text-[15px] text-sub">
        Quer testar? Use o botão de tema no topo, ou envie o{' '}
        <a href="#contato" className="font-semibold text-ink underline decoration-acc underline-offset-4">
          formulário de contato
        </a>{' '}
        vazio.
      </p>
    </div>
  )
}

export const projectVisuals: Record<ProjectVisual, () => JSX.Element> = {
  tickets: TicketsVisual,
  portfolio: PortfolioVisual,
}
