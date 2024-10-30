import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './section/Home'
import Footer from './component/Footer'
export default function App() {
  return (
    <div className='m-0 p-0 scroll-smooth'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}
