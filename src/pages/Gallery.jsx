import React from 'react'
import { Link } from 'react-router-dom'

function gallery() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-700">Gallery Coming Soon</h1>
      <p className="mt-4 text-lg text-blue-600">
        Our gallery section is under construction! Soon, you’ll be able to explore and cherish moments from our school’s events, activities, and achievements.
      </p>
      <p className="mt-6 text-gray-500">
        For updates, feel free to get in touch with us using the link below.
      </p>
      <div className="mt-6 space-x-4">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-green-800"
        >
          Go Back Home
        </Link>
        <Link
          to="/contact_us"
          className="px-6 py-2 bg-gray-200 text-blue-600 rounded-lg shadow hover:bg-gray-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
  )
}

export default gallery
