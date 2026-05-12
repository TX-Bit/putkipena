import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function StickyOfferButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          // Only show on mobile (hidden md and up since there's a navbar CTA)
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden"
        >
          <div className="bg-white border-t border-slate-200 px-4 py-3 flex gap-3">
            <Link
              to="/tarjouspyynto"
              className="flex-1 flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold py-3.5 rounded-xl shadow-cta transition-colors"
            >
              Pyydä tarjous
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
