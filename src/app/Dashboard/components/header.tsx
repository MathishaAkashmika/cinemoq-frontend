"use client"

import Link from "next/link";
import React, { useState } from "react";




function Header() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
 

  const handleLogout = () => {
    alert("You have been logged out!");
    
  };

  return (
    <div className="relative">
      {/* Header Content */}
      <div className="flex justify-between items-center p-4 bg-purple-900 shadow-md">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setIsPopoverOpen((prev) => !prev)}
        >
          <img
            src="/images/avatars/avt_1.png"
            alt="Admin"
            className="w-10 h-10 rounded-full border-2 border-purple-500" />
          <span>Admin ▼</span>
        </div>
      </div>

      {/* Popover */}
      {isPopoverOpen && (
        <div className="absolute right-4 top-16 bg-gray-800 text-white rounded-md shadow-lg w-48 z-10">
          <ul>
            {/* <li
              onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md"
            >
              Logout
            </li> */}
            <Link  className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md" href={"/Movies"} >LogOut</Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
