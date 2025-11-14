import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import PreLoad from './components/layout/PreLoad'
import { useLenis } from './hooks/useLenis'
import About from './pages/About'
import Landing from './pages/Landing'
import './styles/global.css'

import { Routes, Route, useLocation, Router } from 'react-router-dom'
import Footer from './components/sections/Footer'

function App() {
  useLenis()
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true)
  const totalImages = {
    "/": 5,
    "/about": 1
  };
  const [loadedImages, setLoadedImages] = useState(0)


  const allImagesLoaded = totalImages[location.pathname] === loadedImages

  const handleImageLoad = ()=>{
    setLoadedImages((prev)=> prev+1);
   
    
  }

  useEffect(()=>{
    console.log(location.pathname);
    setLoadedImages(0);
    
  }, [location.pathname])
  
  
  return (
    <>
    <Navbar/>
      {isLoading && <PreLoad onComplete={()=> setIsLoading(false)} imagesLoaded={allImagesLoaded}/>}
      

    <Routes location={location}>
      
      <Route path='/' element={<Landing handleImageLoad={handleImageLoad}/>} />
      <Route path='/about' element={<About handleImageLoad={handleImageLoad}/>} />
     
    </Routes>
     
    <Footer/>
    </>
  )
}

export default App
