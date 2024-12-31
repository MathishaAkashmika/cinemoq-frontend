import ComingSoon from "./components/ComingSoon";
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
    </div>
  );
}
