import React from 'react'
import School from '../assets/schoollogo.png'
import Hamburger from '../assets/hamburger.svg'
import { Link } from 'react-router-dom'
import Student from '../pages/Student'
import { useState } from 'react'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <>
    <nav className='flex flex-col md:flex-row md:shadow-md md:shadow-blue-200 md:items-center md:fixed md:bg-white w-full z-50'>
        <div className='flex justify-between p-1 w-full items-center  pr-3 shadow-md shadow-blue-200 md:shadow-none'>
            <div className='flex gap-3 items-center'>
            <Link to='/'><img src={School} alt="school logo" className='h-12 cursor-pointer'></img></Link>
            <div className='grid place-items-center'>
                <p className='font-roboto font-extrabold text-blue-600 m-0 text-xs sm:text-lg md:text-sm xl:text-lg'>
                St Junior Public School 
                </p>
                <p className=' text-black font-bold font-roboto m-0 text-xs sm:text-sm md:text-sm '>
                    Lucknow, Uttar Pradesh 
                </p>
            </div>
            </div>
            <div id="hamburger" className="flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden" onClick={toggleMenu}>
                <span className={`block w-full h-1 bg-black ${isMenuOpen? 'rotate-0' : 'rotate-45 translate-y-2.5'} transition-all`}></span>
                <span className={`block w-full h-1 bg-black ${isMenuOpen? 'block' : 'hidden'} transition`}></span>
                <span className={`block w-full h-1 bg-black ${isMenuOpen? 'rotate-0' : '-rotate-45 -translate-y-2.5'} transition-all`}></span>
            </div>
            
        </div>
        
        <ul className={`${isMenuOpen? 'hidden' : 'flex'} md:flex flex-col items-center w-full text-xs sm:text-lg font-bold gap-2 mt-4 text-blue-600 md:flex-row md:items-center md:gap-4 md:text-sm md:mt-0 md:mr-2 lg:gap-8 xl:text-lg xl:gap-8 transition-all pb-5 md:pb-0`}>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2' onClick={toggleMenu}>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2' onClick={toggleMenu}>
                    <Link to='/facilities'>Facilities</Link>
                </li>
        
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                     <Link to='/gallery' onClick={toggleMenu}>Gallery</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='student' onClick={toggleMenu}>Student</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='/about_us' onClick={toggleMenu}>About</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='/contact_us' onClick={toggleMenu}>Contact</Link>
                </li>
        </ul>
        
        
    </nav>
    </>
  )
}

export default Navbar;
