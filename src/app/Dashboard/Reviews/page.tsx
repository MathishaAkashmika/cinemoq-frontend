"use client";

import React, { useState } from "react";

interface Review {
  id: number;
  user: string;
  userImage: string;
  movieName: string;
  starRating: number;
  review: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    user: "John Doe",
    userImage: "https://via.placeholder.com/50",
    movieName: "Inception",
    starRating: 5,
    review: "Amazing movie with mind-bending concepts!",
  },
  {
    id: 2,
    user: "Alice Smith",
    userImage: "https://via.placeholder.com/50",
    movieName: "The Matrix",
    starRating: 4,
    review: "Loved the storyline and action sequences.",
  },
  {
    id: 3,
    user: "Robert Brown",
    userImage: "https://via.placeholder.com/50",
    movieName: "Interstellar",
    starRating: 5,
    review: "A visually stunning masterpiece!",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
    alert(`Deleted review with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>

      {/* Reviews Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-900 text-left text-sm font-semibold">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Movie Name</th>
              <th className="py-3 px-4">Star Rating</th>
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
                <td className="py-2 px-4 flex items-center gap-3">
                  <img
                    src={review.userImage}
                    alt={review.user}
                    className="w-10 h-10 rounded-full border border-purple-500"
                  />
                  {review.user}
                </td>
                <td className="py-2 px-4">{review.movieName}</td>
                <td className="py-2 px-4">{`⭐ ${review.starRating}`}</td>
                <td className="py-2 px-4 truncate max-w-xs">{review.review}</td>
                <td className="py-2 px-4 text-center">
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
