import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, ChevronDown } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'

const inputCls = `
  w-full bg-white border border-slate-200
  focus:border-brand-500 focus:outline-none
  rounded-xl px-4 py-3.5 text-slate-800 text-base
  placeholder:text-slate-400
  transition-colors duration-200
`

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <SectionWrapper id="tarjouspyynto" bg="light">
        <div className="max-w-md mx-auto text-center py-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <CheckCircle size={64} className="text-green-500 mx-auto mb-5" />
          </motion.div>
          <h2 className="text-2xl font-bold text-brand-900 mb-3">Kiitos yhteydenotosta</h2>
          <p className="text-slate-500">
            Olemme vastaanottaneet tarjouspyyntösi ja otamme yhteyttä pian.
          </p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="tarjouspyynto" bg="light">
      <SectionHeading
        eyebrow="Pyydä tarjous"
        title="Ota yhteyttä"
        subtitle="Täytä lomake ja palaamme asiaan seuraavan arkipäivän aikana. Tarjous on maksuton."
        center
      />

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-card space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">Nimi *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Matti Meikäläinen"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">Puhelin *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="040 123 4567"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-900 mb-1.5">Sähköposti</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="matti@esimerkki.fi"
            className={inputCls}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-900 mb-1.5">Palvelu *</label>
          <div className="relative">
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={`${inputCls} appearance-none pr-10`}
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
          <label className="block text-sm font-semibold text-brand-900 mb-1.5">Viesti</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Kerro lyhyesti tilanteestasi — esim. kiinteistön koko, nykyinen lämmitysmuoto tai muu lisätieto."
            className={`${inputCls} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2.5 bg-accent-400 hover:bg-accent-500 disabled:bg-accent-300 text-white font-bold text-base py-4 rounded-xl shadow-cta hover:shadow-xl transition-all duration-200"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Lähetetään...
            </>
          ) : (
            <>
              <Send size={17} />
              Lähetä tarjouspyyntö
            </>
          )}
        </button>

        <p className="text-xs text-center text-slate-400">
          Maksuton ja sitomaton.
        </p>
      </form>
    </SectionWrapper>
  )
}
