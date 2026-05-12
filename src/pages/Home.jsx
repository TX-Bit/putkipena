import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import WhyUs from '../sections/WhyUs'
import ReferencesSection from '../sections/ReferencesSection'
import QuoteForm from '../sections/QuoteForm'
import ContactInfo from '../sections/ContactInfo'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <ReferencesSection />
      <QuoteForm />
      <ContactInfo />
    </main>
  )
}
