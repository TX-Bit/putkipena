import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, TrendingDown, ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { references } from '../data/references'

const categories = [
  { id: 'all', label: 'Kaikki' },
  { id: 'vesi-ilmalampopumppu', label: 'Vesi-ilmalämpö' },
  { id: 'maalampopumppu', label: 'Maalämpö' },
  { id: 'ilmalampopumppu', label: 'Ilmalämpö' },
  { id: 'lvi-urakointi', label: 'Urakointi' },
  { id: 'putkiremontit', label: 'Putkiremontti' },
]

export default function ReferencesSection() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? references : references.filter((r) => r.category === active)

  return (
    <SectionWrapper id="referenssit" bg="light">
      <SectionHeading
        eyebrow="Referenssit"
        title="Tehtyjä projekteja Pohjois-Savossa"
        subtitle="Olemme toteuttaneet satoja projekteja ympäri maakunnan. Tässä muutamia esimerkkejä."
        center
      />

      {/* Filter tabs */}
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

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
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
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover group transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
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

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-brand-900 mb-2">{ref.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{ref.description}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {ref.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {ref.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-10">
        <Link
          to="/referenssit"
          className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
        >
          Katso kaikki referenssit
          <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  )
}
