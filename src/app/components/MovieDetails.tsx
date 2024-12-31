"use client"

import Link from 'next/link';

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
  MovieID
}) => {
  

  return (
    <section className="px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="w-full md:w-1/3">
          <img src={poster} alt="Movie Poster" className="rounded-lg shadow-lg" />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold">
            {title}{' '}
            <span className="bg-purple-600 px-2 py-1 text-sm rounded ml-4">
              IMDB {imdb}
            </span>
          </h2>
          <p className="text-gray-300 mt-6 leading-relaxed">{description}</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-black hover:bg-purple-700 text-white py-2 px-6 rounded flex items-center justify-center w-full md:w-auto">
              <i className="fas fa-play mr-2 w-5 h-4"></i>
              Watch Trailer
            </button>

            <Link href={`/${MovieID}/ticketbooking`}>
              <button className="bg-black hover:bg-purple-700 text-white px-4 py-2 rounded">
              <i className="fa-solid fa-ticket mr-2 w-5 h-4"></i>
                Book Tickets
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
