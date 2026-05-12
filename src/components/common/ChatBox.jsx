import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data/company'

const INITIAL_MSG = 'Hei! Tarvitsetko tarjouksen lämpöpumpusta tai LVI-työstä?'

function getAutoReply(input) {
  const t = input.toLowerCase()
  if (t.match(/hinta|paljonko|maksaa|euro/))
    return 'Hinnat vaihtelevat projektin mukaan. Pyydä tarjous niin tehdään sinulle sopiva laskelma.'
  if (t.match(/lämpöpumppu|ilmalämpö|maalämpö|vesi-ilma/))
    return 'Asennettavat lämpöpumput: ilmalämpö (alk. 1 200 €), vesi-ilmalämpö (alk. 5 900 €) ja maalämpö (alk. 10 900 €). Pyydä tarkka tarjous!'
  if (t.match(/huolto|korjaus|vikaantui|rikki/))
    return 'Hoidamme LVI-huollot nopeasti. Tuntiveloitus 89 €/h. Kiireellisissä soita suoraan!'
  if (t.match(/aika|milloin|nopeasti/))
    return 'Yleensä pystymme sopimaan asennusajan 1–2 viikon sisällä. Kiireellisissä töissä nopeamminkin.'
  return 'Paras tapa saada vastaus on jättää tarjouspyyntö tai soittaa meille suoraan. Olemme tavoitettavissa ma–pe 7–17.'
}

export default function ChatBox() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 0, from: 'bot', text: INITIAL_MSG },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [open, messages])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg) return
    setMessages((m) => [...m, { id: Date.now(), from: 'user', text: msg }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: 'bot', text: getAutoReply(msg) }])
      setTyping(false)
    }, 800 + Math.random() * 400)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.18 }}
            className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            style={{ height: 380 }}
          >
            {/* Header */}
            <div className="gradient-brand px-4 py-3.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                P
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm">{company.name}</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/60 text-xs">Vastaamme nopeasti</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <X size={13} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-brand-700 text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 0.2, 0.4].map((d, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: d }}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick actions */}
            <div className="px-4 pb-2 flex gap-2">
              <Link
                to="/tarjouspyynto"
                onClick={() => setOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs bg-accent-400 hover:bg-accent-500 text-white font-semibold py-2.5 rounded-xl transition-colors"
              >
                <ArrowRight size={13} />
                Pyydä tarjous
              </Link>
              <a
                href={company.phoneHref}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold py-2.5 rounded-xl transition-colors border border-brand-100"
              >
                <Phone size={13} />
                Soita
              </a>
            </div>

            {/* Input */}
            <div className="p-4 pt-2 border-t border-slate-100 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Kirjoita kysymys..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-400 transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-brand-700 hover:bg-brand-800 disabled:bg-slate-200 flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle — hillitty */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.93 }}
        className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-brand-700 hover:bg-brand-800 shadow-lg flex items-center justify-center text-white transition-colors"
        aria-label="Chat"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.div>
            : <motion.div key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle size={20} /></motion.div>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
