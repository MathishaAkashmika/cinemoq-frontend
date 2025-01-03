"use client";

import Link from "next/link";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NowShowing from "./components/NowShowing";

export default function Home() {
  const handleChatClick = () => {
    alert("Chat functionality coming soon!");
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 via-black to-black min-h-screen">
      <Navbar />
      <HeroSection />
      <NowShowing />
      <ComingSoon />
<<<<<<< HEAD
      <Footer />
=======
      <Link
        href={"/CommunityChat"}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <i className="fa-solid fa-comments text-2xl"></i>
      </Link>
>>>>>>> d5fe0a2a7bd906f9cdb348e8faaf96fec9c69a27
    </div>
  );
}
