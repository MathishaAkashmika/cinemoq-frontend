"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-90 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-purple-500 text-2xl font-bold hover:text-purple-400">
        C I N E M O Q
      </Link>


      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i
          className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
        ></i>
      </button>

      <nav
        className={`${isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black bg-opacity-90 md:relative md:flex md:space-x-6 md:w-auto md:top-auto md:left-auto`}
      >
        <a
          href="/Movies"
          className="block px-4 py-2 hover:text-purple-400 md:px-0"
        >
          MOVIES
        </a>
        <a
          href="/MyTickets"
          className="block px-4 py-2 hover:text-purple-400 md:px-0"
        >
          MY TICKETS
        </a>
        <a href="#" className="block px-4 py-2 hover:text-purple-500 md:px-0">
          ABOUT US
        </a>
        <a href="#" className="block px-4 py-2 hover:text-purple-500 md:px-0">
          CONTACT US
        </a>
        <a href="#" className="block px-4 py-2 hover:text-purple-500 md:px-0">
          <i className="fa-brands fa-rocketchat text-2xl md:text-xl"></i>
        </a>
      </nav>

      <div className="hidden md:flex space-x-2">
        <a href="/Signup">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Sign Up
          </button>
        </a>
        <a href="/Login">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
            Login
          </button>
        </a>
        <a href="/UserProfile">
          <button className=" text-white py-2 px-4 rounded">
            <i className="fa-regular fa-circle-user text-2xl"></i>
          </button>
        </a>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col space-y-2 mt-4 md:hidden">
          <a href="/Signup">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded w-full">
              Sign Up
            </button>
          </a>
          <a href="/Login">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded w-full">
              Login
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
