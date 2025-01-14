// page.tsx
import Banner from "../components/Banner";
import Footer from "../components/FooterNew";
import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Movie {
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

async function fetchMovie(MovieID: string): Promise<Movie | null> {
  try {
    const response = await fetch(`http://localhost:8080/v1/movie/${MovieID}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch movie: ${response.statusText}`);
    }
    
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
}

export default async function MovieDetailPage({ params }: { params: { MovieID: string } }) {
  const { MovieID } = params;
  
  let movie;
  let error = null;
  
  try {
    movie = await fetchMovie(MovieID);
  } catch (err) {
    error = err instanceof Error ? err.message : 'An error occurred while fetching the movie';
  }

  if (error) {
    return (
      <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Not Found</h2>
          <p>Movie not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col">
      <Navbar />
      <Banner title={movie.name} starring={movie.cast} imageUrl={movie.thumbnailImage} />
      <MovieDetails
        _id={MovieID}
        name={movie.name}
        description={movie.description}
        thumbnailImage={movie.thumbnailImage}
        heroImage={movie.heroImage}
        price={movie.price}
        genre={movie.genre}
        director={movie.director}
        releaseDate={movie.releaseDate}
        rating={movie.rating}
        cast={movie.cast}
        durationMinutes={movie.durationMinutes}
      />
      <Footer />
    </div>
  );
}