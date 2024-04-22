import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import AboutContact from '../components/AboutContact'

const About = () => {
  return (
    <div>
       <Navbar />
       <HeroImg2 heading = "ABOUT." text = "I am a full stack Web Developer."/>
       <AboutContact />
      <Footer />
    </div>
  )
}

export default About