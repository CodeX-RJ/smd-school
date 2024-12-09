import React from 'react';
import Schoollogo from '../assets/schoollogo.png';
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'
import email from '../assets/email.png'
import mail from '../assets/mail.png'
import whatsapp1 from '../assets/whatsapp1.png'
import call from '../assets/call.png'
import location from '../assets/location.png'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='font-roboto'>
    <div className='flex flex-col md:flex-row px-10 py-8 md:py-0  items-center bg-blue-300 h-fit '>
      <div className='flex flex-col w-full flex-1'>
          <img src={Schoollogo} alt='school logo' className='w-1/5'></img>
          <h1 className='font-extrabold text-blue-600 text-xl vsm:text-2xl sm:text-3xl  my-4 w-1/2 md:text-2xl lg:text-3xl'>St Junior Public School</h1>
          <div className='flex flex-row w-1/5 gap-3 items-center'>
            <img src={youtube} alt='youtube logo' className='w-7 md:w-5 lg:w-7 cursor-pointer'></img>
            <img src={facebook} alt='facebook logo' className='w-7 md:w-5 lg:w-7 cursor-pointer'></img>
            <img src={whatsapp} alt='whatsapp' className='w-7 md:w-5 lg:w-7 cursor-pointer'></img>
            <img src={email} alt='email' className='w-7 md:w-5 lg:w-7 cursor-pointer'></img>
          </div>
        </div>

        <div className='my-10  flex-1 w-full '>
          <h1 className='my-4 text-blue-600 font-bold text-2xl md:text-xl lg:text-2xl'>Quick Links</h1>
          <ul className='text-black font-bold text-lg md:text-md lg:text-lg flex flex-col gap-2 transition-all'>
            <li className='hover:text-blue-600 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to='/facilities'>Facilities</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to='/gallery'>Gallery</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to='student'>Student</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to='/about_us'>About Us</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to='/contact_us'>Contact Us</Link></li>
          </ul>
        </div>

        <div className='my-10 flex-1'>
          <h1 className='my-4 text-blue-600 font-bold text-2xl md:text-xl lg:text-2xl'>Contact</h1>
          <div className='flex flex-col gap-4 text-xl md:text-lg lg:text-xl'>
            <div className='w-full flex gap-3 items-center'>
              <img src={call} alt='logo' className='w-1/12'></img>
              <p className=' font-semibold'>+91 8838384564</p>
            </div>
            <div className='w-full flex gap-4 items-center'>
              <img src={whatsapp1} alt='logo' className='w-1/12'></img>
              <p className=' font-semibold'>+91 8838384564</p>
            </div>
            <div className='w-full flex gap-4 items-center'>
              <img src={mail} alt='logo' className='w-1/12'></img>
              <p className=' font-semibold'>smd.public.school@gmail.com</p>
            </div>
            <div className='w-full flex gap-4 items-center'>
              <img src={location} alt='logo' className='w-1/12'></img>
              <p className=' font-semibold'>Village-Amargarh, Post-Sitapur, District-Lucknow, Uttar Pradesh, India, 223209</p>
            </div>
          </div>
        </div>
    
      
    </div>
    <div className='flex flex-col md:flex-row md:gap-10 justify-center items-center my-3 px-10 '>
      <p className='font-semibold text-sm md:text-sm lg:text-md xl:text-lg'>
        &copy; 2024 St Junior Public School. All rights reserved. Developed by Ramakant Jai (RJ) 
      </p>
      <div className='flex flex-row gap-5 text-blue-600 font-semibold'>
        <span className='underline underline-offset-2 cursor-pointer hover:text-blue-400 text-sm md:text-md lg:text-lg xl:text-xl'>
          <Link to='/terms_and_conditions'>Terms and Conditions</Link>
        </span>
        <span className='underline underline-offset-2 cursor-pointer hover:text-blue-500 text-sm md:text-md lg:text-lg xl:text-xl'>
          <Link to='/privacy_and_policy'>Privacy Policy</Link>
        </span>
      </div>
    </div>
    </footer>
  )
}

export default Footer;
