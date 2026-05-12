import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { testimonials } from '../data/testimonials'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= rating ? 'fill-accent-400 text-accent-400' : 'text-slate-200'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => {
    setDir(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setDir(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[current]

  return (
    <SectionWrapper id="palautteet" bg="dark" className="!text-white">
      <SectionHeading
        eyebrow="Asiakaspalautteet"
        title="Mitä asiakkaamme sanovat"
        center
        light
      />

      {/* Carousel */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Quote */}
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={t.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative"
            >
              <Quote size={48} className="text-accent-400/30 absolute top-6 right-8" />

              <StarRating rating={t.rating} />

              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mt-5 mb-8 font-medium">
                "{t.text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-white/50">{t.location} · {t.service}</div>
                </div>
                <div className="text-xs text-white/40 font-medium">{t.date}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Edellinen"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-2 bg-accent-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Palaute ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Seuraava"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Google rating note */}
      <div className="flex items-center justify-center gap-3 mt-10 text-white/50 text-sm">
        <div className="flex">
          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-accent-400 text-accent-400" />)}
        </div>
        <span>5.0 / 5.0 · Google Arvostelut</span>
      </div>
    </SectionWrapper>
  )
}
