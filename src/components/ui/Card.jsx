import React from 'react'
import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  border = true,
  shadow = true,
  onClick,
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`
        bg-white rounded-2xl
        ${padding ? 'p-6 md:p-8' : ''}
        ${border ? 'border border-slate-100' : ''}
        ${shadow ? 'shadow-card hover:shadow-card-hover' : ''}
        ${hover ? 'transition-shadow duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
