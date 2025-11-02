import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import { HeroServices } from '../components/sections/HeroServices'
import Navbar from '../components/layout/Navbar'
import PreLoad from '../components/layout/PreLoad'

const Landing = ({handleImageLoad}) => {
  

  return (
    <div>
      
      
        <HeroSection handleImageLoad={handleImageLoad}/>
        <HeroServices/>
    </div>
  )
}

export default Landing