import React from 'react'
import AnimatedText from '../common/AnimatedText'
import { Link } from 'react-router-dom'

import '../../styles/global.css'
import '../../styles/components.css'

const Navbar = () => {
  return (
    <nav className='fixed w-screen px-lg py-xl flex justify-between items-center z-20'>
        <AnimatedText content='Work'/>
        <AnimatedText content='Services' visible='hidden md:block'/>
        <Link to={'/'}><h1 className='secondary-text text-text text-3xl'>Fitness Corner</h1></Link>
        <Link to={'/about'}><AnimatedText content='About' visible='hidden md:block'/></Link>
        <AnimatedText content='Contact'/>
    </nav>
  )
}

export default Navbar