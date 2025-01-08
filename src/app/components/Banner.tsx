import React from 'react'

interface BannerProperties {
    title: string;
    starring: string[];
    imageUrl: string;
  }
  
  const Banner: React.FC<BannerProperties> = ({ title, starring, imageUrl }) => {
    return (
      <section className="relative h-[80vh] flex items-center justify-center">
        <img src={imageUrl} alt="Movie Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-wide">{title}</h1>
          <p className="text-lg mt-4">{starring}</p>
        </div>
      </section>
    );
  };
  
  export default Banner;
  

