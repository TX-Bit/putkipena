import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ChatBox from './components/common/ChatBox'
import OfferPopup from './components/common/OfferPopup'
import StickyOfferButton from './components/common/StickyOfferButton'

import Home from './pages/Home'
import ServicesOverview from './pages/ServicesOverview'
import ServicePage from './pages/ServicePage'
import Pricing from './pages/Pricing'
import Emergency from './pages/Emergency'
import References from './pages/References'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/palvelut" element={<PageTransition><ServicesOverview /></PageTransition>} />
          <Route path="/palvelut/:slug" element={<PageTransition><ServicePage /></PageTransition>} />
          <Route path="/hinnasto" element={<PageTransition><Pricing /></PageTransition>} />
          <Route path="/paivystys" element={<PageTransition><Emergency /></PageTransition>} />
          <Route path="/referenssit" element={<PageTransition><References /></PageTransition>} />
          <Route path="/yhteystiedot" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/tarjouspyynto" element={<PageTransition><Quote /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ChatBox />
      <OfferPopup />
      <StickyOfferButton />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/putkipena">
      <AppRoutes />
    </BrowserRouter>
  )
}
