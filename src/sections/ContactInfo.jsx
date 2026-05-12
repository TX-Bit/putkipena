import React from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/company'

export default function ContactInfo() {
  return (
    <section className="bg-brand-900 py-14 md:py-16">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Yhteystiedot
          </span>
          <h2 className="text-3xl font-bold text-white">Ota yhteyttä</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Puhelin</div>
            <a
              href={company.phoneHref}
              className="text-xl font-bold text-accent-400 hover:text-accent-300 transition-colors block"
            >
              {company.phone}
            </a>
          </div>

          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Aukioloajat</div>
            <div className="text-white font-semibold">{company.hours.weekdays}</div>
            <div className="text-white/50 text-sm mt-0.5">Päivystys sovittaessa</div>
          </div>

          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Toimialue</div>
            <div className="text-white font-semibold">Satakunta</div>
            <div className="text-white/50 text-sm mt-0.5">Sovittaessa myös muualla</div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/tarjouspyynto"
            className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-cta transition-colors"
          >
            Pyydä tarjous
          </Link>
        </div>
      </div>
    </section>
  )
}
