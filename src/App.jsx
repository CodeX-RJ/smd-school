import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './section/Home'

export default function App() {
  return (
    <div className='m-0 p-0'>
      <Navbar/>
      <Home/>
    </div>
  )
}
