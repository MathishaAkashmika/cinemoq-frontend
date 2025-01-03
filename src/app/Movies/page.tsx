"use client"

import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import MovieCard from "../components/MovieCards";
import Navbar from "../components/Navbar";
import SearchMovie from "../components/SearchMovie";
import { useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "../components/Footer";

const MoviesPage: React.FC = () => {
  const MoviesByCategory = {
    POPULAR: [
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
      { imageUrl: "20.jpg", MovieID: "20", title: "TENET" },
      { imageUrl: "2.jpg", MovieID: "2", title: "HERETIC" },
      { imageUrl: "17.jpg", MovieID: "17", title: "SPLIT" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "8.jpg", MovieID: "8", title: "ARCADIAN" },
      { imageUrl: "4.jpg", MovieID: "4", title: "CONCLAVE" },
    ],
    ACTION: [
      { imageUrl: "17.jpg", MovieID: "17", title: "SPLIT" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "8.jpg", MovieID: "8", title: "ARCADIAN" },
      { imageUrl: "4.jpg", MovieID: "4", title: "CONCLAVE" },
      { imageUrl: "19.jpg", MovieID: "19", title: "ALIEN ROMULUS" },
      { imageUrl: "5.jpg", MovieID: "5", title: "EMILIA PEREZ" },
      { imageUrl: "6.jpg", MovieID: "6", title: "TRAP" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK AWAY" },
    ],
    ADVENTURE: [
      { imageUrl: "19.jpg", MovieID: "19", title: "ALIEN ROMULUS" },
      { imageUrl: "5.jpg", MovieID: "5", title: "EMILIA PEREZ" },
      { imageUrl: "6.jpg", MovieID: "6", title: "TRAP" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
      { imageUrl: "20.jpg", MovieID: "20", title: "TENET" },
      { imageUrl: "2.jpg", MovieID: "2", title: "HERETIC" },
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "22.jpg", MovieID: "22", title: "ABIGAIL" },
    ],
    COMEDY: [
      { imageUrl: "20.jpg", MovieID: "20", title: "TENET" },
      { imageUrl: "2.jpg", MovieID: "2", title: "HERETIC" },
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "22.jpg", MovieID: "22", title: "ABIGAIL" },
      { imageUrl: "8.jpg", MovieID: "8", title: "ARCADIAN" },
      { imageUrl: "4.jpg", MovieID: "4", title: "CONCLAVE" },
      { imageUrl: "19.jpg", MovieID: "19", title: "ALIEN ROMULUS" },
      { imageUrl: "5.jpg", MovieID: "5", title: "EMILIA PEREZ" },
    ],
    FANTASY: [
      { imageUrl: "8.jpg", MovieID: "8", title: "ARCADIAN" },
      { imageUrl: "4.jpg", MovieID: "4", title: "CONCLAVE" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
      { imageUrl: "6.jpg", MovieID: "6", title: "TRAP" },
      { imageUrl: "11.webp", MovieID: "11", title: "WALK ALONE" },
      { imageUrl: "20.jpg", MovieID: "20", title: "TENET" },
      { imageUrl: "2.jpg", MovieID: "2", title: "HERETIC" },
    ],
    SCIENTIFIC_FICTION: [
      { imageUrl: "6.jpg", MovieID: "6", title: "TRAP" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "22.jpg", MovieID: "22", title: "ABIGAIL" },
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "22.jpg", MovieID: "22", title: "ABIGAIL" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
    ],
    CRIME: [
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "9.jpg", MovieID: "9", title: "ROAD HOUSE" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "8.jpg", MovieID: "8", title: "ARCADIAN" },
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "22.jpg", MovieID: "22", title: "ABIGAIL" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
    ],
    HISTORY: [
      { imageUrl: "7.jpg", MovieID: "7", title: "SMILE 2" },
      { imageUrl: "22.jpg", MovieID: "22", title: "ABIGAIL" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
      { imageUrl: "6.jpg", MovieID: "6", title: "TRAP" },
      { imageUrl: "16.webp", MovieID: "16", title: "WALK ALONE" },
      { imageUrl: "20.jpg", MovieID: "20", title: "TENET" },
      { imageUrl: "2.jpg", MovieID: "2", title: "HERETIC" },
    ],
    ROMANTIC: [
      { imageUrl: "18.jpg", MovieID: "18", title: "MEAN GIRL" },
      { imageUrl: "3.jpg", MovieID: "3", title: "ANORA" },
      { imageUrl: "4.jpg", MovieID: "4", title: "CONCLAVE" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "2.jpg", MovieID: "2", title: "HERETIC" },
      { imageUrl: "17.jpg", MovieID: "17", title: "SPLIT" },
      { imageUrl: "15.jpg", MovieID: "15", title: "US" },
      { imageUrl: "8.jpg", MovieID: "8", title: "ARCADIAN" },
    ],
  };

  // For scrolling 
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollLeft = (category: string) => {
    if (categoryRefs.current[category]) {
      const container = categoryRefs.current[category];
      const scrollAmount = container.offsetWidth; 
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  
  const scrollRight = (category: string) => {
    if (categoryRefs.current[category]) {
      const container = categoryRefs.current[category];
      const scrollAmount = container.offsetWidth; 
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <SearchMovie />

      <div className="px-10 py-6">
        {Object.entries(MoviesByCategory).map(([category, movies]) => (
          <section className="mb-12" key={category} id={category}>
            <h2 className="text-2xl font-semibold text-white mb-4 capitalize">
              {category.replace("_", " ")}
            </h2>

            <div className="flex items-center mb-4">
              <button
                onClick={() => scrollLeft(category)}
                className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              >
                &lt;
              </button>
              <div
                ref={(el) => {
                  if (el) categoryRefs.current[category] = el;
                }}
                className="scroll-container flex overflow-x-auto overflow-y-hidden gap-1 pb-4"
                style={{ maxWidth: "100%" }}
              >
                {movies.map((movie, index) => (
                  <div className="card-wrapper" key={`${category}-${movie.MovieID}-${index}`}>
                    <MovieCard
                      imageUrl={movie.imageUrl}
                      MovieID={movie.MovieID}
                      title={movie.title}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollRight(category)}
                className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              >
                &gt;
              </button>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;