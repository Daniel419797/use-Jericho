import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full py-4 md:py-6 lg:py-10 px-4 lg:px-16 bg-white text-gray-700 flex items-center justify-between">
      <div className="text-xl font-bold">Jericho</div>
      <div>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar