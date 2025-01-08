import React from 'react';

type Movie = {
  imageUrl: string;
  MovieID: string;
  title: string;
};

const ComingSoon: React.FC = () => {
  const comingSoonMovies: Movie[] = [
    { imageUrl: '11.jpeg', MovieID: '11', title: '1917' },
    { imageUrl: '10.jpg', MovieID: '10', title: 'Looper' },
    { imageUrl: '12.jpg', MovieID: '12', title: 'Tranqility of Blood' },
    { imageUrl: '13.jpg', MovieID: '13', title: 'Dune' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">COMING SOON</h2>
      <div className="grid grid-cols-2 gap-2 px-16">
        {comingSoonMovies.map((movie) => (
          <div
            key={movie.MovieID}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={`/images/${movie.imageUrl}`}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-3">
              <h3 className="text-white text-xl font-semibold">{movie.title}</h3>
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-900 transition-colors">
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
