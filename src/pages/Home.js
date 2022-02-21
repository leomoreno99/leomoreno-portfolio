import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import HeroSection from '../components/HeroSection'

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
