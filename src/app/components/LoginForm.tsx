"use client"


import Link from 'next/link';
import React, { useState } from 'react'

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-md z-20">
      <div className="absolute top-3 left-5 text-purple-600 text-xl font-bold">
        <Link href="/" className="hover:underline">
          T I C K E T E R
        </Link>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Login to your account</h2>

      <form>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              &#128065;
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
        >
          Login now
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don’t Have An Account?{' '}
          <a href="/Signup" className="text-purple-600 hover:underline">
            Register Here
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;