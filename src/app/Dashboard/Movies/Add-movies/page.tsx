"use client";

import React, { useState } from "react";

interface Movie {
  title: string;
  description: string;
  runtime: string;
  rating: string;
  showtime: string;
  genre: string;
  trailer: string;
  thumbnail: File | null;
  movieBanner: File | null;
}

const AddMovies = () => {
  const [formData, setFormData] = useState<Movie>({
    title: "",
    description: "",
    runtime: "",
    rating: "",
    showtime: "",
    genre: "",
    trailer: "",
    thumbnail: null,
    movieBanner: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "thumbnail" | "movieBanner"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [key]: file });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    alert("Movie details saved!");
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      runtime: "",
      rating: "",
      showtime: "",
      genre: "",
      trailer: "",
      thumbnail: null,
      movieBanner: null,
    });
    alert("Form reset!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Add Movie</h1>

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

          {/* Runtime, Rating, Showtime, Genre */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Runtime</label>
              <input
                type="text"
                name="runtime"
                value={formData.runtime}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Rating</label>
              <input
                type="text"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Showtime</label>
              <input
                type="text"
                name="showtime"
                value={formData.showtime}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Trailer */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Trailer</label>
            <input
              type="text"
              name="trailer"
              value={formData.trailer}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Thumbnail and Movie Banner */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Thumbnail</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "thumbnail")}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Movie Banner</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "movieBanner")}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              />
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

export default AddMovies;
