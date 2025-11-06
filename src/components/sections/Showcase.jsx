import React, { useEffect, useRef } from 'react'
import '../../styles/global.css'
import '../../styles/components.css'
import Showcase1 from '../../assets/img/showcase-1.jpg'
import Showcase2 from '../../assets/img/showcase-2.jpg'
import Showcase3 from '../../assets/img/showcase-3.jpg'

import Button from '../common/Button'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imgArr = [Showcase1, Showcase2, Showcase3]
const textArr = ['Hell', 'Hello', 'hellau']

const Showcase = ({handleImageLoad}) => {
  const sectionRef = useRef(null)
  const imgRef = useRef([])
  const textRef = useRef([]);
  const textContainerRef = useRef(null)
  

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1, 
          pin: true,
        }
      })

      
      gsap.set(imgRef.current[0], {yPercent:0})
      gsap.set(imgRef.current.slice(1), { yPercent: 100})

      
      tl.to(imgRef.current[0], {
        yPercent: -100,
        ease: 'none'
      }, 0)
      .to(imgRef.current[1], {
        yPercent: 0,
        ease: 'none'
      }, 0)
      .to(textContainerRef.current, {
        y:'-30%'
      },0 )
      

      
      
      .to(imgRef.current[1], {
        yPercent:-100,
        ease: 'none'
      }, 1)
      .to(imgRef.current[2], {
        yPercent:0,
        ease: 'none'
      }, 1)

      .to(textContainerRef.current, {
        y:'-65%'
      },1 )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='h-screen relative bg-primary flex  justify-center pt-40'>
      <div className='relative'>

      <div className='w-100 h-100 absolute-center overflow-hidden z-10'>
        {imgArr.map((value, index) => (
          <img 
          ref={(el) => (imgRef.current[index] = el)} 
          src={value} 
          key={index} 
          alt="" 
          className='object-cover h-full w-full absolute top-0 left-0'
          onLoad={handleImageLoad}
          />
        ))}
      </div>
      <div className='inline-block overflow-hidden h-32 cursor-pointer'>
        <div className='inline-flex flex-col items-center' ref={textContainerRef}>
          {textArr.map((value, index)=>(

            <span
             ref={(el)=> (textRef.current[index]= el)} 
             key={index}
             className='tertiary-text text-9xl leading-34 scale-y-[1.1] block text-white' >{value}</span>
          ))

          }
            
        </div>

      </div>


      <div className='bottom-xl horizontal-center'>
          <Button>See all</Button>
      </div>
        </div>

        
          
            <h1 className=' absolute tertiary-text w-fit left-xl bottom-xl px-2 py-1 text-3xl text-text'>Selected Products</h1>
            <h1 className=' absolute tertiary-text w-fit right-xl bottom-xl px-2 py-1 text-3xl text-text'>#Better4U</h1>
          
        
    </section>
  )
}

export default Showcase