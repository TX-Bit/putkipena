import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-accent-400 hover:bg-accent-500 text-white shadow-cta hover:shadow-lg',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60',
  outline: 'bg-transparent hover:bg-brand-50 text-brand-700 border-2 border-brand-700',
  ghost: 'bg-transparent hover:bg-brand-50 text-brand-700',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  dark: 'bg-brand-800 hover:bg-brand-900 text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  external,
  disabled,
  type = 'button',
  icon,
  iconAfter,
  fullWidth,
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-200 ease-out
    cursor-pointer select-none
    focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={base}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={base}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
    </motion.button>
  )
}
