import React from 'react'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import Priorities from '../components/sections/Feature'
import Testimonials from '../components/sections/Testimonials'
import Footer from '../components/sections/Footer'
import FAQ from '@/components/sections/FAQ'
import LoginPage from '@/components/sections/Login'
import WaitlistSection from '@/components/sections/WaitList'

const Page = () => {
  return (
    <main>
      <Hero />
      <Priorities />
      <Testimonials />
      <FAQ/>
      <WaitlistSection/>
      {/* <LoginPage/> */}
      {/* <Footer /> */}
    </main>
  )
}

export default Page