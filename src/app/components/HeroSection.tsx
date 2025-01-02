"use client";

import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/images/12.jpg",
      title: "Tranquility of Blood",
      description:
        "Tranquility of Blood is a captivating journey into the depths of human emotion. It explores the delicate balance between inner peace and turmoil, leading to great reflections and life-changing decisions. Witness the poignant tale of courage and redemption.",
    },
    {
      src: "/images/1.jpeg",
      title: "Journey of Emotion",
      description:
        "The Journey Ahead is a thrilling saga of adventure and self-discovery. It captures the essence of resilience as protagonists navigate through uncharted territories, facing challenges and seizing opportunities that define their destiny.",
    },
    {
      src: "/images/n1.jpg",
      title: "Conflict and Resolution",
      description:
        "An intense exploration of conflict and resolution in the world of cinema. Beyond the Horizon takes you on an exhilarating expedition beyond the known. Experience the wonders of unexplored realms, where imagination knows no bounds, and the spirit of adventure thrives endlessly.",
    },
    {
      src: "/images/13.jpg",
      title: "Heart-Wrenching Choices",
      description:
        "A gripping tale of survival, suspense, and heart-wrenching choices. Beyond the Horizon takes you on an exhilarating expedition beyond the known. Experience the wonders of unexplored realms, where imagination knows no bounds, and the spirit of adventure thrives endlessly.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="text-left py-24 bg-cover bg-center relative h-[500px] md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: `url('${images[currentImageIndex].src}')`,
        maxWidth: "100%",
      }}
    >
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      <div className="absolute bottom-8 left-8 right-8 md:bottom-16 md:left-16 lg:left-24 text-left z-10 max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          {images[currentImageIndex].title}
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-8 text-white">
          {images[currentImageIndex].description}
        </p>
        <div>
          <button className="bg-purple-600 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm md:text-base lg:text-lg">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
