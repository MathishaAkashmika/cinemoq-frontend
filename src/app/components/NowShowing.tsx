"use client"

import React from 'react';
import MovieCard from './MovieCards';

const NowShowing = () => {
  const movies = [
    { imageUrl: '2.jpg', MovieID: '2', title: 'HERETIC' },
    { imageUrl: '3.jpg', MovieID: '3', title: 'ANORA' },
    { imageUrl: '4.jpg', MovieID: '4', title: 'CONCLAVE' },
    { imageUrl: '5.jpg', MovieID: '5', title: 'EMILIA PEREZ' },
    { imageUrl: '6.jpg', MovieID: '6', title: 'TRAP' },
    { imageUrl: '7.jpg', MovieID: '7', title: 'SMILE 2' },
    { imageUrl: '8.jpg', MovieID: '8', title: 'ARCADIAN' },
    { imageUrl: '9.jpg', MovieID: '9', title: 'ROAD HOUSE' }, 
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">NOW SHOWING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
        {movies.map((movie) => (
          <MovieCard
            key={movie.MovieID}
            imageUrl={movie.imageUrl}
            MovieID={movie.MovieID}
            title={movie.title}
          />
        ))}
      </div>
    </section>
  );
};

export default NowShowing;
