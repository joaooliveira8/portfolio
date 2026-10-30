import { useRef, useState, type FormEvent } from 'react'
import { profile } from '../data/profile'
import { buttonPrimary } from './ui'

type Field = 'nome' | 'email' | 'mensagem'
type Errors = Partial<Record<Field, string>>

// Ordem dos campos na tela: o foco vai para o primeiro inválido nesta ordem.
const order: Field[] = ['nome', 'email', 'mensagem']
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {}
  if (!values.nome.trim()) errors.nome = 'Informe seu nome.'
  if (!values.email.trim()) errors.email = 'Informe seu e-mail.'
  else if (!EMAIL.test(values.email.trim())) errors.email = 'Confira o e-mail. Ele precisa ter o formato voce@empresa.com.'
  if (values.mensagem.trim().length < 10) errors.mensagem = 'Escreva uma mensagem com pelo menos 10 caracteres.'
  return errors
}

const inputClass =
  'w-full rounded-xl border border-line bg-tile-2 px-3.5 py-3 text-[15px] text-ink placeholder:text-sub/70 transition-colors aria-[invalid=true]:border-err'

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const refs = {
    nome: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    mensagem: useRef<HTMLTextAreaElement>(null),
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const values = {
      nome: String(data.get('nome') ?? ''),
      email: String(data.get('email') ?? ''),
      mensagem: String(data.get('mensagem') ?? ''),
    }
    const next = validate(values)
    setErrors(next)

    const firstInvalid = order.find((f) => next[f])
    if (firstInvalid) {
      setSent(false)
      refs[firstInvalid].current?.focus()
      return
    }

    // Site estático, sem servidor: o envio abre o app de e-mail com a mensagem pronta.
    const subject = `Contato pelo portfólio: ${values.nome.trim()}`
    const body = `${values.mensagem.trim()}\n\n${values.nome.trim()}\n${values.email.trim()}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  function clearError(field: Field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const describedBy = (field: Field) => (errors[field] ? `erro-${field}` : undefined)

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="contato-nome" className="text-sm font-semibold">
            Nome
          </label>
          <input
            ref={refs.nome}
            id="contato-nome"
            name="nome"
            autoComplete="name"
            aria-invalid={!!errors.nome}
            aria-describedby={describedBy('nome')}
            onChange={() => clearError('nome')}
            className={inputClass}
          />
          {errors.nome && (
            <p id="erro-nome" className="text-sm text-err">
              {errors.nome}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="contato-email" className="text-sm font-semibold">
            E-mail
          </label>
          <input
            ref={refs.email}
            id="contato-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@empresa.com"
            aria-invalid={!!errors.email}
            aria-describedby={describedBy('email')}
            onChange={() => clearError('email')}
            className={inputClass}
          />
          {errors.email && (
            <p id="erro-email" className="text-sm text-err">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="contato-mensagem" className="text-sm font-semibold">
          Mensagem
        </label>
        <textarea
          ref={refs.mensagem}
          id="contato-mensagem"
          name="mensagem"
          rows={5}
          placeholder="Conte sobre a vaga ou o projeto."
          aria-invalid={!!errors.mensagem}
          aria-describedby={describedBy('mensagem')}
          onChange={() => clearError('mensagem')}
          className={`${inputClass} resize-y`}
        />
        {errors.mensagem && (
          <p id="erro-mensagem" className="text-sm text-err">
            {errors.mensagem}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="submit" className={buttonPrimary}>
          Enviar mensagem
        </button>
        <p className="text-sm text-sub">Ao enviar, seu app de e-mail abre com a mensagem pronta.</p>
      </div>
      <p aria-live="polite" className="text-sm text-ok empty:hidden">
        {sent ? `Mensagem pronta no seu app de e-mail. Se ele não abriu, escreva direto para ${profile.email}.` : ''}
      </p>
    </form>
  )
}
