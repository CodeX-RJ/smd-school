import React from 'react'
import Schoolbuilding from '../assets/schoolbuilding.jpg'
function GallerySection() {
  return (
    <div className='p-5'>
        <h1 className='text-blue-600 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-10 text-center'>Snapshots of Learning & Fun</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
        <img src={Schoolbuilding} alt="school building"></img>
        <img src={Schoolbuilding} alt="school building"></img>
        <img src={Schoolbuilding} alt="school building"></img>
        <img src={Schoolbuilding} alt="school building"></img>
        <img src={Schoolbuilding} alt="school building"></img>
        <img src={Schoolbuilding} alt="school building"></img>
        </div>
        <div className='grid place-items-center my-5'>
         <button className='bg-blue-600 px-8 p-1 text-white my-4 hover:text-blue-400 cursor-pointer w-fit lg:text-xl'>See More</button>
        </div>
       
    </div>
  )
}

export default GallerySection;
