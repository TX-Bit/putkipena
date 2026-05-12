import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/company'

const items = [
  {
    icon: Phone,
    label: 'Puhelin',
    value: company.phone,
    sub: company.hours.emergency,
    href: company.phoneHref,
    accent: true,
  },
  {
    icon: Clock,
    label: 'Aukioloajat',
    value: company.hours.weekdays,
    sub: 'Päivystys 24/7 hätätilanteisiin',
  },
  {
    icon: Mail,
    label: 'Sähköposti',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: 'Toimialue',
    value: 'Koko Satakunta',
    sub: company.address,
  },
]

export default function ContactInfo() {
  return (
    <section className="gradient-brand py-14 md:py-20">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="inline-block text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Ota yhteyttä
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Olemme helposti tavoitettavissa
            </h2>
          </div>
          <Link
            to="/tarjouspyynto"
            className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-cta transition-all duration-200 flex-shrink-0 group"
          >
            Pyydä tarjous
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl p-6 transition-colors duration-200 h-full ${item.href ? 'cursor-pointer' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent-400" />
                </div>
                <div className="text-white/50 text-xs font-medium mb-1">{item.label}</div>
                <div className={`font-bold text-base mb-1 ${item.accent ? 'text-accent-400 text-xl' : 'text-white'}`}>
                  {item.value}
                </div>
                {item.sub && (
                  <div className="text-white/50 text-xs">{item.sub}</div>
                )}
              </motion.div>
            )

            return item.href ? (
              <a key={i} href={item.href}>{inner}</a>
            ) : (
              <div key={i}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
