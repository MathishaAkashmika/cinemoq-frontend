import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

type MovieCardProperties = {
  imageUrl: string;
  MovieID: string;
  title: string;
};

const MovieCard: React.FC<MovieCardProperties> = ({ imageUrl, MovieID, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-900 rounded overflow-hidden w-[200px] h-[300px] sm:w-[300px] sm:h-[400px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/${MovieID}`}>
        <Image
          src={`/images/${imageUrl}`}
          alt={title}
          className="object-cover w-full h-full transition-all duration-300"
          width={200}
          height={300}
        />
      </Link>

      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex justify-center items-center">
          <div className="text-center text-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <button className="bg-purple-600 hover:bg-gray-700 text-white py-2 px-4 rounded w-full">
              <i className="fas fa-play mr-2 w-5 h-4"></i>
                Watch Trailer
              </button>
              <Link href={`/${MovieID}`}>
                <button className="bg-purple-600 hover:bg-gray-700 text-white py-2 px-4 rounded w-full">
                <i className="fa-solid fa-circle-info mr-2 w-5 h-4"></i>
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
