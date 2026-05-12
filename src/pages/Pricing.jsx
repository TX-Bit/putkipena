import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Droplets, Mountain, Wind, Wrench, Info, Phone, ArrowRight } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { pricingCategories } from '../data/pricing'
import { company } from '../data/company'
import { Link } from 'react-router-dom'

const iconMap = { Droplets, Mountain, Wind, Wrench }

export default function Pricing() {
  const [active, setActive] = useState(pricingCategories[0].id)
  const category = pricingCategories.find((c) => c.id === active)

  return (
    <main className="pt-20">
      {/* Page hero */}
      <section className="gradient-brand py-16 md:py-24">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Läpinäkyvä hinnoittelu
            </span>
            <h1 className="heading-xl text-white mb-4">Hinnasto</h1>
            <p className="text-brand-200 text-lg max-w-xl mx-auto">
              Ei piilomaksuja. Selkeät hinnat etukäteen. Tarkka tarjous aina ennen töiden aloittamista.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="light">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {pricingCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Wrench
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat.id
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700 border border-slate-200'
                }`}
              >
                <Icon size={15} />
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Price table */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-slate-100">
            <div className="gradient-brand px-6 py-5">
              <h2 className="text-white font-bold text-xl">{category?.title}</h2>
            </div>

            <div className="divide-y divide-slate-100">
              {category?.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center justify-between px-6 py-5 hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <div className="font-semibold text-brand-900">{item.name}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{item.description}</div>
                  </div>
                  <div className="text-right ml-4 flex-shrink-0">
                    <div className="font-extrabold text-brand-700 text-lg">{item.price}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {category?.note && (
              <div className="flex items-start gap-2.5 px-6 py-4 bg-blue-50 border-t border-blue-100">
                <Info size={15} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">{category.note}</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 mb-4">Haluatko tarkan hinnan juuri sinun projektiisi?</p>
            <div className="flex flex-col xs:flex-row gap-3 justify-center">
              <Link
                to="/tarjouspyynto"
                className="inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-cta transition-colors"
              >
                Pyydä tarjous
                <ArrowRight size={16} />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-700 text-brand-700 hover:bg-brand-50 font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                <Phone size={16} />
                Soita: {company.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  )
}
