import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, AlertTriangle, CheckCircle, Zap } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import { company } from '../data/company'

const emergencyCases = [
  'Lämpöpumppu ei toimi pakkasella',
  'Vesivahinko tai putkivuoto',
  'Lämminvesivaraaja vikaantunut',
  'Lämmitys ei toimi talvella',
  'Viemäri tukossa',
  'Öljylämmityslaite lakkasi toimimasta',
]

const steps = [
  { num: '1', title: 'Soita päivystykseen', desc: 'Kerro tilanne päivystäjälle. Löydämme parhaan ratkaisun.' },
  { num: '2', title: 'Asentaja matkaan', desc: 'Lähitämme lähimmän ammattitaitoisen asentajan nopeasti.' },
  { num: '3', title: 'Ongelma korjataan', desc: 'Hoidamme tilanteen ammattitaidolla kerralla kuntoon.' },
]

export default function Emergency() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="gradient-accent py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="container-site relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="heading-xl mb-4">LVI-päivystys 24/7</h1>
            <p className="text-xl text-white/85 max-w-lg mx-auto mb-10">
              LVI-hätätilanne ei odota. Palvelemme ympäri vuorokauden, myös jouluna ja viikonloppuisin.
            </p>
            <motion.a
              href={company.phoneHref}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white text-accent-600 font-extrabold text-2xl px-10 py-5 rounded-2xl shadow-2xl"
            >
              <Phone size={26} />
              {company.phone}
            </motion.a>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/70">
              <Clock size={14} />
              <span className="text-sm">Vastaamme nopeasti — ympäri vuorokauden</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <SectionWrapper bg="white">
        <h2 className="heading-lg text-brand-900 text-center mb-12">Näin toimimme hätätilanteessa</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-brand-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Emergency cases */}
      <SectionWrapper bg="light">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-md text-brand-900 text-center mb-8">
            <Zap size={20} className="inline-block mr-2 text-accent-500" />
            Tyypillisiä hätätapauksia
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {emergencyCases.map((c, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100">
                <CheckCircle size={18} className="text-accent-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-brand-900 rounded-2xl p-6 text-center text-white">
            <p className="text-brand-200 mb-3">Päivystyshinta</p>
            <p className="text-xl font-bold mb-1">140 €/h + alv</p>
            <p className="text-brand-300 text-sm">Ilta-, yö- ja viikonlopputyöt</p>
            <div className="mt-5">
              <a href={company.phoneHref} className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <Phone size={16} /> Soita nyt: {company.phone}
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
