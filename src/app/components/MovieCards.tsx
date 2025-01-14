import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

type MovieCardProperties = {
  thumbnailImage: string;
  _id: string;
  name: string;
};

const MovieCard: React.FC<MovieCardProperties> = ({ thumbnailImage, _id, name }) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Use a placeholder if the image fails to load or is invalid
  const imageSrc = imageError ? "/api/placeholder/300/400" : thumbnailImage;

  return (
    <div
      className="relative bg-gray-900 rounded-lg overflow-hidden w-full aspect-[2/3] max-w-[220px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/${_id}`}>
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={name}
            className="object-cover transition-all duration-300"
            fill
            sizes="(max-width: 640px) 160px, 220px"
            onError={() => setImageError(true)}
            priority={false}
          />
        </div>
      </Link>

      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="text-center text-white p-4">
            <h3 className="text-base font-bold mb-2 line-clamp-2">{name}</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-1.5 px-3 rounded text-sm w-full transition-colors duration-200">
                <i className="fas fa-play mr-2"></i>
                Watch Trailer
              </button>
              <Link href={`/${_id}`} className="w-full">
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-1.5 px-3 rounded text-sm w-full transition-colors duration-200">
                  <i className="fa-solid fa-circle-info mr-2"></i>
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