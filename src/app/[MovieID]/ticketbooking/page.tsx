import Banner from "@/app/components/Banner";
import Footer from "@/app/components/FooterNew";
import MovieDetails from "@/app/components/MovieDetails";
import Navbar from "@/app/components/Navbar";
import TicketBooking from "@/app/components/TicketBooking";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {API_BASE_URL} from "../../config/api";

async function fetchMovie(MovieID: string): Promise<Movie | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${MovieID}`);
    
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

export default async function TicketBookingPage({
  params,
}: {
  params: { MovieID: string };
}) {
  const MovieID = params.MovieID;

  const movie = await fetchMovie(MovieID);

  if (!movie) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-2xl">Movie not found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col">
      <Navbar />
      <div className="relative">
        <Banner title={movie.title} starring={movie.cast} imageUrl={movie.thumbnailImage} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <TicketBooking movie={movie} />
      <Footer />
    </div>
  );
}
