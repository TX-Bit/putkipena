import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, TrendingDown } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { references } from '../data/references'
import QuoteForm from '../sections/QuoteForm'

const categories = [
  { id: 'all', label: 'Kaikki projektit' },
  { id: 'vesi-ilmalampopumppu', label: 'Vesi-ilmalämpö' },
  { id: 'maalampopumppu', label: 'Maalämpö' },
  { id: 'ilmalampopumppu', label: 'Ilmalämpö' },
  { id: 'lvi-urakointi', label: 'LVI-urakointi' },
  { id: 'putkiremontit', label: 'Putkiremontit' },
]

export default function References() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? references : references.filter((r) => r.category === active)

  return (
    <main className="pt-20">
      <section className="gradient-brand py-16 md:py-24">
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Tehtyä työtä</span>
            <h1 className="heading-xl text-white mb-4">Referenssit</h1>
            <p className="text-brand-200 text-lg max-w-xl mx-auto">
              Yli 500 toteutettua projektia Pohjois-Savossa. Tässä esimerkkejä tehdystä työstä.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="light">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((ref) => (
              <motion.div
                key={ref.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 group transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={ref.image}
                      alt={ref.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {ref.savings && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <TrendingDown size={12} />
                        Säästö {ref.savings}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-900 mb-2">{ref.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{ref.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {ref.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {ref.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>

      <QuoteForm compact />
    </main>
  )
}
