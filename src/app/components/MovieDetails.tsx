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
  title: string;
  imdb: string;
  description: string;
  poster: string;
  starring: string[];
  MovieID: string;
}

const MovieDetails: React.FC<MovieDetailsProperties> = ({
  title,
  imdb,
  description,
  poster,
  starring,
  MovieID,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fas fa-star ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => setRating(index + 1)}
          ></i>
        ))}
      </div>
    );
  };

  const handleSubmit = () => {
    if (rating > 0 && comment.trim() !== '') {
      const newReview: Review = {
        name: 'Anonymous',
        profilePicture: '',
        comment: comment,
        stars: 0
      };

      setReviews([...reviews, newReview]);
      setIsModalOpen(false);
      setRating(0);
      setComment('');
    }
  };

  return (
    <section className="px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="w-full md:w-1/3">
          <img src={poster} alt="Movie Poster" className="rounded-lg shadow-lg" />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold">
            {title}{' '}
            <span className="bg-purple-600 px-2 py-1 text-sm rounded ml-4">IMDB {imdb}</span>
          </h2>
          <p className="text-gray-300 mt-6 leading-relaxed">{description}</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-black hover:bg-purple-700 text-white py-2 px-6 rounded flex items-center justify-center w-full md:w-auto">
              <i className="fas fa-play mr-2 w-5 h-4"></i> Watch Trailer
            </button>

            <Link href={`/${MovieID}/ticketbooking`}>
              <button className="bg-black hover:bg-purple-700 text-white px-4 py-2 rounded">
                <i className="fa-solid fa-ticket mr-2 w-5 h-4"></i> Book Tickets
              </button>
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black hover:bg-purple-700 text-white py-2 px-6 rounded flex items-center justify-center w-full md:w-auto"
            >
              <i className="fa-solid fa-pen-nib mr-2 w-5 h-4"></i> Write a Review
            </button>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Reviews</h3>
            <div className="flex flex-wrap space-x-4">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="card-bg text-white rounded-lg shadow-lg p-4 flex flex-col justify-between border border-white"
                  >
                    <h4 className="text-lg font-bold text-purple-400">{review.name}</h4>
                    <div className="flex items-center space-x-2">
                      <img
                        src={review.profilePicture}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      {renderStars(review.stars)}
                    </div>
                    <p className="text-gray-300 mt-2">{review.comment}</p>
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
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold text-white mb-4">Write a Review</h2>
            <div className="mb-4">
              <label className="text-white">Rating:</label>
              {renderStars(rating)}
            </div>
            <div className="mb-4">
              <label className="text-white">Comment:</label>
              <textarea
                className="w-full p-2 mt-2 bg-gray-800 text-white rounded-lg"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded w-full"
              >
                Submit Review
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded w-full"
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
