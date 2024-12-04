import React from 'react';

function Contact() {
  return (
    <div className="p-5 pt-20 font-roboto grid place-items-center bg-slate-200">
      <h1 className='text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold mt-10 mb-32'>Contact Us</h1>

      <h2 className='text-blue-600 w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center p-2'>School's Contact Information</h2>

      <ul className='w-full p-20'>
        <h3 className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold'>St Junior Public School</h3>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'><span className='font-semibold'>Address:</span> Village-Amargarh, Post-Sitapur, District-Lucknow, Uttar Pradesh, India, 223209</li>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'><span className='font-semibold'>Phone:</span> +91 8838384564</li>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'><span className='font-semibold'>E-mail:</span> smd.public.school@gmail.com</li>
      </ul>

      <h2 className='text-blue-600 w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center p-2 mt-20'>See Our School on Map</h2>

      <div className="w-full h-96 m-20 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14207.235853154618!2d80.90568543706756!3d27.099318875158243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e69158b65cf%3A0x490635d120ef36fa!2sMahona%2C%20Uttar%20Pradesh%20226203!5e0!3m2!1sen!2sin!4v1733230237619!5m2!1sen!2sin"
          className="relative inset-0 w-4/5 h-96 border border-blue-600 z-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> 
      </div> 



      


      <h2 className='text-blue-600 w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center p-2 mt-20'>Office and Visiting Hours </h2>

      <ul className='w-full p-20'>
  
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'><span className='font-semibold'>Office Hours:</span></li>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl list-disc ml-5'>Mon to Fri: 9:00 AM - 4:00 PM </li>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl list-disc ml-5'>Saturday: 9:00 AM - 1:00 PM   </li>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'><span className='font-semibold'>Visiting Hours: </span></li>
        <li className='my-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl list-disc ml-5'>Mon to Fri: 10:00 AM - 2:00 PM   </li>
      </ul>


      <div className="w-full p-5 lg:max-w-2xl  bg-white rounded-md shadow-lg mt-20  border-blue">
      <h2 className='text-blue-600 w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center p-2 mb-10'>Contact Form</h2>

        <form action="https://formsubmit.co/ramakantjai91@gmail.com" method="POST" className="space-y-4">
          {/* Name Field */}
          <div className=" mx-auto">
            <label htmlFor="name" className="block mb-1 font-medium text-black text-sm md:text-base">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mx-auto">
            <label htmlFor="email" className="block mb-1 font-medium text-black text-sm md:text-base">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone Field */}
          <div className=" mx-auto">
            <label htmlFor="phone" className="block mb-1 font-medium text-black text-sm md:text-base">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Subject Field */}
          <div className=" mx-auto">
            <label htmlFor="subject" className="block mb-1 font-medium text-black text-sm md:text-base">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message Field */}
          <div className=" mx-auto">
            <label htmlFor="message" className="block mb-1 font-medium text-black text-sm md:text-base">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/5 px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
