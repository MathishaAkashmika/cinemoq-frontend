import React from 'react'

const BookingSection = ({ title, imdbRating, duration, poster }: { 
  title: string; 
  imdbRating: string; 
  duration: string; 
  poster: string | null; 
}) => (
  <section className="px-8 py-12">
    <div className="flex flex-col md:flex-row items-start md:space-x-8">
      <div className="w-[400px] md:w-1/3">
      {poster ? (
          <img src={poster} alt={`${title} Poster`} className="rounded-lg shadow-lg" />
        ) : (
          <div className="w-full h-[700px] flex items-center justify-center bg-gray-700 rounded-lg">
            <p className="text-gray-400">Poster Not Available</p>
          </div>
        )}
      </div>
      
      <div className="w-full md:w-2/3">
  <h2 className="text-4xl font-bold">
    {title} <span className="bg-purple-600 px-2 py-1 text-sm rounded ml-4">IMDB {imdbRating}</span>
  </h2>
  <p className="text-gray-300 mt-2">{duration}</p>
  
  <div className="mt-6">
    <label htmlFor="date-picker" className="block text-lg font-semibold">Date</label>
    <input
      id="date-picker"
      type="text"
      className="mt-2 w-full px-4 py-2 bg-gray-200 text-black rounded-lg lowercase"
      placeholder="Select a date"
    />
  </div>
  
  <div className="mt-6">
    <label htmlFor="time-selector" className="block text-lg font-semibold">Time</label>
    <select
      id="time-selector"
      className="mt-2 w-full px-4 py-2 bg-gray-200 text-black rounded-lg lowercase"
    >
      <option>9:30 AM</option>
      <option>12:00 PM</option>
      <option>3:30 PM</option>
      <option>6:00 PM</option>
      <option>8:30 PM</option>
    </select>
  </div>
</div>

    </div>
  </section>
);

export default BookingSection;