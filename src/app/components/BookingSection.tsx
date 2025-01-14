import React, { useState, useMemo, useEffect } from 'react'

const BookingSection = ({ title, imdbRating, duration, poster, movieId, setShowtime }: { 
  title: string; 
  imdbRating: string; 
  duration: string; 
  poster: string | null; 
  movieId: string;
  setShowtime: (s: any) => void;
}) => {
  const [showtimes, setShowtimes] = useState<any[]>([]);

  const dates = useMemo<string[]>(() => ([...new Set(showtimes.map(s => {
    const sd = new Date(s.startTime).toDateString();
    return sd;
  }))]), [showtimes]);

  const times = useMemo<string[]>(() => showtimes.map(s => {
    const st = new Date(s.startTime).toTimeString().split(" ")[0];
    return st;
  }), [showtimes]);

  const [chosenDate, setChosenDate] = useState<string>("");
  const [chosenTime, setChosenTime] = useState<string>("");

  useEffect(() => {
    async function f(page: number) {
      const j = await fetch(process.env.NEXT_PUBLIC_API_URL + "/showtimes?movieId=" + movieId + "&page=" + page).then(r => r.json());

      setShowtimes([...showtimes, ...j.docs]);

      if (j.nextPage != null) {
        f(j.nextPage);
      }
    }

    f(1);
  }, []);

  useEffect(() => {
    setChosenDate(dates[0]);
    setChosenTime(times[0]);
  }, [dates, times]);

  useEffect(() => {
    const d = new Date(chosenDate + " " + chosenTime);
    if (isNaN(d.getTime())) {
      setShowtime(null);
    } else {
      setShowtime(showtimes.find(s => new Date(s.startTime).getTime() === d.getTime())?._id)
    }
  }, [chosenDate, chosenTime]);

  return (
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
            <select
              id="data-picker"
              className="mt-2 w-full px-4 py-2 bg-gray-200 text-black rounded-lg"
              value={chosenDate}
              onChange={(e) => setChosenDate(e.currentTarget.value)}
            >
              {dates.map((date: string, i: number) => (
                <option key={i} value={date}>{date}</option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="time-selector" className="block text-lg font-semibold">Time</label>
            <select
              id="time-selector"
              className="mt-2 w-full px-4 py-2 bg-gray-200 text-black rounded-lg"
              value={chosenTime}
              onChange={(e) => setChosenTime(e.currentTarget.value)}
            >
              {times.map((time: string, i: number) => (
                <option key={i} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </section>
  )
};

export default BookingSection;