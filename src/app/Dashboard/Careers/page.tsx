// const Careers = () => {
//   return <p>This is Careers page</p>;
// };

// export default Careers;

"use client";

import React, { useState } from "react";

interface Career {
  title: string;
  description: string;
  email: string;
  mobileNumber: string;
  file: File | null;
}

const Careers = () => {
  const [formData, setFormData] = useState<Career>({
    title: "",
    description: "",
    email: "",
    mobileNumber: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    alert("Career details saved!");
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      email: "",
      mobileNumber: "",
      file: null,
    });
    alert("Form reset!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Careers</h1>

      {/* Form Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <form>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          {/* Email and Mobile Number */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Choose File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
            >
              SAVE
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;
