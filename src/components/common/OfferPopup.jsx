import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Thermometer } from 'lucide-react'
import { Link } from 'react-router-dom'

const DELAY_MS = 15000
const SESSION_KEY = 'popup_dismissed'

export default function OfferPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return

    const timer = setTimeout(() => setShow(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setShow(false)
    sessionStorage.setItem(SESSION_KEY, '1')
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-brand-950/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-x-4 bottom-8 sm:inset-auto sm:right-6 sm:bottom-24 sm:w-96 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
              {/* Header */}
              <div className="gradient-brand px-6 py-5 relative">
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Sulje"
                >
                  <X size={14} />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-accent-400 flex items-center justify-center">
                    <Thermometer size={18} className="text-white" />
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Erikoistarjous</span>
                </div>
                <h3 className="text-white font-extrabold text-xl leading-tight">
                  Pyydä tarjous vesi-ilmalämpöpumpun asennuksesta
                </h3>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Vaihda öljylämmitys moderniin lämpöpumppuun ja säästä jopa{' '}
                  <strong className="text-brand-700">2 000–4 000 € vuodessa</strong> lämmityskuluissa.
                </p>
                <ul className="space-y-1.5 mb-5">
                  {['Ilmainen kartoituskäynti', 'Nopea asennus 1–2 päivässä', 'Kirjallinen takuu'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/tarjouspyynto"
                  onClick={dismiss}
                  className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-cta transition-all duration-200 w-full"
                >
                  Pyydä ilmainen tarjous
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={dismiss}
                  className="w-full text-center text-xs text-slate-400 hover:text-slate-600 mt-3 transition-colors"
                >
                  Ei kiitos, ehkä myöhemmin
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
