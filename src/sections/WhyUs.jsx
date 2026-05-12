import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'

const points = [
  {
    title: 'Selkeä yhteydenotto',
    text: 'Soita tai täytä tarjouspyyntölomake. Kartoitamme tilanteen ja annamme tarjouksen nopeasti.',
  },
  {
    title: 'Paikallinen palvelu Satakunnassa',
    text: 'Toimimme Satakunnassa. Tunnemme alueen ja pystymme sopimaan aikataulut joustavasti.',
  },
  {
    title: 'Lämpöpumppu- ja LVI-työt samalta yritykseltä',
    text: 'Hoidamme koko projektin suunnittelusta asennukseen. Ei tarvitse etsiä useaa urakoijaa.',
  },
]

export default function WhyUs() {
  return (
    <SectionWrapper id="miksi-me" bg="light">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block text-accent-500 text-sm font-semibold tracking-widest uppercase mb-3">
          Miksi Putkipena
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900">
          Yksinkertaista ja suoraviivaista
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto"
      >
        {points.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="w-6 h-0.5 bg-accent-400 mb-4" />
            <h3 className="font-bold text-brand-900 text-lg mb-2">{p.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{p.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
