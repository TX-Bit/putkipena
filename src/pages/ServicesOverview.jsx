import React from 'react'
import { motion } from 'framer-motion'
import Services from '../sections/Services'
import EmergencyBanner from '../sections/EmergencyBanner'
import QuoteForm from '../sections/QuoteForm'

export default function ServicesOverview() {
  return (
    <main className="pt-20">
      <section className="gradient-brand py-16 md:py-24">
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="heading-xl text-white mb-4">Palvelut</h1>
            <p className="text-brand-200 text-lg max-w-xl mx-auto">
              Hoidamme kaikki LVI-tarpeet — lämpöpumpuista putkiremontteihin ja urakoihin.
            </p>
          </motion.div>
        </div>
      </section>
      <Services />
      <EmergencyBanner />
      <QuoteForm compact />
    </main>
  )
}
