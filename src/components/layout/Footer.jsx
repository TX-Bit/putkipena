import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronRight } from 'lucide-react'
import { company } from '../../data/company'

const footerLinks = {
  palvelut: [
    { label: 'Vesi-ilmalämpöpumput', href: '/palvelut/vesi-ilmalampopumppu' },
    { label: 'Maalämpöpumput', href: '/palvelut/maalampopumppu' },
    { label: 'Ilmalämpöpumput', href: '/palvelut/ilmalampopumppu' },
    { label: 'LVI-huollot', href: '/palvelut/lvi-huollot' },
    { label: 'Putkiremontit', href: '/palvelut/putkiremontit' },
    { label: 'LVI-urakointi', href: '/palvelut/lvi-urakointi' },
  ],
  yritys: [
    { label: 'Etusivu', href: '/' },
    { label: 'Hinnasto', href: '/hinnasto' },
    { label: 'Referenssit', href: '/referenssit' },
    { label: 'Päivystys', href: '/paivystys' },
    { label: 'Yhteystiedot', href: '/yhteystiedot' },
    { label: 'Tarjouspyyntö', href: '/tarjouspyynto' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer */}
      <div className="container-site py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent-400 flex items-center justify-center font-black text-white text-lg">
                P
              </div>
              <div>
                <div className="font-bold text-lg">{company.name}</div>
                <div className="text-brand-300 text-xs">LVI-palvelut Satakunnassa</div>
              </div>
            </div>
            <p className="text-brand-300 text-sm leading-relaxed mb-5">
              Asiantunteva LVI-yritys Satakunnassa vuodesta {company.founded}. Lämpöpumput, putkiremontit ja LVI-urakointi ammattitaidolla.
            </p>
            <div className="flex gap-3">
              {company.social.facebook && (
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent-400 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              {company.social.instagram && (
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent-400 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Palvelut */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-300 mb-5">
              Palvelut
            </h3>
            <ul className="space-y-2">
              {footerLinks.palvelut.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    <ChevronRight size={13} className="text-accent-400 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yritys */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-300 mb-5">
              Yritys
            </h3>
            <ul className="space-y-2">
              {footerLinks.yritys.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    <ChevronRight size={13} className="text-accent-400 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-300 mb-5">
              Yhteystiedot
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={company.phoneHref} className="text-sm text-white hover:text-accent-400 transition-colors font-semibold block">
                    {company.phone}
                  </a>
                  <span className="text-xs text-brand-300">Päivystys 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-sm text-white/70 hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  <div>{company.hours.weekdays}</div>
                  <div className="text-accent-400 font-medium">{company.hours.emergency}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-400">
            © {new Date().getFullYear()} {company.name}. Kaikki oikeudet pidätetään. Y-tunnus: {company.businessId}
          </p>
          <p className="text-xs text-brand-400">
            Toteutettu ammattitaidolla Satakunnassa
          </p>
        </div>
      </div>
    </footer>
  )
}
