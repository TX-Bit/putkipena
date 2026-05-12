import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Phone, ChevronRight } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import QuoteForm from '../sections/QuoteForm'
import EmergencyBanner from '../sections/EmergencyBanner'
import { getServiceBySlug } from '../data/services'
import { company } from '../data/company'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/palvelut" replace />

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-800/60" />
        </div>
        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Etusivu</Link>
            <ChevronRight size={14} />
            <Link to="/palvelut" className="hover:text-white transition-colors">Palvelut</Link>
            <ChevronRight size={14} />
            <span className="text-white">{service.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-accent-400/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              {service.tagline}
            </div>
            <h1 className="heading-xl text-white mb-5">{service.title}</h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-col xs:flex-row gap-4">
              <Link
                to="/tarjouspyynto"
                className="inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-7 py-4 rounded-xl shadow-cta transition-all"
              >
                Pyydä tarjous
                <ArrowRight size={16} />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/30 transition-all"
              >
                <Phone size={16} />
                {company.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-900 mb-8 text-center">Mitä saat valitsemalla {service.title.toLowerCase()}?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-card"
              >
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {service.priceFrom !== 'Pyydä tarjous' && (
            <div className="mt-10 text-center">
              <div className="inline-block bg-brand-50 border border-brand-100 rounded-2xl px-8 py-5">
                <div className="text-sm text-slate-500 mb-1">Hinta alkaen</div>
                <div className="text-4xl font-extrabold text-brand-900">{service.priceFrom} €</div>
                <div className="text-sm text-slate-500 mt-1">Sisältää asennuksen · Pyydä tarkka tarjous</div>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      <EmergencyBanner />
      <QuoteForm compact />
    </main>
  )
}
