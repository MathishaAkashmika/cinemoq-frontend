"use client";


import ComingSoon from "./components/ComingSoon";
import Footer from "./components/FooterNew";
import MoviesPage from "./Movies/page";

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-purple-800 via-black to-black min-h-screen">
     
      <MoviesPage />
      <ComingSoon />
      <Footer />
    </div>
  );
}
