import React from 'react'
import AnimatedText from '../common/AnimatedText'

import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex flex-col px-10 gap-10 py-10'>
        <div className='flex justify-between'>
            <ul className='flex flex-col md:flex-row gap-5 md:gap-10'>
                <AnimatedText content={'Work'}/>
                <AnimatedText content={'Services'}/>
                <AnimatedText content={'About'}/>
                <AnimatedText content={'Contact'}/>
            </ul>
            <ul className='flex flex-col md:flex-row gap-5 md:gap-10'>
                <AnimatedText content={<FaFacebookSquare size={35}/>}/>
                <AnimatedText content={<FaFacebookSquare size={35}/>}/>
                <AnimatedText content={<FaFacebookSquare size={35}/>}/>
                <AnimatedText content={<FaFacebookSquare size={35}/>}/>

            </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <small className='font-montserrat text-text font-medium md:text-xl text-base text-center'>Copyright © 2025 Fitness Corner</small>
            <small className='font-montserrat text-surface font-medium md:text-base text-center text-sm'>All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer