import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import PreLoad from './components/layout/PreLoad'
import { useLenis } from './hooks/useLenis'
import About from './pages/About'
import Landing from './pages/Landing'
import './styles/global.css'

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  useLenis()
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true)
  const totalImages = 1;
  const [loadedImages, setLoadedImages] = useState(0)


  const allImagesLoaded = totalImages === loadedImages

  const handleImageLoad = ()=>{
    setLoadedImages((prev)=> prev+1);
   
    
  }
  
  
  return (
    <>
    <Navbar/>
      {isLoading && <PreLoad onComplete={()=> setIsLoading(false)} imagesLoaded={allImagesLoaded}/>}
    <Routes location={location}>
      
      <Route path='/' element={<Landing handleImageLoad={handleImageLoad}/>} />
      <Route path='/about' element={<About/>} />
     
    </Routes>
    </>
  )
}

export default App
