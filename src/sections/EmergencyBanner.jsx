import React from 'react'
import { motion } from 'framer-motion'
import { Phone, AlertTriangle, Clock } from 'lucide-react'
import { company } from '../data/company'

export default function EmergencyBanner() {
  return (
    <section className="gradient-accent py-10 md:py-14 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white" />
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white" />
      </div>

      <div className="container-site relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-start md:items-center gap-5 text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={26} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">LVI-hätätilanne?</h2>
              <p className="text-white/85 text-base md:text-lg">
                Päivystyksemme palvelee <strong className="text-white">24 tuntia vuorokaudessa</strong>, myös viikonloppuisin ja pyhäpäivinä.
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2 text-white/80">
              <Clock size={16} />
              <span className="text-sm font-medium">Vastaamme nopeasti</span>
            </div>
            <motion.a
              href={company.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-white text-accent-600 font-extrabold text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone size={22} />
              {company.phone}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
