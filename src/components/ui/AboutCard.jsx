import React from 'react'
import Showcase from '../../assets/img/showcase-1.jpg'
import '../../styles/global.css'
import '../../styles/components.css'

const AboutCard = () => {
  return (
    <div className='flex flex-col gap-5'>
        <img src={Showcase} alt="" className='w-100 h-150 object-cover'/>
        <div>

         <h1 className='tertiary-text text-primary text-xl md:text-3xl tracking-wider'>Dipshan Sharma</h1>
            <p className='tertiary-text text-text text-lg md:text-2xl tracking-wider'>Owner / Trainer</p>
        </div>
    </div>
  )
}

export default AboutCard