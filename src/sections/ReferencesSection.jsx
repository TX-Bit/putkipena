import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { references } from '../data/references'

export default function ReferencesSection() {
  return (
    <SectionWrapper id="referenssit" bg="white">
      <SectionHeading
        eyebrow="Referenssit"
        title="Tehtyjä töitä"
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {references.map((ref, i) => (
          <motion.div
            key={ref.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="border border-slate-200 rounded-xl overflow-hidden"
          >
            <div className="h-36 overflow-hidden bg-slate-100">
              <img
                src={ref.image}
                alt={ref.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-brand-900 mb-1 text-sm">{ref.title}</div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin size={11} />
                {ref.location}, {ref.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
