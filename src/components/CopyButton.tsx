import { useEffect, useState } from 'react'

type Props = { value: string; label: string; className?: string }

export default function CopyButton({ value, label, className = '' }: Props) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // Sem permissão de área de transferência: o endereço continua visível para copiar à mão.
      window.prompt('Copie o endereço:', value)
    }
  }

  return (
    <button type="button" onClick={copy} aria-label={copied ? 'Copiado' : label} className={className}>
      <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
    </button>
  )
}
