import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Clock, ArrowRight } from 'lucide-react'
import { company } from '../data/company'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80"
          alt="Lämpöpumppu asennus"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/92 via-brand-900/82 to-brand-800/65" />
      </div>

      <div className="relative z-10 container-site pt-28 pb-16">
        <div className="max-w-2xl">

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 text-balance"
          >
            Lämpöpumput ja{' '}
            <span className="text-accent-400">LVI-palvelut</span>{' '}
            Satakunnassa
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="show"
            className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed"
          >
            Asennamme lämpöpumput ja hoidamme LVI-työt Satakunnassa.
            Nopea palvelu, kirjallinen takuu.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="flex flex-col xs:flex-row gap-4 mb-12"
          >
            <Link
              to="/tarjouspyynto"
              className="inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-cta hover:shadow-xl transition-all duration-200 group"
            >
              Pyydä tarjous
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/30 hover:border-white/60 transition-all duration-200"
            >
              <Phone size={18} />
              Soita nyt
            </a>
          </motion.div>

          {/* Phone + hours */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-6"
          >
            <a href={company.phoneHref} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition-colors">
                <Phone size={16} className="text-accent-400" />
              </div>
              <div>
                <div className="text-white/50 text-xs font-medium">Puhelinnumero</div>
                <div className="text-white font-bold text-xl group-hover:text-accent-400 transition-colors">
                  {company.phone}
                </div>
              </div>
            </a>

            <div className="w-px h-10 bg-white/20 hidden xs:block" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock size={16} className="text-accent-400" />
              </div>
              <div>
                <div className="text-white/50 text-xs font-medium">Aukioloajat</div>
                <div className="text-white font-semibold">{company.hours.weekdays}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
