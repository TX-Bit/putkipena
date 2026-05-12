import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Award, ThumbsUp, Zap, HeadphonesIcon } from 'lucide-react'
import SectionWrapper, { SectionHeading } from '../components/ui/SectionWrapper'

const reasons = [
  {
    icon: Award,
    title: 'Yli 15 vuoden kokemus',
    desc: 'Olemme asentaneet satoja lämpöpumppuja ja tehneet tuhansia LVI-töitä Satakunnassa. Kokemus näkyy laadussa.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Shield,
    title: 'Kirjallinen takuu',
    desc: 'Kaikki työmme tulevat kirjallisella takuulla. Asennukset on suoritettu valmistajan ohjeiden mukaan.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Nopea toimitusaika',
    desc: 'Tarjouksesta asennukseen nopeasti. Emme pidä asiakkaitamme odottamassa viikkoja.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: HeadphonesIcon,
    title: 'Päivystys 24/7',
    desc: 'LVI-hätätapaukset eivät katso kelloa. Päivystyksemme toimii ympäri vuorokauden, myös jouluna.',
    color: 'text-accent-500',
    bg: 'bg-accent-50',
  },
  {
    icon: Zap,
    title: 'Pätevät asentajat',
    desc: 'Asentajillamme on kaikki tarvittavat pätevyydet ja sertifioinnit. Työ tehdään kerralla oikein.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: ThumbsUp,
    title: 'Läpinäkyvä hinnoittelu',
    desc: 'Ei piilomaksuja. Saat selkeän tarjouksen ennen työn aloittamista. Hinta pysyy siinä mitä sovitaan.',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  return (
    <SectionWrapper id="miksi-me" bg="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: image + badges */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80"
              alt="LVI-asentaja työssä"
              loading="lazy"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
          {/* Floating badge 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100"
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <Shield size={18} className="text-green-600" />
            </div>
            <div>
              <div className="font-bold text-brand-900 text-sm">Tyytyväisyystakuu</div>
              <div className="text-xs text-slate-500">100% asiakastyytyväisyys</div>
            </div>
          </motion.div>
          {/* Floating badge 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -top-4 -left-4 bg-brand-900 rounded-2xl shadow-xl p-4 text-white"
          >
            <div className="text-2xl font-extrabold text-accent-400">15+</div>
            <div className="text-xs text-white/70">vuotta alalla</div>
          </motion.div>
        </div>

        {/* Right: content */}
        <div>
          <SectionHeading
            eyebrow="Miksi Putkipena?"
            title="Laatu ja luotettavuus — ei kompromisseja"
            subtitle="Olemme paikallinen yritys joka tekee töitä omalla nimellään. Meille jokainen projekti on tärkeä."
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <motion.div key={reason.title} variants={item} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${reason.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon size={18} className={reason.color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-900 text-sm mb-1">{reason.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
