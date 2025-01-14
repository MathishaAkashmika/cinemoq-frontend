"use client"

import React, { useState, useEffect } from "react";
import Footer from '../components/FooterNew';
import Navbar from '../components/Navbar';
import TicketCard from '../components/TicketCard';
import { getUser, getAuthToken } from "../utils/auth";
import {isAuthenticated} from "../utils/auth";

const MyTickets = () => {
  const user = getUser()!;
  const token = getAuthToken()!;

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/bookings", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    })
    .then(r => r.json())
    .then(v => {
      return Promise.all(v.docs.map(async t => ({...t, showtime: await fetch(process.env.NEXT_PUBLIC_API_URL + "/showtimes/" + t.showtimeId).then(r => r.json())})))
    }).then(t => {
      return Promise.all(t.map(async t => ({...t, movie: await fetch(process.env.NEXT_PUBLIC_API_URL + "/movie/" + t.showtime.movieId).then(r => r.json())})))
    }).then(ts => {
      console.log(ts);
      setTickets(ts);
    });
  }, [])

  return (
    <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col">
      <Navbar />
      <div className="px-4 py-6 md:px-8 md:py-10">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">MY TICKETS</h1>
        <div className="space-y-8 md:space-y-10">
          {tickets.map((ticket, index) => (
            <TicketCard
              key={index}
              date={new Date(ticket.showtime.startTime).toLocaleDateString()}
              title={ticket.movie.name}
              tickets={ticket.seats.length}
              time={new Date(ticket.showtime.startTime).toLocaleTimeString()}
              movieImage={ticket.movie.thumbnailImage}
              qrImage={ticket.s3Url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyTickets;
