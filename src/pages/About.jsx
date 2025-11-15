import React from 'react'
import { Link } from 'react-router-dom'
import AboutHero from '../components/sections/AboutHero'
import Footer from '../components/sections/Footer'
import AboutTeam from '../components/sections/AboutTeam'

const About = ({handleImageLoad}) => {
  return (
    <div>
        <AboutHero handleImageLoad={handleImageLoad}/>
        <AboutTeam/>
        import '../../styles/global.css'
import '../../styles/components.css'
    </div>
  )
}

export default About