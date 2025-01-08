import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#710981] via-[#000000] to-[#000000] flex flex-col items-center justify-start text-white">
     
    <div className="text-center mt-10">
      <h1 className="text-[22px] font-medium">CAREERS</h1>
      <p className="text-[14px] font-normal mt-4 px-6 md:px-12 lg:px-24 leading-[1.8] max-w-4xl text-left">
         Cinemoq Cinemas is set to give Sri Lanka its first-ever international
         standard cinema multiplex at Colombo City Centre in 2018. Dedicated
         towards raising the bar in Sri Lanka’s cinema experience, our aim is
         to provide Sri Lankans with all the flare of old-school movie
         theatres, coupled with state-of-the-art modernity and comfort
         consistent with international standards. From the box office toppers
         that will be airing throughout the year, to the handpicked F&B brands
         right down to the uber comfy seating – Cinemoq Cinemas is
         fast-tracking the future of Sri Lanka’s cinema sphere. And you have an
         opportunity to be a part of that change.
      </p>
    </div>

    <div className="bg-gray-700 bg-opacity-30 mt-10 py-4 px-6 w-[90%] max-w-3xl rounded-lg text-center">
      <h2 className="text-[18px] font-medium mb-6">Current Vacancies</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    
    <div className="relative w-[300px] h-[400px]">
        <img src="/images/5.jpg" alt="Vacancy 1" className="rounded-lg bg-transparent" />
    </div>

    <div className="relative w-[300px] h-[400px]">
        <img src="/images/6.jpg" alt="Vacancy 2" className="rounded-lg bg-transparent" />
    </div>

    </div>
    </div>
    </div>
  );
};

export default Careers;
