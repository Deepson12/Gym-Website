import React from 'react'


import logo1 from '../../assets/img/logo-1.svg'
import logo2 from '../../assets/img/logo-2.svg'
import logo3 from '../../assets/img/logo-3.svg'
import logo4 from '../../assets/img/logo-4.svg'

import logo6 from '../../assets/img/logo-6.svg'


import Marquee from "react-fast-marquee";


const imgSrc=[
  logo1, logo2, logo3, logo4, logo6,logo1, logo2, logo3, logo4, logo6,
]

const CustomMarquee = () => {

  


  return (
    <section className='bg-primary py-20 md:py-40'>
        <div className=''>
          <div className='flex '>
          <Marquee direction={'right'} speed={50}>

            <div className='flex gap-10'>
               {
                 imgSrc.map((value, index)=>(
                   <img key={index} src={value} alt="" className='w-40 h-30 md:h-40 md:w-56 pr-20'/>
                  ))
                }
            </div>
                </Marquee>
          </div>
        </div>
    </section>
  )
}

export default CustomMarquee