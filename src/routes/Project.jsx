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
      <div>
      <HeroImg2  heading = "PROJECTS." text = "Explore my recent projects including a technical blog platform, a full-stack online food ordering system, and my personal portfolio website. These works reflect my journey of learning, hands-on development, and applying real-world problem-solving using modern web technologies."/> 
      </div>
      <Work />
      <PriceCard/>
      <Footer />
    </div>
  )
}

export default Project