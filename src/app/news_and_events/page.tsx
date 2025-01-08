import React from "react";

export default function NewsAndEvents() {
  return (
    <div className="bg-gradient-to-r from-[#710981] to-black relative overflow-hidden min-h-screen">
    
    <div className="text-center text-white py-8 text-3xl md:text-4xl font-medium transition-colors duration-300 hover:text-[#FF00FF]">
       NEWS AND EVENTS
    </div>

    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
       <img className="w-full h-auto rounded-lg" src="/images/4.jpg" alt="Image 1"/>
    </div>

    <div className="w-full md:w-1/2 text-white text-medium md:text-sm">
        <h2 className="text-20 md:text-20 mb-4 text-[#FFFFFF] hover:text-[#FF00FF] transition-colors duration-300">
           WHAT ARE CINEMOQ EVENTS?
        </h2>
        <p>
          This is the ultimate luxury cinema experience. Elegance of fully
          licensed lounge bar with a menu with a selection of delicious food
          and in-cinema service with a state-of-art blockbuster movie
          experience that has to be seen to be believed.
        </p>
    </div>

    </div>

    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="w-full md:w-1/2 text-white text-medium md:text-sm">
      <h2 className="text-20 md:text-20 mb-4 text-[#FFFFFF] hover:text-[#FF00FF] transition-colors duration-300">
        EVENT OFFERS
      </h2>
      <p>
          Seating experience. Sounds screen etc. Pre-movie drink at the
          lounge. Comfortable and luxurious seating area. Use of the lounge
          bar for your needs. Variety of catering options for all groups of
          all sizes. Meetings/cocktails can be arranged upon request.
          Decorations can be done accordingly (depends on the group.) RnR
          activity.
      </p>
    </div>
    <div className="w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
        <img className="w-full h-auto rounded-lg" src="/images/2.jpg" alt="Image 2" />
    </div>
    </div>

    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
        <img className="w-full h-auto rounded-lg" src="/images/3.jpg" alt="Image 3" />
    </div>
    <div className="w-full md:w-1/2 text-white text-medium md:text-sm">
        <h2 className="text-20 md:text-20 mb-4 text-[#FFFFFF] hover:text-[#FF00FF] transition-colors duration-300">
           PRIVATE BOOKINGS AT CINEMOQ
        </h2>
        <p>
          Looking for the perfect venue in the heart of the city for a
          corporate function or a private gathering? Everyone loves movies,
          and not every day you get treated with the ultimate cinema
          experience. A cinema experience of the next level to your guests,
          staff or directors from overseas, clients or VIP clients, or anyone
          you wish to treat to the ultimate cinema experience. Example –
          Axiata board at Iconic.
        </p>
    </div>
    </div>
    </div>
  );
}
