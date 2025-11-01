import React, { useRef } from 'react'
import '../../styles/global.css'
import '../../styles/components.css'

import gsap from 'gsap'

const AnimatedText = ({content}) => {
  const textRef = useRef(null)
  const firstText = useRef(null)

  const handleHoverEnter = ()=>{
    gsap.to(textRef.current, {
      y:'-50%',
      duration: 0.5,
      ease: 'power3.out'
    })

    gsap.to(firstText.current,{
      rotate: -10,
      duration: 0.5,
      ease: 'power3.out'
    }, '<')



    
  }

  const handleMouseLeave = ()=>{
    gsap.to(textRef.current,{
      y:0,
      duration: 0.5,
      ease: 'power3.inOut'
    })

    gsap.to(firstText.current,{
      rotate: 0,
      duration: 0.5,
      ease: 'power3.inOut'
    }, '<')


  }

  return (
    <div className='inline-block overflow-hidden h-8 cursor-pointer' onMouseEnter={handleHoverEnter} onMouseLeave={handleMouseLeave}>
        <div className='inline-flex flex-col' ref={textRef}>
            <span className='animated-text' ref={firstText}>{content}</span>
            <span className='animated-text' >{content}</span>
        </div>
    </div>
  )
}

export default AnimatedText