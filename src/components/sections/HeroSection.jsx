import React, { useEffect, useRef } from 'react'
import bgImg from '../../assets/img/bg-main.jpg'
import AnimatedText from '../common/AnimatedText'

import '../../styles/global.css'
import '../../styles/components.css'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const HeroSection = () => {
  const titleRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.to(titleRef.current, {
        y:-80,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1
        }
      })
    })


    return ()=> ctx.revert();
  },[])

  return (
    <div ref={boxRef} className='relative font-formula h-screen overflow-hidden'>
       <img src={bgImg} alt="" className='absolute w-full h-full object-cover'/>
       <div className='h-full horizontal-center grid py-20 items-end w-9/10 '>
        <div>
        <h1 ref={titleRef} className='title-text text-center h-fit w-fit mx-auto'>
          The best stories <br /> deserve to be told
          </h1>
        <div className='mt-10 flex justify-between secondary-text'>
          <div className='flex flex-col'>
            <h1 className='text-text text-2xl'>Fitness Corner©</h1>
            <p className='text-white text-3xl'>Chasing the elements</p>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-text text-2xl'>Since 2022</h1>
            <p className='text-white text-3xl'>Working locally</p>
          </div>
        </div>
        </div>
        
       </div>
    </div>
  )
}

export default HeroSection