import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Clock, ChevronDown, ArrowRight, Shield, Star } from 'lucide-react'
import { company } from '../data/company'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80"
          alt="Lämpöpumppu asennus"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-brand-800/70" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950/60 to-transparent" />
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-site pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Shield size={14} className="text-accent-400" />
            <span className="text-white/90 text-sm font-medium">
              Pätevä LVI-yritys · Pohjois-Savo · Päivystys 24/7
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 text-balance"
          >
            Lämpöpumput ja{' '}
            <span className="text-accent-400">LVI-palvelut</span>{' '}
            Pohjois-Savossa
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl text-balance leading-relaxed"
          >
            Asennamme vesi-ilma-, maa- ja ilmalämpöpumput sekä teemme kaikki LVI-työt.
            Nopea, siisti ja takuulla tehty.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className="flex flex-col xs:flex-row gap-4 mb-12"
          >
            <Link
              to="/tarjouspyynto"
              className="inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-cta hover:shadow-xl transition-all duration-200 group"
            >
              Pyydä ilmainen tarjous
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/30 hover:border-white/60 transition-all duration-200"
            >
              <Phone size={18} />
              Soita päivystykseen
            </a>
          </motion.div>

          {/* Info row */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2.5 text-white/80">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone size={16} className="text-accent-400" />
              </div>
              <div>
                <div className="text-xs text-white/50 font-medium">Puhelinnumero</div>
                <a href={company.phoneHref} className="text-white font-bold text-lg hover:text-accent-400 transition-colors">
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="w-px h-10 bg-white/20 hidden xs:block" />

            <div className="flex items-center gap-2.5 text-white/80">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock size={16} className="text-accent-400" />
              </div>
              <div>
                <div className="text-xs text-white/50 font-medium">Aukioloajat</div>
                <div className="text-white font-semibold">{company.hours.weekdays}</div>
              </div>
            </div>

            <div className="w-px h-10 bg-white/20 hidden xs:block" />

            <div className="flex items-center gap-2 text-white/80">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-accent-400 text-accent-400" />
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">5/5 asiakaspalautteet</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Tutustu palveluihin</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 bg-brand-900/80 backdrop-blur-md border-t border-white/10"
      >
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { number: '15+', label: 'Vuotta kokemusta' },
              { number: '500+', label: 'Asennusta tehty' },
              { number: '24/7', label: 'Päivystys käytössä' },
              { number: '100%', label: 'Tyytyväiset asiakkaat' },
            ].map((stat) => (
              <div key={stat.label} className="px-4 md:px-8 py-5 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-accent-400 mb-0.5">{stat.number}</div>
                <div className="text-xs md:text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
