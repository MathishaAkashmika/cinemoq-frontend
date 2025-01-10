import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => 
  {
  return (<div><Navbar />

      <div
      className="min-h-screen flex items-center justify-center py-8"
      style={
        {
        background:
          "linear-gradient(142.9deg, rgba(113, 9, 129, 1) 0%, rgba(0, 0, 0, 1) 51.5%)",
        }
            }>
      <div className="w-full max-w-4xl bg-white/25 rounded-lg p-8 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-col-reverse">
        
      <div className="flex-grow">
      <div className="text-center mb-8">
          <h1 className="text-white text-3xl sm:text-4xl font-medium font-['Calibri']">
              Contact Us
          </h1>
          <p className="text-white text-sm sm:text-medium mt-2 font-['Calibri']">
              Get in touch with us
          </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="bg-black/40 rounded-md p-4">
          <input
           type="text"
           className="w-full bg-transparent text-white placeholder:text-sm placeholder-opacity-50 outline-none"
           placeholder="First Name"/>
      </div>
      <div className="bg-black/40 rounded-md p-4">
           <input
             type="text"
             className="w-full bg-transparent text-white placeholder:text-sm placeholder-opacity-50 outline-none"
             placeholder="Last Name"/>
      </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="bg-black/40 rounded-md p-4">
          <input
             type="email"
             className="w-full bg-transparent text-white placeholder:text-sm placeholder-opacity-50 outline-none"
             placeholder="Email"/>
      </div>
      <div className="bg-black/40 rounded-md p-4">
          <input
             type="tel"
             className="w-full bg-transparent text-white placeholder:text-sm placeholder-opacity-50 outline-none"
             placeholder="Phone Number"/>
      </div>

      </div>
      <div className="bg-black/40 rounded-md p-4 mb-6">
          <textarea
             rows={5}
             className="w-full bg-transparent text-white placeholder:text-sm placeholder-opacity-50 outline-none"
             placeholder="Message"> 
          </textarea>
      </div>

      <div className="flex justify-center">
             <button className="bg-[#710981] hover:bg-purple-700 text-white px-12 py-2 rounded-md font-medium font-['Poppins'] transform transition-all duration-200 ease-in-out active:scale-95 active:translate-y-1">
               Submit
             </button>
      </div>
      </div>

      
      <div className="text-white flex flex-col items-start py-24">
      
      <div className="mb-4">
             <p className="text-sm sm:text-medium font-medium font-['Calibri']">
               If you wish to contact us via email, please fill out the form,
               and we will get in touch with you at the earliest.
             </p>
      </div>

      <div className="space-y-3 mt-14">
      <div className="flex items-center space-x-4">
            <LuPhoneCall className="text-xl hover:text-purple-700 transition-all duration-200 ease-in-out transform hover:scale-110" />
             <a
               href="tel:011234567890"
               className="text-sm sm:text-medium font-medium font-['Calibri'] hover:text-purple-700 transition-all duration-200 ease-in-out transform hover:scale-110"
             >
                +94 11 234 5678
             </a>
      </div>

      <div className="flex items-center space-x-4">
            <HiOutlineMail className="text-xl hover:text-purple-700 transition-all duration-200 ease-in-out transform hover:scale-110" />
             <a
              href="mailto:ticketer@Gmail.com"
              className="text-sm sm:text-medium font-medium font-['Calibri'] hover:text-purple-700 transition-all duration-200 ease-in-out transform hover:scale-110"
             >
                ticketer@gmail.com
             </a>
      </div>

       <div className="flex items-center space-x-4">
            <TfiLocationPin className="text-xl hover:text-purple-700 transition-all duration-200 ease-in-out transform hover:scale-110" />
              <p className="text-sm sm:text-medium font-medium font-['Calibri'] hover:text-purple-700 transition-all duration-200 ease-in-out transform hover:scale-110">
                Galle Road, Colombo 03
              </p>
      </div>
      </div>

      <div className="flex items-center space-x-6 mt-16">
              <a
              href="#"
              className="text-2xl hover:text-purple-700 active:scale-90 active:translate-y-1 transition duration-200 ease-in-out transform hover:scale-110"
              >
            <FiInstagram />
              </a>

              <a
               href="#"
               className="text-2xl hover:text-purple-700 active:scale-90 active:translate-y-1 transition duration-200 ease-in-out transform hover:scale-110"
              >
            <AiFillTikTok />
              </a>

              <a
               href="#"
               className="text-2xl hover:text-purple-700 active:scale-90 active:translate-y-1 transition duration-200 ease-in-out transform hover:scale-110"
              >
            <FaFacebook />
              </a>

              <a
               href="#"
               className="text-2xl hover:text-purple-700 active:scale-90 active:translate-y-1 transition duration-200 ease-in-out transform hover:scale-110"
              >
            <BsTwitterX />
              </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      <Footer />
      </div>
      
  );
};

export default ContactUs;
