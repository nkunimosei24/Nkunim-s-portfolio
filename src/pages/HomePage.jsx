import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage