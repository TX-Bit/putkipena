import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Phone, Mail, User, MessageSquare, ChevronDown } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'
import { company } from '../data/company'

const inputBase = `
  w-full bg-white border-2 border-slate-200
  focus:border-brand-500 focus:outline-none
  rounded-xl px-4 py-3.5 text-slate-800 text-base
  placeholder:text-slate-400
  transition-colors duration-200
`

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send — replace with real API call
    await new Promise((r) => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <SectionWrapper id="tarjouspyynto" bg="light">
        <div className="max-w-xl mx-auto text-center py-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="heading-lg text-brand-900 mb-3">Kiitos yhteydenotosta!</h2>
          <p className="text-slate-500 text-lg">
            Olemme vastaanottaneet tarjouspyyntösi ja otamme yhteyttä mahdollisimman pian.
            Yleensä vastaamme saman päivän aikana.
          </p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="tarjouspyynto" bg="light">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Left info */}
        {!compact && (
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Pyydä tarjous"
              title="Saat tarjouksen nopeasti"
              subtitle="Täytä lomake ja me otamme yhteyttä seuraavan arkipäivän aikana. Tarjous on maksuton ja sitomaton."
            />

            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  title: 'Soita suoraan',
                  value: company.phone,
                  href: company.phoneHref,
                  sub: 'Ma–Pe 7–17, päivystys 24/7',
                },
                {
                  icon: Mail,
                  title: 'Lähetä sähköpostia',
                  value: company.email,
                  href: `mailto:${company.email}`,
                  sub: 'Vastaamme saman päivän aikana',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors flex-shrink-0">
                      <Icon size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{item.title}</div>
                      <div className="font-bold text-brand-900">{item.value}</div>
                      <div className="text-xs text-slate-500">{item.sub}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* Form */}
        <div className={compact ? 'col-span-full' : 'lg:col-span-3'}>
          {compact && (
            <SectionHeading
              eyebrow="Pyydä tarjous"
              title="Täytä tarjouspyyntö"
              center
            />
          )}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-100 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-brand-900 mb-1.5">
                  Nimi *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Matti Meikäläinen"
                    className={`${inputBase} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-900 mb-1.5">
                  Puhelinnumero *
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="040 123 4567"
                    className={`${inputBase} pl-10`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-900 mb-1.5">
                Sähköposti
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="matti@esimerkki.fi"
                  className={`${inputBase} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-900 mb-1.5">
                Palvelu *
              </label>
              <div className="relative">
                <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputBase} appearance-none pr-10`}
                >
                  <option value="">Valitse palvelu...</option>
                  <option value="ilmalampopumppu">Ilmalämpöpumppu</option>
                  <option value="vesi-ilmalampopumppu">Vesi-ilmalämpöpumppu</option>
                  <option value="maalampopumppu">Maalämpöpumppu</option>
                  <option value="lvi-huolto">LVI-huolto</option>
                  <option value="muu">Muu työ</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-900 mb-1.5">
                Lisätiedot
              </label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Kerro lisätietoja projektistasi... (sijainti, talon koko, nykyinen lämmitysmuoto jne.)"
                  className={`${inputBase} pl-10 resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 bg-accent-400 hover:bg-accent-500 disabled:bg-accent-300 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-cta hover:shadow-xl transition-all duration-200"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Lähetetään...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Lähetä tarjouspyyntö
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-400">
              Tarjous on maksuton ja sitomaton. Vastaamme seuraavan arkipäivän aikana.
            </p>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
