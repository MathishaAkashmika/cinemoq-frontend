
"use client";

import Link from "next/link";
import React, { useState } from "react";

interface Movie {
  id: number;
  title: string;
  genre: string;
  runtime: string;
  showtime: string;
  description: string;
}

const initialMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    runtime: "2h 28m",
    showtime: "7:00 PM",
    description: "A mind-bending thriller by Christopher Nolan.",
  },
  {
    id: 2,
    title: "The Matrix",
    genre: "Action",
    runtime: "2h 16m",
    showtime: "9:00 PM",
    description: "A sci-fi masterpiece by the Wachowskis.",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    runtime: "2h 49m",
    showtime: "6:30 PM",
    description: "Exploring space and time with Christopher Nolan.",
  },
];

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const handleView = (id: number) => {
    alert(`View details of movie ID: ${id}`);
  };

  const handleEdit = (id: number) => {
    alert(`Edit movie with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
    alert(`Deleted movie with ID: ${id}`);
  };

  const handleAddMovie = () => {
    alert("Redirecting to Add Movie Form...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header with Add Movie Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Movies</h1>
        {/* <button
          onClick={handleAddMovie}
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
        >
          <i className="fa-solid fa-plus"></i>
          Add Movie
        </button> */}
        <Link href="Movies/Add-movies">
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md">
        <i className="fa-solid fa-plus"></i>
        <span>Add Movies</span>
      </button>
    </Link>
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-900 text-left text-sm font-semibold">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Genre</th>
              <th className="py-3 px-4">Runtime</th>
              <th className="py-3 px-4">ShowTime</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr
                key={movie.id}
                className="hover:bg-gray-800 border-b border-gray-600"
              >
                <td className="py-2 px-4">{movie.title}</td>
                <td className="py-2 px-4">{movie.genre}</td>
                <td className="py-2 px-4">{movie.runtime}</td>
                <td className="py-2 px-4">{movie.showtime}</td>
                <td className="py-2 px-4 truncate">{movie.description}</td>
                <td className="py-2 px-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleView(movie.id)}
                    className="text-purple-400 hover:text-purple-500"
                  >
                    VIEW
                  </button>
                  <button
                    onClick={() => handleEdit(movie.id)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(movie.id)}
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

export default Movies;
