import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import { company } from '../data/company'

const contactItems = [
  {
    icon: Phone,
    title: 'Puhelin',
    lines: [company.phone],
    href: company.phoneHref,
    sub: 'Arkisin 7–17, päivystys 24/7',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Mail,
    title: 'Sähköposti',
    lines: [company.email],
    href: `mailto:${company.email}`,
    sub: 'Vastaamme saman päivän aikana',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: MapPin,
    title: 'Osoite',
    lines: [company.address],
    sub: 'Toimialue: koko Pohjois-Savo',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Aukioloajat',
    lines: [company.hours.weekdays, company.hours.emergency],
    color: 'text-accent-500',
    bg: 'bg-accent-50',
  },
]

export default function Contact() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="gradient-brand py-16 md:py-24">
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="heading-xl text-white mb-4">Yhteystiedot</h1>
            <p className="text-brand-200 text-lg max-w-lg mx-auto">
              Olemme täällä auttamassa. Soita, sähköpostita tai täytä tarjouspyyntölomake.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, i) => {
            const Icon = item.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={20} className={item.color} />
                </div>
                <h3 className="font-bold text-brand-900 mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <div key={j} className={`font-semibold ${j === 1 ? 'text-accent-500' : 'text-slate-700'}`}>{line}</div>
                ))}
                {item.sub && <div className="text-xs text-slate-400 mt-1">{item.sub}</div>}
              </motion.div>
            )

            return item.href ? (
              <a key={i} href={item.href} className="block">{content}</a>
            ) : (
              <div key={i}>{content}</div>
            )
          })}
        </div>

        {/* Map placeholder + social */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d27.3050!3d63.1700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4686c5e8b7b0e00f%3A0x9c8f5e6a4b2c1d3e!2sMaaninka!5e0!3m2!1sfi!2sfi!4v1700000000000!5m2!1sfi!2sfi"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sijainti kartalla"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
              <h3 className="font-bold text-brand-900 mb-4">Löydät meidät myös</h3>
              <div className="space-y-3">
                {company.social.facebook && (
                  <a href={company.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-brand-700 transition-colors">
                    <Facebook size={18} />
                    <span className="font-medium">Facebook</span>
                  </a>
                )}
                {company.social.instagram && (
                  <a href={company.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-brand-700 transition-colors">
                    <Instagram size={18} />
                    <span className="font-medium">Instagram</span>
                  </a>
                )}
              </div>
            </div>
            <div className="bg-brand-900 rounded-2xl p-6 text-white">
              <p className="text-brand-200 text-sm mb-3">Y-tunnus</p>
              <p className="font-bold">{company.businessId}</p>
              <p className="text-brand-200 text-sm mt-3 mb-1">Toimialue</p>
              <p className="font-bold">Koko Pohjois-Savo</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
