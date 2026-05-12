import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import { company } from '../../data/company'

const BOT_RESPONSES = {
  default: 'Moi! Olen Putkipenan chattiassistentti. Voin auttaa sinua yleisillä kysymyksillä tai ohjata sinut oikeaan palveluun. Mihin voisin auttaa?',
  hinta: 'Hinnat vaihtelevat projektin mukaan. Lämpöpumput alkavat noin 1 200 € (ilmalämpö) ja vesi-ilmalämpö noin 5 900 €. Pyydä tarkka tarjous lomakkeella!',
  lampopumppu: 'Asennettaessa vesi-ilmalämpöpumppu voi säästää lämmityskuluissa 40–60%. Teemme ilmaisen kartoituksen ennen tarjousta.',
  huolto: 'LVI-huoltopalvelumme kattaa kaikki lämpöpumput ja LVI-laitteet. Tuntiveloitus on 89 €/h. Päivystyshinta 140 €/h.',
  paivystys: `Päivystysnumeromme on ${company.phone}. Palvelemme 24/7 hätätapauksissa!`,
  aika: 'Normaalisti pystymme sopimaan asennusajan 1–2 viikon sisällä yhteydenotosta. Hätätapauksissa nopeammin.',
}

function getResponse(input) {
  const lower = input.toLowerCase()
  if (lower.match(/hinta|paljonko|maksaa|kustannus|euro/)) return BOT_RESPONSES.hinta
  if (lower.match(/lämpöpumppu|lämpö|pumppu|ilmalämpö|maalämpö/)) return BOT_RESPONSES.lampopumppu
  if (lower.match(/huolto|korjaus|vikaantui|rikki/)) return BOT_RESPONSES.huolto
  if (lower.match(/päivystys|hätä|kiireellinen|apua/)) return BOT_RESPONSES.paivystys
  if (lower.match(/aika|milloin|kauan|nopeasti|aikataulu/)) return BOT_RESPONSES.aika
  return 'Hyvä kysymys! Paras tapa saada tarkka vastaus on soittaa meille tai jättää tarjouspyyntö. Olemme apuna ma–pe klo 7–17. Puhelimitse myös päivystys 24/7.'
}

function Message({ msg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          msg.from === 'user'
            ? 'bg-brand-700 text-white rounded-br-sm'
            : 'bg-slate-100 text-slate-800 rounded-bl-sm'
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  )
}

export default function ChatBox() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 0, from: 'bot', text: BOT_RESPONSES.default },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(1)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) {
      setUnread(0)
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [open, messages])

  const send = () => {
    if (!input.trim()) return
    const userMsg = { id: Date.now(), from: 'user', text: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, from: 'bot', text: getResponse(userMsg.text) }
      setMessages((m) => [...m, botMsg])
      setTyping(false)
      if (!open) setUnread((u) => u + 1)
    }, 900 + Math.random() * 600)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            style={{ height: 420 }}
          >
            {/* Header */}
            <div className="gradient-brand px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                P
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">Putkipena Asiakaspalvelu</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/70 text-xs">Online</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((m) => <Message key={m.id} msg={m} />)}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-3"
                >
                  <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay }}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
              {['Hinnasto', 'Päivystys', 'Lämpöpumput'].map((q) => (
                <button
                  key={q}
                  onClick={() => { setInput(q); }}
                  className="flex-shrink-0 text-xs bg-brand-50 text-brand-700 hover:bg-brand-100 px-3 py-1.5 rounded-full transition-colors border border-brand-100"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 pt-2 border-t border-slate-100 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Kirjoita viesti..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-400 transition-colors"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-brand-700 hover:bg-brand-800 disabled:bg-slate-200 flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Phone shortcut */}
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 bg-accent-50 hover:bg-accent-100 text-accent-600 text-xs font-semibold py-2.5 transition-colors border-t border-accent-100"
            >
              <Phone size={13} />
              Soita suoraan: {company.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-brand-700 hover:bg-brand-800 shadow-xl flex items-center justify-center text-white transition-colors relative"
        aria-label="Avaa chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {!open && unread > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-400 text-white text-xs font-bold flex items-center justify-center"
          >
            {unread}
          </motion.div>
        )}
      </motion.button>
    </div>
  )
}
