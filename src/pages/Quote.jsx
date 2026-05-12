import React from 'react'
import { motion } from 'framer-motion'
import QuoteForm from '../sections/QuoteForm'

export default function Quote() {
  return (
    <main className="pt-20">
      <section className="gradient-brand py-16 md:py-20">
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Maksuton ja sitomaton
            </span>
            <h1 className="heading-xl text-white mb-4">Tarjouspyyntö</h1>
            <p className="text-brand-200 text-lg max-w-lg mx-auto">
              Täytä lomake niin otamme yhteyttä seuraavan arkipäivän aikana. Ei velvoitteita.
            </p>
          </motion.div>
        </div>
      </section>
      <QuoteForm />
    </main>
  )
}
