import React, { useState, useRef } from 'react'
import asterisk from '../../assets/img/asterisk.svg'
import circle from '../../assets/img/circle.svg'
import square from '../../assets/img/square.svg'
import dumbell from '../../assets/img/dumbbell.svg'

import gsap from 'gsap'


const imgSrc = [
    asterisk, circle, square, dumbell
]

const Button = ({children, className, type="black"}) => {
    const [index, setIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const textRef = useRef(null)
      const firstText = useRef(null)


    const startLoop = ()=>{
        
        gsap.to(textRef.current, {
            y:'-50%',
            duration: 0.3,
            ease: 'power3.out'
        })
        
        gsap.to(firstText.current,{
            rotate: -10,
            duration: 0.3,
            ease: 'power3.out'
        }, '<')


        if(intervalId) return;

        const id = setInterval(()=>{
            setIndex((prev)=> (prev+1) % imgSrc.length )
        }, 100)
        setIntervalId(id);

    }

    const endLoop = ()=>{
        
        
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


        clearInterval(intervalId);
        setIndex(0)
        setIntervalId(null)
    }



  return (
    <button className={`border ${type === "black"? 'border-white': 'border-black'} w-fit h-fit ${className}  bg-primary lg:mx-0  flex items-center`} onMouseEnter={startLoop} onMouseLeave={endLoop}>
        <div className=' px-3 bg-primary'>
            <img src={imgSrc[index]} alt="" className='w-6 h-6 object-contain'/>
        </div>
        <div className={`bg-white pt-3 px-3`}>

        <div className={`inline-block overflow-hidden h-8 cursor-pointer`}>
        <div className='inline-flex flex-col' ref={textRef}>
            <span className='tertiary-text leading-8 text-2xl text-primary' ref={firstText}>{children}</span>
            <span className='tertiary-text leading-8 text-2xl text-primary' >{children}</span>
        </div>
    </div>
        </div>
    </button>
  )
}

export default Button