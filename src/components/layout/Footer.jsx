import React from 'react'
import { Link } from 'react-router-dom'
import { company } from '../../data/company'

const links = [
  { label: 'Palvelut',     href: '/palvelut' },
  { label: 'Hinnasto',     href: '/hinnasto' },
  { label: 'Referenssit',  href: '/referenssit' },
  { label: 'Päivystys',    href: '/paivystys' },
  { label: 'Yhteystiedot', href: '/yhteystiedot' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-site py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-400 flex items-center justify-center font-black text-white text-base flex-shrink-0">
              P
            </div>
            <div>
              <div className="font-bold text-sm">{company.name}</div>
              <div className="text-brand-400 text-xs">LVI-palvelut Satakunnassa</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors flex-shrink-0"
          >
            {company.phone}
          </a>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-brand-500">
          © {new Date().getFullYear()} {company.name} · Y-tunnus {company.businessId}
        </div>
      </div>
    </footer>
  )
}
