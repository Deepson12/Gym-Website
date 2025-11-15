import React from 'react'
import '../../styles/global.css'
import '../../styles/components.css'
import Showcase from '../../assets/img/showcase-1.jpg'
import CustomMarquee from '../ui/CustomMarquee'

const AboutHero = ({handleImageLoad}) => {
  return (
    <div className='min-h-screen bg-primary'>
      <div className='pt-70 grid gap-50 justify-center md:px-30'>
        <div className='relative'>
          

        <img src={Showcase} alt="" onLoad={handleImageLoad} className='w-40 h-60 object-cover absolute -top-40 left-1/3'/>
        <h1 className='title-text text-center'>Being competitive <br /> while having fun</h1>
        </div>
        <div className='grid grid-cols-3 items-center'>
          <div>

          <img src={Showcase} alt="" onLoad={handleImageLoad} className='w-60 h-80 object-cover'/>
          </div>
          <p className='text-text font-montserrat text-sm md:text-base text-center'>
            TWICE was founded in Madrid in 2022 by Alberto Benito and Joaco Gasset. Two guys whose extensive professional experience and entrepreneurial spirit united them in a common goal: to be competitive while having fun.
            <br />
            <br />
             <br />

The three main foundations of TWICE's identity are commitment, creativity, and care.
<br />
<br />
 <br />

Through our philosophy, we commit ourselves to our goals by working with professionalism and teamwork.
          </p>
          <div className='relative flex justify-end'>
          <img src={Showcase} alt="" onLoad={handleImageLoad} className='w-80 h-100 object-cover'/>

          </div>
        </div>
        <div className='grid justify-end'>
        <div className='flex flex-col w-70'>
          <h1 className='tertiary-text text-3xl md:text-7xl text-white'>Our Vision</h1>
          <p className='text-text font-montserrat text-sm md:text-base'>The purpose is to create stories that inspire by putting creativity at the service of emotion, using the best technical and digital media.</p>
        </div>
      </div>
      </div>
      <CustomMarquee/>
    </div>
  )
}

export default AboutHero