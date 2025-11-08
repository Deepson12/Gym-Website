import React, { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import '../../styles/global.css'
import '../../styles/components.css'
import heroServicesImg from '../../assets/img/hero-services.jpg'
import Button from '../common/Button'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HeroServices = ({handleImageLoad}) => {

  const boxRef = useRef(null);
  const imgBoxRef = useRef(null);
  const imgRef = useRef(null)


useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(imgRef.current, { y: -75 })
      .to(imgBoxRef.current, { y: 75 }, '<')
  });

  return () => ctx.revert();
}, []);

  return (
    <div ref={boxRef} className=' bg-primary py-20 md:pt-40'>
      <div className='px-5 md:px-20'>

       <div className='flex flex-col w-full items-center gap-2 md:gap-4'>
        <div className='flex  gap-2 md:gap-4 items-baseline'>
          <span className='tertiary-text text-base md:text-2xl text-surface'>Agency</span>
          <h1 className='tertiary-text text-3xl md:text-6xl text-white'>Gym & Training</h1>
        </div>
        <div className='flex flex-col gap-2 md:gap-4 items-center'>
          <div className='flex gap-2 md:gap-4 items-baseline flex-wrap justify-center'>

          <span className='tertiary-text text-base md:text-2xl text-surface'>Services</span>
          <h1 className='tertiary-text text-3xl md:text-6xl  text-text'>Nutrition</h1>
          <h1 className='tertiary-text text-3xl md:text-6xl text-text'>Cardio</h1>
          <h1 className='tertiary-text text-3xl md:text-6xl text-text'>Recovery</h1>
          {/* <h1 className='tertiary-text text-3xl md:text-6xl text-white'>Endurance</h1> */}
          </div>
          <div className='flex gap-2 md:gap-4 items-baseline flex-wrap justify-center'>
            
          <h1 className='tertiary-text text-3xl md:text-6xl text-text'>Strength Training</h1>
          <span className='tertiary-text text-base md:text-2xl text-surface'>Location</span>
           <h1 className='tertiary-text text-3xl md:text-6xl text-text'>Banasthali,</h1>
           <h1 className='tertiary-text text-3xl md:text-6xl text-text'>Kathmandu</h1>
          </div>
        </div>
       </div>


        <div className='flex flex-col lg:flex-row gap-30 lg:gap-40 justify-center items-center mt-15'>
          <div ref={imgBoxRef} className=' w-80 h-120 overflow-hidden'>

          <img ref={imgRef} src={heroServicesImg} alt="" className='w-full h-full object-cover scale-130' onLoad={handleImageLoad}/>
          </div>
           <div className='flex flex-col justify-center lg:w-80 lg:h-120 gap-5'>

          <p className='text-text font-montserrat font-medium text-center lg:text-left'>Our talented team is capable of tackling challenges of all kinds</p>
          <Button className={'mx-auto'}>Our Services</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
