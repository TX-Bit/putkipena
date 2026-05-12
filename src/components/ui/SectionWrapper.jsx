import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SectionWrapper({
  children,
  id,
  className = '',
  bg = 'white',
  tight = false,
  animate = true,
}) {
  const [ref, inView] = useInView({ threshold: 0.1, once: true })

  const bgMap = {
    white: 'bg-white',
    light: 'bg-brand-50',
    dark: 'bg-brand-900',
    slate: 'bg-slate-50',
    none: '',
  }

  return (
    <section
      id={id}
      ref={animate ? ref : undefined}
      className={`${tight ? 'py-10 md:py-16' : 'py-16 md:py-24'} ${bgMap[bg] || ''} ${className}`}
    >
      <motion.div
        className="container-site"
        initial={animate ? { opacity: 0, y: 28 } : false}
        animate={animate && inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${light ? 'text-accent-300' : 'text-accent-500'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`heading-lg ${light ? 'text-white' : 'text-brand-900'} text-balance`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-brand-200' : 'text-slate-500'} text-balance`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
