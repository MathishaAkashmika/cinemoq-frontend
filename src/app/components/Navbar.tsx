"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {

return (
    <header className="bg-black bg-opacity-90 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
    <Link href="/" className="text-purple-500 text-2xl font-bold hover:text-purple-400">
        T I C K E T E R
    </Link>
    <nav className="flex space-x-6 text-M">
      <a href="/Movies" className="hover:text-purple-400">MOVIES</a>
      <a href="/MyTickets" className="hover:text-purple-400">MY TICKETS</a>
      <a href="#" className="hover:text-purple-500">SHOP</a>
      <a href="#" className="hover:text-purple-500">CONTACT US</a>
    </nav>
    <div>
        <a href="/Signup">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded mr-2">
            Sign Up
          </button>
        </a>
        <a href="/Login">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
            Login
          </button>
        </a>
      </div>      
  </header>
  )
}

export default Navbar