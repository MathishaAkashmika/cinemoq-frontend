"use client"

import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import MovieCard from "../components/MovieCards";
import Navbar from "../components/Navbar";
import SearchMovie from "../components/SearchMovie";
import { useState, useEffect } from "react";
import { fetchMovies, Movie } from "../config/api";
import { API_ERROR_MESSAGES } from "../config/api";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "../components/FooterNew";

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetchMovies({ limit: 50 });
        console.log('API Response:', response);
        
        if (response.docs) {
          setMovies(response.docs);
          console.log('Setting movies:', response.docs);
        } else {
          console.error('No docs in response:', response);
          setError('No data available');
        }
      } catch (err) {
        console.error('Error loading movies:', err);
        setError(err instanceof Error ? err.message : API_ERROR_MESSAGES.SERVER_ERROR);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <Categories />
      <SearchMovie />

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <div className="text-white text-center py-10">Loading movies...</div>
        ) : error ? (
          <div className="text-red-500 text-center py-10">{error}</div>
        ) : movies.length === 0 ? (
          <div className="text-white text-center py-10">No movies found</div>
        ) : (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">All Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {movies.map((movie) => (
                <div key={movie._id} className="flex justify-center">
                  <MovieCard
                    thumbnailImage={movie.thumbnailImage}
                    _id={movie._id}
                    name={movie.name}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;