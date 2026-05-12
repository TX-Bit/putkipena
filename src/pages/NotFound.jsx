import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen gradient-brand flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-white"
      >
        <div className="text-8xl font-extrabold text-white/20 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-3">Sivua ei löydy</h1>
        <p className="text-brand-200 mb-8">Etsimääsi sivua ei ole olemassa tai se on siirretty.</p>
        <div className="flex flex-col xs:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <Home size={16} />
            Etusivulle
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-colors"
          >
            <ArrowLeft size={16} />
            Takaisin
          </button>
        </div>
      </motion.div>
    </main>
  )
}
