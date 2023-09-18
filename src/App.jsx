
import { useEffect } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

import AboutUs from './pages/Aboutus'
import Home from './pages/home'

function App() {
 
  return (
    <Routes>
        
        <Routes path='/' element={<Home/>} />
        <Routes path='/about' element={<AboutUs/>} />
    </Routes>
  )
}

export default App
