import React from 'react'
import showcase1 from "../../assets/img/showcase-1.jpg"

const AboutHero = ({handleImageLoad}) => {
  return (
    <div className='min-h-screen bg-primary'>
      <img src={showcase1} alt="" onLoad={handleImageLoad}/>
    </div>
  )
}

export default AboutHero