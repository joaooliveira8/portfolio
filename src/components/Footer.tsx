import { profile } from '../data/profile'
import { container } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-wrap justify-between gap-x-6 gap-y-2 py-8 text-sm text-sub`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Feito com React, TypeScript e Tailwind CSS.</p>
      </div>
    </footer>
  )
}
