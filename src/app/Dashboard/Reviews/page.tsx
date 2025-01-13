"use client";

import Link from "next/link";
import React, { useState } from "react";

interface Review {
  id: number;
  userName: string;
  movieName: string;
  rating: number;
  review: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    userName: "John Doe",
    movieName: "Inception",
    rating: 5,
    review: "Amazing movie! Mind-blowing visuals and plot.",
  },
  {
    id: 2,
    userName: "Jane Smith",
    movieName: "The Matrix",
    rating: 4,
    review: "Great concept and action sequences.",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const handleEdit = (id: number) => {
    alert(`Edit review with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
    alert(`Deleted review with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <Link href="Reviews/Add-reviews">
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md">
            <i className="fa-solid fa-plus"></i>
            <span>Add Review</span>
          </button>
        </Link>
      </div>

      {/* Reviews Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-900 text-left text-sm font-semibold">
              <th className="py-3 px-4">User Name</th>
              <th className="py-3 px-4">Movie Name</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Review</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr
                key={review.id}
                className="hover:bg-gray-800 border-b border-gray-600"
              >
                <td className="py-2 px-4">{review.userName}</td>
                <td className="py-2 px-4">{review.movieName}</td>
                <td className="py-2 px-4">{review.rating}</td>
                <td className="py-2 px-4 truncate max-w-xs">
                  {review.review}
                </td>
                <td className="py-2 px-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleEdit(review.id)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(review.id)}
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

export default Reviews;
