import React from 'react'
import SchoolBuilding from '../assets/schoolbuilding.jpg'

function Facilities() {
  return (
    <div className='bg-slate-200'>
      <h1 className='text-blue-600 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-20 text-center'>
          Our Facilities
          </h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 font-roboto'> 
        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Classrooms</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>Spacious, modern classrooms equipped with interactive boards and technology to enhance learning experiences.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li className=''>Comfortable seating arrangements</li>
            <li>Smart boards and projectors</li>
            <li>Well-lit and ventilated spaces</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white' >
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Library</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>A well-stocked library with a range of books, digital resources, and quiet study spaces for students.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li >Extensive book and digital collection</li>
            <li>Individual and group study areas</li>
            <li>Access to online research databases</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Computer Lab</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>Advanced computer labs with the latest software and high-speed internet, promoting digital literacy and practical learning.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li >Individual workstations with modern computers</li>
            <li>Educational software for various subjects</li>
            <li>High-speed internet access</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Science Labs</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>Dedicated Physics, Chemistry, and Biology labs where students can conduct hands-on experiments and explore scientific principles.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li>Specialized equipment for each science subject</li>
            <li>Safety guidelines and supervised experiments</li>
            <li>Interactive sessions for practical learning</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Playground and Sports</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>Outdoor playground and sports facilities that encourage physical activity, teamwork, and healthy competition.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li className=''>Large fields for soccer, cricket, and other sports</li>
            <li>Basketball and volleyball courts</li>
            <li>Safe and well-maintained equipment
            </li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Medical Facilities</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>An on-campus medical room with basic first-aid and health services, ensuring student well-being at all times.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li>Trained nurse available during school hours</li>
            <li>First-aid supplies and emergency equipment</li>
            <li>Regular health check-ups
            </li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Transportation</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>Safe and reliable transportation services, offering convenient pick-up and drop-off options across the city.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li>Well-maintained school buses</li>
            <li>Trained and responsible drivers</li>
            <li>GPS tracking and real-time updates for parents</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Cafeteria</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>A clean and comfortable cafeteria offering nutritious meals and snacks to keep students energized throughout the day.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li>Healthy meal options and snacks</li>
            <li>Hygienic preparation and serving areas</li>
            <li>eating for group and individual dining</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Auditorium</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>A spacious auditorium for school events, assemblies, and performances, fostering a vibrant community and student engagement</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li className=''>Professional audio-visual equipment</li>
            <li>Comfortable seating for large audiences</li>
            <li>Stage for events, plays, and performances</li>
          </ul>
        </div>

        <div className='shadow-lg p-5 bg-white'>
          <img src={SchoolBuilding} alt='school building'></img>
          <h1 className='text-blue-600 text-2xl sm:text-xl md:text-2xl xl:text-3xl font-bold mt-5'>Extracurricular Facilities</h1>
          <p className='text-gray-700 text-md lg:text-lg xl:text-xl'>Spaces for arts, music, drama, and other extracurricular activities that nurture creativity and self-expression.</p>
          <ul className='my-5 list-disc pl-4 text-md lg:text-lg xl:text-xl'>
            <li>Dedicated art and music rooms</li>
            <li>Supplies and instruments for various activities</li>
            <li>After-school programs and workshops</li>
          </ul>
        </div>

        
       
      </div>


    </div>
  )
}

export default Facilities;
