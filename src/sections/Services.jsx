import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Droplets, Mountain, Wind, Wrench, Pipette, Building2, ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { services } from '../data/services'

const iconMap = {
  Droplets,
  Mountain,
  Wind,
  Wrench,
  PipelineIcon: Pipette,
  Building2,
}

const colorMap = {
  blue:   { bg: 'bg-blue-50',  icon: 'text-blue-600',  badge: 'bg-blue-100 text-blue-700',  border: 'hover:border-blue-200' },
  green:  { bg: 'bg-emerald-50', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', border: 'hover:border-emerald-200' },
  sky:    { bg: 'bg-sky-50',   icon: 'text-sky-600',   badge: 'bg-sky-100 text-sky-700',    border: 'hover:border-sky-200' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-500', badge: 'bg-orange-100 text-orange-700', border: 'hover:border-orange-200' },
  slate:  { bg: 'bg-slate-50', icon: 'text-slate-600', badge: 'bg-slate-100 text-slate-700', border: 'hover:border-slate-200' },
  brand:  { bg: 'bg-brand-50', icon: 'text-brand-600', badge: 'bg-brand-100 text-brand-700', border: 'hover:border-brand-200' },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <SectionWrapper id="palvelut" bg="light">
      <SectionHeading
        eyebrow="Palvelumme"
        title="Kaikki LVI-palvelut yhdestä paikasta"
        subtitle="Hoidamme koko projektin suunnittelusta asennukseen ja huoltoon. Yksi yhteydenotto riittää."
        center
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Wrench
          const colors = colorMap[service.color] || colorMap.brand

          return (
            <motion.div key={service.id} variants={item}>
              <Link
                to={service.slug}
                className={`group block bg-white rounded-2xl p-6 md:p-7 border-2 border-transparent ${colors.border} shadow-card hover:shadow-card-hover transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={colors.icon} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-900 mb-1.5 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">alkaen</span>
                    <div className="text-brand-700 font-bold">
                      {service.priceFrom === 'Pyydä tarjous'
                        ? service.priceFrom
                        : `${service.priceFrom} €`
                      }
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center group-hover:bg-brand-700 transition-colors duration-300`}>
                    <ArrowRight size={15} className={`${colors.icon} group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-slate-500 mb-4">Etkö löydä etsimääsi?</p>
        <Link
          to="/yhteystiedot"
          className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-900 transition-colors border-b-2 border-brand-200 hover:border-brand-700 pb-0.5"
        >
          Ota yhteyttä — hoidetaan asia kuntoon
          <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  )
}
