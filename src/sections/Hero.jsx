import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { company } from '../data/company'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80"
          alt="Lämpöpumppu asennus"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/92 via-brand-900/80 to-brand-800/60" />
      </div>

      <div className="relative z-10 container-site py-40">
        <div className="max-w-xl">

          <motion.h1
            {...fadeUp(0)}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 text-balance"
          >
            Lämpöpumput ja{' '}
            <span className="text-accent-400">LVI-palvelut</span>{' '}
            Satakunnassa
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="text-lg text-white/70 mb-10 leading-relaxed"
          >
            Asennamme lämpöpumput ja hoidamme LVI-työt Satakunnassa.
            Nopea palvelu, kirjallinen takuu.
          </motion.p>

          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col xs:flex-row gap-4 mb-14"
          >
            <Link
              to="/tarjouspyynto"
              className="inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-cta transition-all duration-200 group"
            >
              Pyydä tarjous
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/25 hover:border-white/50 transition-all duration-200"
            >
              <Phone size={17} />
              Soita nyt
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/55"
          >
            <a href={company.phoneHref} className="hover:text-white/80 transition-colors">
              <span className="text-white/40 mr-1.5">Puh.</span>
              <span className="text-white font-medium">{company.phone}</span>
            </a>
            <span>
              <span className="text-white/40 mr-1.5">Aukioloajat</span>
              <span className="text-white font-medium">{company.hours.weekdays}</span>
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
