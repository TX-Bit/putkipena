import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { references } from '../data/references'

export default function ReferencesSection() {
  return (
    <SectionWrapper id="referenssit" bg="white">
      <SectionHeading
        eyebrow="Referenssit"
        title="Tehtyjä töitä"
        subtitle="Esimerkkejä toteuttamistamme projekteista Satakunnassa."
        center
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {references.map((ref) => (
          <motion.div
            key={ref.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-44 overflow-hidden">
                <img
                  src={ref.image}
                  alt={ref.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-900 mb-1.5">{ref.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{ref.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><MapPin size={11} /> {ref.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {ref.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <Link
          to="/referenssit"
          className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900 font-semibold transition-colors border-b-2 border-brand-200 hover:border-brand-700 pb-0.5"
        >
          Katso lisää referenssejä
          <ArrowRight size={15} />
        </Link>
      </div>
    </SectionWrapper>
  )
}
