
import Banner from '@/app/components/Banner';
import BookingSection from '@/app/components/BookingSection';
import BookingSummary from '@/app/components/BookingSummary';
import MovieDetails from '@/app/components/MovieDetails';
import Navbar from '@/app/components/Navbar';
import SeatSelection from '@/app/components/SeatSelection';
import '@fortawesome/fontawesome-free/css/all.min.css';


async function fetchMovie(MovieID: string) {

    const mockMovies = [
        {
            id: "2",
            title: "Heretic",
            imdb: "7.3",
            duration: "2h 30min",
            poster: "/images/2.jpg",
        },
        {
            id: "3",
            title: "Anora",
            imdb: "8.4",
            duration: "2h 30min",
            poster: "/images/3.jpg",
        },
        {
            id: "4",
            title: "Conclave",
            imdb: "7.8",
            duration: "2h 30min",
            poster: "/images/4.jpg",
        },
        {
            id: "5",
            title: "Emilia Perez",
            imdb: "6.9",
            duration: "2h 30min",
            poster: "/images/5.jpg",
        },
        {
            id: "6",
            title: "Trap",
            imdb: "7.0",
            duration: "2h 30min",
            poster: "/images/6.jpg",
        },
        {
            id: "7",
            title: "Smile 2",
            imdb: "6.5",
            duration: "2h 30min",
            poster: "/images/7.jpg",
        },
        {
            id: "8",
            title: "Arcadia",
            imdb: "8.2",
            duration: "2h 30min",
            poster: "/images/8.jpg",
        },
        {
            id: "9",
            title: "Road House",
            imdb: "7.1",
            duration: "2h 30min",
            poster: "/images/9.jpg",
        },
        {
            id: "14",
            title: "Dune",
            imdb: "8.6",
            duration: "2h 30min",
            poster: "/images/14.jpg",
        },
        {
            id: "15",
            title: "US",
            imdb: "7.5",
            duration: "2h 30min",
            poster: "/images/15.jpg",
        },
        {
            id: "16",
            title: "Walk Alone",
            imdb: "7.2",
            duration: "2h 30min",
            poster: "/images/16.webp",
        },
        {
            id: "17",
            title: "Split",
            imdb: "8.0",
            duration: "2h 30min",
            poster: "/images/17.jpg",
        },
        {
            id: "18",
            title: "Mean Girls",
            imdb: "7.0",
            duration: "2h 30min",
            poster: "/images/18.jpg",
        },
        {
            id: "19",
            title: "Alien Romulus",
            imdb: "6.8",
            duration: "2h 30min",
            poster: "/images/19.jpg",
        },
        {
            id: "20",
            title: "Tenet",
            imdb: "8.0",
            duration: "2h 30min",
            poster: "/images/20.jpg",
        },
        {
            id: "21",
            title: "Twisters",
            imdb: "6.7",
            duration: "2h 30min",
            poster: "/images/21.jpg",
        },
        {
            id: "22",
            title: "Abigail",
            imdb: "6.9",
            duration: "2h 30min",
            poster: "/images/22.jpg",
        },
        {
            id: "23",
            title: "Moonlight",
            imdb: "8.0",
            duration: "2h 30min",
            poster: "/images/23.jpg",
        },
        {
            id: "24",
            title: "Pearl",
            imdb: "7.4",
            duration: "2h 30min",
            poster: "/images/24.jpg",
        }
    ];
    const movie = mockMovies.find((movie) => movie.id === MovieID);
    return movie || null;
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
                <Banner title={movie.title} starring={[]} imageUrl={movie.poster} />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <main className="flex flex-col lg:flex-row gap-8 px-8 py-12 text-white">
            <div className="flex-1">
                <div className="h-full flex flex-col">
                    <BookingSection
                        title={movie.title}
                        imdbRating={movie.imdb}
                        duration={movie.duration || "Duration not available"}
                        poster={movie.poster || "/default-poster.png"}
                    />
                    <SeatSelection />
                </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col h-full">
                        <BookingSummary movieTitle={''} date={''} tickets={''} time={''} />
                    </div>

                </div>

            </main>
        </div>
    );

}
