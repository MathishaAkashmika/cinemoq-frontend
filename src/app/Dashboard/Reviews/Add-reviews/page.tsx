"use client";

import React, { useState } from "react";

interface AddReview {
  userName: string;
  movieName: string;
  rating: number;
  review: string;
}

const AddReview = () => {
  const [formData, setFormData] = useState<AddReview>({
    userName: "",
    movieName: "",
    rating: 0,
    review: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Review Data:", formData);
    alert("Review details saved!");
  };

  const handleCancel = () => {
    setFormData({
      userName: "",
      movieName: "",
      rating: 0,
      review: "",
    });
    alert("Form reset!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Add Review</h1>

      {/* Form Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <form>
          {/* User Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Movie Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Movie Name</label>
            <input
              type="text"
              name="movieName"
              value={formData.movieName}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min={1}
              max={5}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Review */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Your Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>
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

export default AddReview;
