"use client";

import React, { useState } from "react";

interface AddAnnouncement {
  title: string;
  description: string;
  email: string;
  mobileNumber: string;
  files: File[]; // Updated to allow multiple files
}

const AddAnnouncement = () => {
  const [formData, setFormData] = useState<AddAnnouncement>({
    title: "",
    description: "",
    email: "",
    mobileNumber: "",
    files: [], // Initialize as an empty array
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setFormData({ ...formData, files: selectedFiles });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    alert("Announcement details saved!");
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      email: "",
      mobileNumber: "",
      files: [],
    });
    alert("Form reset!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Add Announcement</h1>

      {/* Form Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <form>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Announcement Title</label>
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
            <label className="block text-sm mb-1">Announcement</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Attach Files</label>
            <input
              type="file"
              multiple // Allow multiple file uploads
              onChange={handleFileChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            />
            <div className="mt-2">
              {formData.files.map((file, index) => (
                <div
                  key={index}
                  className="text-sm text-gray-400 flex items-center gap-2"
                >
                  <i className="fa-solid fa-file text-gray-500"></i>
                  {file.name}
                </div>
              ))}
            </div>
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

export default AddAnnouncement;
