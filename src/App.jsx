import Navbar from './components/layout/Navbar'
import { useLenis } from './hooks/useLenis'
import About from './pages/About'
import Landing from './pages/Landing'
import './styles/global.css'

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  useLenis()
  const location = useLocation();

  return (
    <>
    <Navbar/>
    <Routes location={location}>
      
      <Route path='/' element={<Landing/>} />
      <Route path='/about' element={<About/>} />
     
    </Routes>
    </>
  )
}

export default App
