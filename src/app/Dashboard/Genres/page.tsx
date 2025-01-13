"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Genre {
  id: number;
  name: string;
  description: string;
}

const initialGenres: Genre[] = [
  {
    id: 1,
    name: "Action",
    description: "High-energy movies with intense scenes and stunts.",
  },
  {
    id: 2,
    name: "Comedy",
    description: "Light-hearted movies aimed at entertaining and making people laugh.",
  },
  {
    id: 3,
    name: "Drama",
    description: "Movies with emotional narratives and strong character development.",
  },
];

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>(initialGenres);

  const handleView = (id: number) => {
    alert(`View details of genre ID: ${id}`);
  };

  const handleEdit = (id: number) => {
    alert(`Edit genre with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setGenres(genres.filter((genre) => genre.id !== id));
    alert(`Deleted genre with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header with Add Genre Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Genres</h1>
        <Link href="Genres/Add-genre">
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md">
            <i className="fa-solid fa-plus"></i>
            <span>Add Genre</span>
          </button>
        </Link>
      </div>

      {/* Genres Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-900 text-left text-sm font-semibold">
              <th className="py-3 px-4">Number</th>
              <th className="py-3 px-4">Genre</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <tr
                key={genre.id}
                className="hover:bg-gray-800 border-b border-gray-600"
              >
                <td className="py-2 px-4">{genre.id}</td>
                <td className="py-2 px-4">{genre.name}</td>
                <td className="py-2 px-4 truncate">{genre.description}</td>
                <td className="py-2 px-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleView(genre.id)}
                    className="text-purple-400 hover:text-purple-500"
                  >
                    
                  </button>
                  <button
                    onClick={() => handleEdit(genre.id)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(genre.id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
          SAVE
        </button>
        <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Genres;
