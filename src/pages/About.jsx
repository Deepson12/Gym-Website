import React from 'react'
import { Link } from 'react-router-dom'
import AboutHero from '../components/sections/AboutHero'
import Footer from '../components/sections/Footer'

const About = ({handleImageLoad}) => {
  return (
    <div>
        <AboutHero handleImageLoad={handleImageLoad}/>
        
    </div>
  )
}

export default About