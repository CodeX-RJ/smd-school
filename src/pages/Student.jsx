import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  return (
<div className="flex items-center justify-center min-h-screen bg-blue-50">
<div className="text-center">
  <h1 className="text-4xl font-bold text-blue-700">Student Section Coming Soon</h1>
  <p className="mt-4 text-lg text-blue-600">
    We're working hard to create a dedicated section for our students where they can access all essential resources and updates. Stay tuned!
  </p>
  <p className="mt-6 text-gray-500">
    If you have any questions, feel free to contact us through the link below.
  </p>
  <div className="mt-6 space-x-4">
    <Link
      to="/"
      className="px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
    >
      Go Back Home
    </Link>
    <Link
      to="/contact_us"
      className="px-6 py-2 bg-gray-200 text-blue-700 rounded-lg shadow hover:bg-gray-300"
    >
      Contact Us
    </Link>
  </div>
</div>
</div>
  )
}

export default Student
