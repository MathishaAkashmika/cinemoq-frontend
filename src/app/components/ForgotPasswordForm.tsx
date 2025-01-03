"use client";

import Link from 'next/link';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ForgotPasswordForm: React.FC = () => {
  return (
    <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-md z-20">
      
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Forgot your Password?</h2>

      <form>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 mb-4"
        >
          Send Email
        </button>

        <Link href="/Login">
          <button
            type="button"
            className="w-full bg-transparent text-gray-800 py-3 rounded-lg hover:bg-gray-400 font-bold">
            <i className="fa-solid fa-less-than mr-2 w-5 h-4 "></i>
            Back to Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
