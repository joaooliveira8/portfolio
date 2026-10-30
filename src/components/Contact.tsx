import { profile } from '../data/profile'
import ContactForm from './ContactForm'
import CopyButton from './CopyButton'
import { ChatIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { container, eyebrow, tile, tileLabel } from './ui'

const channels = [
  { icon: ChatIcon, label: 'WhatsApp', value: profile.phone, href: profile.whatsapp },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'joão-pedro-de-oliveira', href: profile.linkedin },
  { icon: GitHubIcon, label: 'GitHub', value: 'joaooliveira8', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="border-t border-line">
      <div className={`${container} grid gap-3 py-20 md:gap-4 lg:grid-cols-5`}>
        <div className="min-w-0 rounded-[20px] bg-acc p-6 text-acc-ink sm:p-8 lg:col-span-2">
          <p className={`${eyebrow} opacity-80`}>Contato</p>
          <h2
            id="titulo-contato"
            className="mt-3 font-display text-[40px] leading-[1] font-extrabold tracking-[-0.035em] sm:text-[56px]"
          >
            Vamos conversar?
          </h2>
          <p className="mt-4 max-w-[40ch] opacity-90">
            Tem uma vaga ou um projeto em mente? Escreva pelo formulário ou pelo canal que preferir.
          </p>

          <div className="mt-8 grid gap-1 border-t border-acc-ink/25 pt-5">
            <p className="flex items-center gap-2 text-sm opacity-80">
              <MailIcon /> E-mail
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a href={`mailto:${profile.email}`} className="text-lg font-bold break-all underline-offset-4 hover:underline">
                {profile.email}
              </a>
              <CopyButton
                value={profile.email}
                label="Copiar e-mail"
                className="rounded-lg border border-acc-ink/30 px-2.5 py-1 text-sm font-semibold hover:bg-acc-ink/10"
              />
            </div>
          </div>

          <ul className="mt-5 grid gap-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-acc-ink/25 px-4 py-3 transition-colors hover:bg-acc-ink/10"
                >
                  <Icon className="shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-sm opacity-80">{label}</span>
                    <span className="block truncate font-semibold">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${tile} sm:p-8 lg:col-span-3`}>
          <h3 className={tileLabel}>Mande uma mensagem</h3>
          <p className="mb-6 max-w-[56ch] text-sub">
            Experimente enviar com um campo vazio: o cursor vai direto para o primeiro campo que precisa de correção.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
