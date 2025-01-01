"use client"


import React, { useState } from 'react';

const SignupForm = () => {
  const [gender, setGender] = useState<string>('');

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  return (
    <div className="w-1/2 p-10">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Create an account</h2>
      <p className="text-gray-600 text-left mb-4 font-bold ">Enter Your Details Below To Register</p>

      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>

        <div className="mb-4">
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-400 focus:ring-2 focus:ring-purple-600 outline-none"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>



        <div className="mb-4">
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>

        <p className="text-gray-600 text-left mb-4 font-bold ">Password</p>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
        >
          Create account
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already Have An Account?{' '}
          <a href="/Login" className="text-purple-600 hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
