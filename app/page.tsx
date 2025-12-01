import React from 'react'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import Priorities from '../components/sections/Feature'
import Testimonials from '../components/sections/Testimonials'
import Footer from '../components/sections/Footer'
import FAQ from '@/components/sections/FAQ'

const Page = () => {
  return (
    <main>
      <Hero />
      <Priorities />
      <Testimonials />
      <FAQ/>
      {/* <Footer /> */}
    </main>
  )
}

export default Page