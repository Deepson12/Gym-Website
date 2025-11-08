import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import { HeroServices } from '../components/sections/HeroServices'
import Navbar from '../components/layout/Navbar'
import PreLoad from '../components/layout/PreLoad'
import Showcase from '../components/sections/Showcase'
import CustomMarquee from '../components/ui/CustomMarquee'
import Testimonial from '../components/sections/Testimonial'
import ShortContact from '../components/sections/ShortContact'
import Footer from '../components/sections/Footer'

const Landing = ({handleImageLoad}) => {
  

  return (
    <div>
      
      
        <HeroSection handleImageLoad={handleImageLoad}/>
        <HeroServices handleImageLoad={handleImageLoad}/>
        <Showcase handleImageLoad={handleImageLoad}/>
        <CustomMarquee/>
        <Testimonial/>
        <ShortContact/>
        <Footer/>
    </div>
  )
}

export default Landing