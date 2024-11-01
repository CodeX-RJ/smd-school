import React from 'react'
import School from '../assets/schoollogo.png'
import Hamburger from '../assets/hamburger.svg'
import { Link } from 'react-router-dom'
import Student from '../pages/Student'

function Navbar() {
  return (
    <>
    <nav className='flex flex-col md:flex-row md:shadow-md md:shadow-blue-200 md:items-center md:fixed md:bg-white w-full'>
        <div className='flex justify-between p-1 w-full items-center  pr-3 shadow-md shadow-blue-200 md:shadow-none'>
            <div className='flex gap-3 items-center'>
            <img src={School} alt="school logo" className='h-12 cursor-pointer'></img>
            <div className='grid place-items-center'>
                <p className='font-roboto font-extrabold text-blue-600 m-0 text-xs sm:text-lg md:text-sm xl:text-lg'>
                    S. M. D. PUBLIC SCHOOL 
                </p>
                <p className=' text-black font-bold font-roboto m-0 text-xs sm:text-sm md:text-sm '>
                    Lucknow, Uttar Pradesh 
                </p>
            </div>
            </div>
            <img src={Hamburger} alt='hamburger menu' className='h-10 cursor-pointer md:hidden'></img>
            
        </div>

        <ul className='flex flex-col items-center w-full text-xs sm:text-lg font-bold gap-2 mt-4 text-blue-600 md:flex-row md:items-center md:gap-4 md:text-sm md:mt-0 md:mr-2 lg:gap-8 xl:text-lg xl:gap-8 transition-all'>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='/facilities'>Facilities</Link>
                </li>
        
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                     <Link to='/gallery'>Gallery</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='student'>Student</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='/about_us'>About Us</Link>
                </li>
                <li className='hover:text-blue-900 cursor-pointer hover:underline hover:decoration-blue-800 hover:underline-offset-4 hover:decoration-2'>
                    <Link to='/contact_us'>Contact Us</Link>
                </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;
