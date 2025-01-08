"use client";

import Link from "next/link";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NowShowing from "./components/NowShowing";

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-purple-800 via-black to-black min-h-screen">
      <Navbar />
      <HeroSection />
      <NowShowing />
      <ComingSoon />
      <Footer />
    </div>
  );
}
