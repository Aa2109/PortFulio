import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import PriceCard from '../components/PriceCard'
import Work from '../components/Work'
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading = "PROJECTS." text = "Some of my most recent work."/> 
      <Work />
      <PriceCard/>
      <Footer />
    </div>
  )
}

export default Project