import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Droplets, Mountain, Wind, Wrench, Building2, Pipette, Clock, ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'

const mainServices = [
  {
    icon: Wind,
    title: 'Ilmalämpöpumput',
    slug: '/palvelut/ilmalampopumppu',
    desc: 'Edullinen lisälämmitys ja viilennys. Asennus onnistuu yhdessä päivässä.',
    price: 'alk. 1 200 €',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'hover:border-sky-200',
  },
  {
    icon: Droplets,
    title: 'Vesi-ilmalämpöpumput',
    slug: '/palvelut/vesi-ilmalampopumppu',
    desc: 'Korvaa öljyn tai sähkön. Sopii vesikiertoiseen lämmitykseen.',
    price: 'alk. 5 900 €',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-200',
  },
  {
    icon: Mountain,
    title: 'Maalämpöpumput',
    slug: '/palvelut/maalampopumppu',
    desc: 'Paras hyötysuhde pitkällä aikavälillä. Toimii ympäri vuoden.',
    price: 'alk. 10 900 €',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-200',
  },
]

const otherServices = [
  { icon: Wrench,    label: 'LVI-huollot',      slug: '/palvelut/lvi-huollot' },
  { icon: Building2, label: 'LVI-urakointi',     slug: '/palvelut/lvi-urakointi' },
  { icon: Pipette,   label: 'Putkiremontit',     slug: '/palvelut/putkiremontit' },
  { icon: Clock,     label: 'Päivystys sovittaessa', slug: '/paivystys' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <SectionWrapper id="palvelut" bg="light">
      <SectionHeading
        eyebrow="Palvelut"
        title="Mitä teemme"
        subtitle="Lämpöpumput ovat ydinosaamisemme. Lisäksi hoidamme kaikki LVI-työt."
        center
      />

      {/* 3 main cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {mainServices.map((s) => {
          const Icon = s.icon
          return (
            <motion.div key={s.slug} variants={item}>
              <Link
                to={s.slug}
                className={`group block bg-white rounded-2xl p-7 border-2 border-transparent ${s.border} shadow-card hover:shadow-card-hover transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={s.color} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-700 font-bold">{s.price}</span>
                  <ArrowRight size={16} className={`${s.color} group-hover:translate-x-1 transition-transform`} />
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Other services */}
      <div className="border-t border-slate-200 pt-10">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5 text-center">
          Muut LVI-palvelut
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {otherServices.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.slug}
                to={s.slug}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-300 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-medium px-5 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                <Icon size={15} />
                {s.label}
              </Link>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
