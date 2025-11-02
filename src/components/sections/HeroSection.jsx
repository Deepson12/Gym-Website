import React, {  useEffect, useRef, useState } from 'react'
import bgImg from '../../assets/img/bg-main.jpg'
import AnimatedText from '../common/AnimatedText'

import '../../styles/global.css'
import '../../styles/components.css'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const HeroSection = ({handleImageLoad}) => {
  const [scrolled, setScrolled] = useState(false)


  const titleRef = useRef(null)
  const boxRef = useRef(null)
  const AnimTitleRef = useRef(null)
  const AnimFirstRef = useRef(null)

  const titleWord = 'The best stories <br/> deserve to be told'
  const titleArrLength = titleWord.split(' ').length
  const lastWord = titleWord.split(' ')[titleArrLength -1]
  const otherWord = titleWord.split(' ').slice(0, -1);

  
  
  

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


      const handleScroll = ()=>{
        const scrollPos = window.scrollY

        
        

        if(scrollPos>0 && !scrolled) setScrolled(true)
          else if(scrollPos === 0 && scrolled) setScrolled(false)
        
        
        
      }

      window.addEventListener('scroll', handleScroll)

      return ()=> {
        window.removeEventListener('scroll', handleScroll)
      }
    })


    return ()=> ctx.revert();
  },[scrolled])

useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.fromTo(
      AnimTitleRef.current,
      { y: scrolled ? '0%' : '-100%' },
      {
        y: scrolled ? '-100%' : '0%',
        duration: 0.6,
        ease: 'power3.inOut',
        overwrite: 'auto',
        delay: 0.3
      }
    );

    gsap.fromTo(
      AnimFirstRef.current,
      { rotate: scrolled ? 0 : -10 },
      {
        rotate: scrolled ? -10 : 0,
        duration: 0.6,
        ease: 'power3.inOut',
        overwrite: 'auto',
      }, '<'
    );


  });

  return () => ctx.revert();
}, [scrolled]);

  return (
    <div ref={boxRef} className='relative font-formula h-screen overflow-hidden'>
       <img src={bgImg} alt="" className='absolute w-full h-full object-cover object-[0%] md:object-center ' onLoad={handleImageLoad}/>
       <div className='h-full horizontal-center grid py-20 items-end w-9/10 '>
        <div>
        <h1 ref={titleRef} className='title-text text-center h-fit w-fit mx-auto'>
          {
            otherWord.map((value, index)=>{
              if(value === '<br/>'){
                return <br key={index}/>
              }else{

                return (
                  <div key={index} className='mx-2 md:mx-3 inline-flex'>{value}</div>
                )
              }
            })

            
            
          }
          <div className='mx-2 md:mx-3  inline-flex overflow-hidden h-16 md:h-32 '>
            <div className='inline-flex gap-1 flex-col' ref={AnimTitleRef}>
              <div className='block leading-16 md:leading-32' ref={AnimFirstRef}>{lastWord}</div>
              <div className='block leading-16 md:leading-32'>SEEN</div>
            </div>
          </div>
          </h1>
        <div className='mt-10 flex justify-between secondary-text'>
          <div className='flex flex-col'>
            <h1 className='text-text text-lg md:text-2xl'>Fitness Corner©</h1>
            <p className='text-white text-xl md:text-3xl'>Chasing the elements</p>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-text text-lg md:text-2xl'>Since 2022</h1>
            <p className='text-white text-xl md:text-3xl'>Working locally</p>
          </div>
        </div>
        </div>
        
       </div>
    </div>
  )
}

export default HeroSection