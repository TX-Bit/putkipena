import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { company } from '../../data/company'

const navItems = [
  { label: 'Etusivu', href: '/' },
  {
    label: 'Palvelut',
    href: '/palvelut',
    children: [
      { label: 'Vesi-ilmalämpöpumput', href: '/palvelut/vesi-ilmalampopumppu' },
      { label: 'Maalämpöpumput', href: '/palvelut/maalampopumppu' },
      { label: 'Ilmalämpöpumput', href: '/palvelut/ilmalampopumppu' },
      { label: 'LVI-huollot', href: '/palvelut/lvi-huollot' },
      { label: 'Putkiremontit', href: '/palvelut/putkiremontit' },
      { label: 'LVI-urakointi', href: '/palvelut/lvi-urakointi' },
    ],
  },
  { label: 'Hinnasto', href: '/hinnasto' },
  { label: 'Päivystys', href: '/paivystys' },
  { label: 'Referenssit', href: '/referenssit' },
  { label: 'Yhteystiedot', href: '/yhteystiedot' },
]

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
        >
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `block px-5 py-2.5 text-sm font-medium transition-colors duration-150
                ${isActive
                  ? 'text-accent-500 bg-accent-50'
                  : 'text-slate-700 hover:text-brand-700 hover:bg-brand-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isHero = location.pathname === '/'

  const navBg = scrolled || !isHero
    ? 'bg-brand-900/98 backdrop-blur-md shadow-lg shadow-brand-950/30'
    : 'bg-transparent'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-accent-400 flex items-center justify-center font-black text-white text-lg group-hover:bg-accent-500 transition-colors">
                P
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg tracking-tight">{company.name}</div>
                <div className="text-brand-300 text-xs font-medium hidden sm:block">LVI-palvelut Pohjois-Savossa</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-150"
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <DropdownMenu items={item.children} isOpen={servicesOpen} />
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                      ${isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <a
                href={company.phoneHref}
                className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Phone size={15} />
                </div>
                <span className="text-sm font-semibold">{company.phone}</span>
              </a>

              {/* CTA */}
              <Link
                to="/tarjouspyynto"
                className="hidden sm:inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Pyydä tarjous
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Sulje valikko' : 'Avaa valikko'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-brand-950/80 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-brand-900 z-40 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="text-white font-bold text-lg">{company.name}</div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white/90 font-medium rounded-xl hover:bg-white/10 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children.map((child) => (
                              <NavLink
                                key={child.href}
                                to={child.href}
                                className={({ isActive }) =>
                                  `block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                                    isActive ? 'text-accent-400 bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-4 py-3 font-medium rounded-xl transition-colors ${
                          isActive ? 'text-white bg-white/15' : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </nav>

              <div className="p-4 border-t border-white/10 space-y-3">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  <Phone size={18} />
                  {company.phone}
                </a>
                <Link
                  to="/tarjouspyynto"
                  className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-white font-bold px-4 py-3.5 rounded-xl shadow-cta transition-colors"
                >
                  Pyydä tarjous
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
