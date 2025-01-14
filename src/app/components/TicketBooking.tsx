"use client"

import SeatSelection from "@/app/components/SeatSelection";
import BookingSection from "@/app/components/BookingSection";
import BookingSummary from "@/app/components/BookingSummary";

import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { getUser, getAuthToken } from "../utils/auth";
import {isAuthenticated} from "../utils/auth";

const TicketBooking = ({movie}: {movie:any})  => {
    const user = getUser()!;
    const token = getAuthToken()!;

    const [showtime, setShowtime] = useState<any>(null);
    const [showtimeData, setShowtimeData] = useState<any>(null);

    function refreshShowTimeData() {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/showtimes/" + showtime)
        .then(r => r.json())
        .then(v => {
            setShowtimeData(v);
        });
    }

    useEffect(() => {
        if (showtime != null) refreshShowTimeData();
    }, [showtime])

    useEffect(() => {
      if (!isAuthenticated()) {
        redirect("/Login");
      }
    }, [])

    return (
      <main className="flex flex-col lg:flex-row gap-8 px-8 py-12 text-white">
        <div className="flex-1">
          <div className="h-full flex flex-col">
            <BookingSection
              title={movie.name}
              imdbRating={movie.rating}
              duration={movie.durationMinutes + " minutes" || "Duration not available"}
              poster={movie.thumbnailImage || "/default-poster.png"}
			  movieId={movie._id}
			  setShowtime={setShowtime}
            />
			{showtimeData != null && <SeatSelection showtime={showtimeData} refreshShowTimeData={refreshShowTimeData} />}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full">
            {
                showtimeData != null &&
                showtimeData.lockedSeats.some((s) => s.userId == user._id) &&
                <BookingSummary
                    movieTitle={movie.name}
                    date={new Date(showtimeData.startTime).toLocaleDateString()}
                    tickets={showtimeData.lockedSeats.length}
                    time={`${new Date(showtimeData.startTime).toLocaleTimeString()} to ${new Date(showtimeData.endTime).toLocaleTimeString()}`}
                    MovieID={movie._id}
                    showtime={showtimeData}
                    seatPrice={showtimeData.price * showtimeData.lockedSeats.length}
                    serviceCharge={(showtimeData.price * showtimeData.lockedSeats.length) * 0.1}
                    totalPayment={(showtimeData.price * showtimeData.lockedSeats.length) * 1.1}
                />
            }
          </div>
        </div>
      </main>
    );
}

export default TicketBooking;