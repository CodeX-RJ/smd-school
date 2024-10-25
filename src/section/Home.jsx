import React from 'react'
import Schoolbuilding from '../assets/schoolbuilding.jpg'
import Principle from '../assets/principle.jpg'
import Manager from '../assets/manager.jpg'
import Gem from '../assets/gem.png'
function Home() {
  return (
    <>
    <section className="flex flex-col justify-center items-center font-roboto w-full md:pt-15 mb-20">
    <div className='flex flex-col gap-2 md:mt-16 p-4'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left font-bold text-black'>Welcome to, </h2>
        <h1 className='text-left text-blue-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:6xl'>S. M. D. PUBLIC SCHOOL</h1>
        <h3 className='text-gray-400 text-left font-bold text-sm md:text-md lg:text-xl xl:text-2xl'>Empowering young minds to shape a better tomorrow. At Smt. Mahadevi Public Highschool, we are committed to providing quality education that nurtures creativity, critical thinking, and holistic growth. Join us on a journey of learning, discovery, and lifelong success.</h3>
        <div className='flex f-row gap-5'>
          <button className='bg-blue-600 text-white p-1 px-5 text-sm hover:bg-blue-500 cursor-pointer md:text-md'>Contact Us</button>
          <button className='border border-blue-600 p-1 px-5 text-blue-600 text-sm font-bold hover:bg-blue-200 cursor-pointer md:text-md'>Know More</button>
        </div>
    </div>
    <div className='p-4'>
      <img src={Schoolbuilding} alt='school building'></img>
    </div>
    </section>



    <section className='my-20'>
      <div className='flex flex-col md:flex-row gap-4'>
      <div className='flex flex-row px-4 items-center w-full'>
          <div className='w-3/4'>
            <p className='text-sm pr-3 sm:text-lg md:text-sm lg:text-md'>
            At Smt. Mahadevi Public Highschool, we believe in nurturing young minds with the right values and a quality education. Our goal is to inspire every student to reach their highest potential.
            </p>
            <p className='text-sm italic mt-2 sm:text-lg md:text-sm lg:text-md'>
              – Mohd. Haseeb Sir, Principal
            </p>            
          </div>
          <div className='w-1/4 grid place-items-center py-2'>
            <img src={Principle} alt='principle image' className='w-full'></img>
          </div>
        </div>
        <div className='flex flex-row-reverse md:flex-row px-4 items-center w-full'>
          <div className='w-3/4'>
            <p className='text-sm pl-3 sm:text-lg md:text-sm lg:text-md md:p-0'>
            We are committed to providing a supportive environment where students can grow, excel, and achieve their dreams. Together, we shape the future.
            </p>
            <p className='text-sm italic mt-2 sm:text-lg md:text-sm lg:text-md pl-3 md:p-0'>
              – Lalji Sir, Manager
            </p>            
          </div>
          <div className='w-1/4 grid place-items-center py-2'>
            <img src={Manager} alt='principle image' className='w-full'></img>
          </div>
        </div>
      </div>
      <button className='bg-blue-600 px-4 p-1 ml-4 text-white mt-4 hover:text-blue-400 cursor-pointer'>Know More</button> 
    </section>


    <section className='m-4 my-20'>
      <h1 className='text-blue-600 font-bold text-4xl md:6xl w-3/4 my-6'>
        Guiding Young Minds Towards Success
      </h1>
      <p className='my-6 text-lg md:text-xl'>
        Our school is committed to nurturing academic excellence, empowering each student to achieve their highest potential. Our passionate educators inspire a lifelong love of learning.
      </p>
      <div className='flex flex-col sm:flex-row gap-5'>
        <div className='w-full sm:w-1/3'>
          <img src={Gem} alt='gem icon' className='w-8 h-8 my-6'></img>
          <h1 className='text-3xl sm:text-2xl text-blue-600 font-bold my-6 w-4/5'>Shaping Well-Rounded Leaders for a Promising Future</h1>
          <p className='text-lg sm:text-md my-6'>We emphasize holistic growth, fostering both intellectual and personal development.</p>
        </div>
        <div className='w-full sm:w-1/3'>
          <img src={Gem} alt='gem icon' className='w-8 h-8 my-6'></img>
          <h1 className='text-3xl sm:text-2xl text-blue-600 font-bold my-6 w-4/5'>Fostering Lasting Connections with Our Community</h1>
          <p className='text-lg sm:text-md my-6'>Our mission is driven by a deep commitment to community engagement.</p>
        </div >
        <div className='w-full sm:w-1/3'>
          <img src={Gem} alt='gem icon' className='w-8 h-8 my-6'></img>
          <h1 className='text-3xl sm:text-2xl text-blue-600 font-bold my-6 w-4/5'>Be Part of Inspiring Tomorrow's Leaders</h1>
          <p className='text-lg sm:text-md my-6'>Together, we can create a supportive environment for growth.</p>
        </div>
      </div>
      <button className='bg-blue-600 px-4 p-1 text-white mt-4 hover:text-blue-400 cursor-pointer'>Explore Facilities</button>
    </section>
    </>
  )
}

export default Home;
