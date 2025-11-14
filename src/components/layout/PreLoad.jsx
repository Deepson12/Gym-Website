import React, { useEffect } from 'react'
import '../../styles/global.css'
import '../../styles/components.css'

import gsap from 'gsap'


const PreLoad = ({onComplete, imagesLoaded}) => {

  


  useEffect(()=>{
    if(!imagesLoaded) return ;
    
    const ctx = gsap.context(()=>{
      let tl = gsap.timeline({
        onComplete: onComplete
      });
      tl.to('.loader-title',{
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      tl.to(".grid-inside",{
        height: '0px',
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.inOut'
      }, '+=1')

      tl.to(".grid-col",{
        height: '0px',
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.inOut'
      } , '-=0.5')

    })

    return ()=> ctx.revert()
  },[onComplete, imagesLoaded])


  return (
    
    <div className='w-screen  grid grid-cols-5 fixed z-30'>
      <div className='grid-col h-screen bg-secondary'>
        <div className='w-full h-full bg-primary grid-inside'></div>
      </div>
      <div className='grid-col h-screen bg-secondary'>
        <div className='w-full h-full bg-primary grid-inside'></div>
      </div>
      <div className='grid-col h-screen bg-secondary'>
        <div className='w-full h-full bg-primary grid-inside'></div>
      </div>
      <div className='grid-col h-screen bg-secondary'>
        <div className='w-full h-full bg-primary grid-inside'></div>
      </div>
      <div className='grid-col h-screen bg-secondary'>
        <div className='w-full h-full bg-primary grid-inside'></div>
      </div>
      
      <div className='loader-title title-text absolute-center'>
        <h1 className='text-4xl md:text-9xl'>FITNESS CORNER</h1>
      </div>
      
    </div>   
  )
}

export default PreLoad