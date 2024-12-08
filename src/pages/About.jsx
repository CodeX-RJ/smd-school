import React from 'react'
import Schoolbuilding from '../assets/schoolbuilding.jpg'
import Vision from '../assets/vision.png'
import Mission from '../assets/mission.png'
import Manager from '../assets/manager.jpg'

function About() {
  return (
    <div className='font-roboto'>
    <h1 className='pt-20 text-center text-blue-600 font-bold font-roboto text-2xl vsm:text-3xl md:text-4xl lg:text-5xl'>About Us</h1>
    <section className='font-roboto flex flex-col md:flex-row justify-center md:text-row md:items-center p-5 md:h-1/2 mb-24 mt-10'>
        <div className='w-full md:w-1/3 flex justify-center'>
          <img src={Schoolbuilding} alt='abuot-us' className='w-full'></img>
        </div>
        <div className=' pl-0 md:w-4/6 md:pl-5 h-full'>
          <h2 className='text-blue-600 font-bold text-xl md:text-2xl lg:text-3xl'>About Our School</h2>
          <p className='text-md lg:text-md'>Established in 2008, St Junior Public School is a cornerstone of education in Dharsanda, Baburigaon, Barabanki. Our school was founded with a vision to provide quality education to children in the community, nurturing their intellectual, emotional, and moral growth.</p>
          <p className='text-md lg:text-md'>
          Over the years, we have built a reputation for academic excellence, dedicated teaching, and fostering a culture of inclusivity and respect. Guided by the principles of integrity, hard work, and holistic development, we strive to prepare our students to face the challenges of the modern world with confidence and resilience.
          </p>
        </div>
      </section>


      <section className='my-24'>
          <div className='font-roboto flex flex-col md:flex-row md:text-row md:items-center px-5'>
            <img src={Vision} alt='abuot-us' className='w-1/2 h-1/2 md:w-3/12'></img>
            <div className='p-5 pl-0 md:w-4/6 md:pl-5 h-full'>
              <h2 className='text-blue-600 font-bold text-xl md:text-2xl lg:text-3xl'>Vision</h2>
              <p className='text-md lg:text-xl py-2'>To provide a nurturing environment that fosters academic excellence, ethical values, and holistic development, empowering students to become responsible and compassionate global citizens. We are committed to cultivating curiosity, critical thinking, and a lifelong love for learning in every child.</p>
            </div>
          </div>

          <div className='font-roboto flex md:flex-row md:text-row md:items-center px-5 flex-col-reverse'>
            <div className='p-5 pl-0 md:w-4/6 md:pl-5 h-full'>
              <h2 className='text-blue-600 font-bold text-xl md:text-2xl lg:text-3xl'>Mission</h2>
              <p className='text-md lg:text-xl py-2'>To be a leading institution that inspires innovation, embraces diversity, and shapes future leaders by blending modern education with timeless values. We envision a world where our students excel academically, contribute meaningfully to society, and lead with integrity and purpose.</p>
            </div>
            <img src={Mission} alt='abuot-us' className='w-1/2 h-1/2 md:w-3/12'></img>
          </div>
      </section>

      <section className='text-center bg-pink-100 py-20 px-5'>
        <h2 className='text-blue-600 font-bold text-xl md:text-2xl lg:text-3xl'>Meet Our Staff</h2>
        <p className='text-md lg:text-xl py-2 text-black'>Our teachers and staff are the pillars of our school's success. With their dedication, experience, and care, they guide our students towards excellence every step of the way.</p>



        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10'>
          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>

          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg'>
           <img src={Manager} alt="teacher1" className='rounded-full w-2/3 border-4 border-blue-600'/>
           <h2 className='font-extrabold mt-5 mb-2 text-lg md:text-xl xl:text-2xl'>
            Mohd. Haseeb
           </h2>
           <h2 className='font-medium my-2 text-md md:text-lg xl:text-xl'>
            Principle (B. A., M. A.)
           </h2>
           <p className='font-medium text-gray-700 my-2 text-sm md:text-md xl:text-lg italic'>
            With over two decades of educational leadership, Mr. Haseeb is committed to fostering an environment where every student can thrive academically and personally.
           </p>
          </div>
        </div>
      </section>
      
    
    </div>
  )
}

export default About;
