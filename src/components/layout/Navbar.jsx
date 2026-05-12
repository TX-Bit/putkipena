import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { company } from '../../data/company'

const navItems = [
  { label: 'Palvelut',      href: '/palvelut' },
  { label: 'Hinnasto',      href: '/hinnasto' },
  { label: 'Päivystys',     href: '/paivystys' },
  { label: 'Referenssit',   href: '/referenssit' },
  { label: 'Yhteystiedot',  href: '/yhteystiedot' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHero = location.pathname === '/'
  const navBg = scrolled || !isHero
    ? 'bg-brand-900/98 backdrop-blur-md shadow-lg shadow-brand-950/30'
    : 'bg-transparent'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-accent-400 flex items-center justify-center font-black text-white text-lg group-hover:bg-accent-500 transition-colors">
                P
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg tracking-tight">{company.name}</div>
                <div className="text-brand-300 text-xs font-medium hidden sm:block">LVI-palvelut Satakunnassa</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                      isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: phone + CTA */}
            <div className="flex items-center gap-3">
              <a
                href={company.phoneHref}
                className="hidden md:flex items-center gap-2 text-white/85 hover:text-white transition-colors group"
              >
                <Phone size={15} className="text-accent-400" />
                <span className="text-sm font-semibold">{company.phone}</span>
              </a>
              <Link
                to="/tarjouspyynto"
                className="hidden sm:inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Pyydä tarjous
              </Link>
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
              className="fixed top-0 right-0 bottom-0 w-72 max-w-full bg-brand-900 z-40 lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="text-white font-bold">{company.name}</div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-4 py-3 font-medium rounded-xl transition-colors ${
                        isActive ? 'text-white bg-white/15' : 'text-white/85 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="p-4 border-t border-white/10 space-y-3">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  <Phone size={17} />
                  {company.phone}
                </a>
                <Link
                  to="/tarjouspyynto"
                  className="flex items-center justify-center bg-accent-400 hover:bg-accent-500 text-white font-bold px-4 py-3.5 rounded-xl shadow-cta transition-colors"
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
