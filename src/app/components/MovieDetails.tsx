"use client";

import Link from 'next/link';
import { useState } from 'react';

interface Review {
  name: string;
  profilePicture: string;
  stars: number;
  comment: string;
}

interface MovieDetailsProperties {
  _id: string;
  name: string;
  description: string;
  thumbnailImage: string;
  heroImage: string;
  price: number;
  genre: string;
  director: string;
  releaseDate: string;
  rating: number;
  cast: string[];
  durationMinutes: number;
}

const MovieDetails: React.FC<MovieDetailsProperties> = ({
  _id,
  name,
  description,
  thumbnailImage,
  heroImage,
  price,
  genre,
  director,
  releaseDate,
  rating,
  cast,
  durationMinutes,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Mahinda',
      profilePicture: '/images/profile1.png', 
      stars: 4,
      comment: 'Great movie! Really enjoyed it.',
    },
    {
      name: 'Anura',
      profilePicture: '/images/profile1.png', 
      stars: 5,
      comment: 'Amazing plot and great performances!',
    },
  ]);

  const renderStars = (stars: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fas fa-star ${index < stars ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => setUserRating(index + 1)}
          ></i>
        ))}
      </div>
    );
  };

  const handleSubmit = () => {
    if (userRating > 0 && comment.trim() !== '') {
      const newReview: Review = {
        name: 'Anonymous',
        profilePicture: '/images/profile1.png',
        stars: userRating,
        comment: comment
      };

      setReviews([...reviews, newReview]);
      setIsModalOpen(false);
      setUserRating(0);
      setComment('');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <section className="px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="w-full md:w-1/3">
          <img src={thumbnailImage || heroImage} alt={name} className="rounded-lg shadow-lg w-full" />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-white">
            {name}{' '}
            <span className="bg-purple-600 px-2 py-1 text-sm rounded ml-4">Rating: {rating}/10</span>
          </h2>

          <div className="mt-4 text-gray-300">
            <p><span className="font-semibold">Genre:</span> {genre}</p>
            <p><span className="font-semibold">Director:</span> {director}</p>
            <p><span className="font-semibold">Release Date:</span> {formatDate(releaseDate)}</p>
            <p><span className="font-semibold">Duration:</span> {formatDuration(durationMinutes)}</p>
            <p><span className="font-semibold">Cast:</span> {cast.join(', ')}</p>
          </div>

          <p className="text-gray-300 mt-6 leading-relaxed">{description}</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded flex items-center justify-center w-full sm:w-auto">
              <i className="fas fa-play mr-2"></i> Watch Trailer
            </button>

            <Link href={`/${_id}/ticketbooking`}>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full sm:w-auto">
                <i className="fa-solid fa-ticket mr-2"></i> Book Tickets (${price})
              </button>
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded flex items-center justify-center w-full sm:w-auto"
            >
              <i className="fa-solid fa-pen-nib mr-2"></i> Write a Review
            </button>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Reviews</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between border border-gray-700"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.profilePicture}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-purple-400">{review.name}</h4>
                        {renderStars(review.stars)}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-300">No reviews yet. Be the first to write one!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">Write a Review</h2>
            <div className="mb-4">
              <label className="text-white block mb-2">Rating:</label>
              {renderStars(userRating)}
            </div>
            <div className="mb-4">
              <label className="text-white block mb-2">Comment:</label>
              <textarea
                className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review here..."
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded w-full sm:w-auto"
                disabled={userRating === 0 || comment.trim() === ''}
              >
                Submit Review
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;