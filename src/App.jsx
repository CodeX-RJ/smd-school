import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './section/Home'
import Footer from './component/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Facilities from './pages/facilities'
import Gallery from './pages/gallery'
import Privacypolicy from './pages/Privacypolicy'
import Termsandconditions from './pages/Termsandconditions'
import Student from './pages/Student'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div className='m-0 p-0 scroll-smooth'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about_us' element={<About/>} />
        <Route path='/contact_us' element={<Contact/>} />
        <Route path='student' element={<Student/>} />
        <Route path='/facilities' element={<Facilities/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/privacy_and_policy' element={<Privacypolicy/>} />
        <Route path='/terms_and_conditions' element={<Termsandconditions/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
