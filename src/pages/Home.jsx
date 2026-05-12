import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import WhyUs from '../sections/WhyUs'
import ReferencesSection from '../sections/ReferencesSection'
import EmergencyBanner from '../sections/EmergencyBanner'
import Testimonials from '../sections/Testimonials'
import QuoteForm from '../sections/QuoteForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <EmergencyBanner />
      <ReferencesSection />
      <Testimonials />
      <QuoteForm />
    </main>
  )
}
