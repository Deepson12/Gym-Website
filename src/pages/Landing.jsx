import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import { HeroServices } from '../components/sections/HeroServices'
import Navbar from '../components/layout/Navbar'
import PreLoad from '../components/layout/PreLoad'
import Showcase from '../components/sections/Showcase'

const Landing = ({handleImageLoad}) => {
  

  return (
    <div>
      
      
        <HeroSection handleImageLoad={handleImageLoad}/>
        <HeroServices handleImageLoad={handleImageLoad}/>
        <Showcase/>
    </div>
  )
}

export default Landing