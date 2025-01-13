"use client";

import React, { useState } from "react";

interface Ticket {
  id: number;
  userDP: string; 
  userName: string;
  movieTitle: string;
  date: string;
  seats: string;
  time: string;
  paymentCode: string;
}

const initialTickets: Ticket[] = [
  {
    id: 1,
    userDP: "/images/user1.jpg", 
    userName: "John Doe",
    movieTitle: "Inception",
    date: "2025-01-14",
    seats: "A1, A2",
    time: "7:00 PM",
    paymentCode: "PAY12345",
  },
  {
    id: 2,
    userDP: "/images/user2.jpg",
    userName: "Jane Smith",
    movieTitle: "The Matrix",
    date: "2025-01-14",
    seats: "B3, B4",
    time: "9:00 PM",
    paymentCode: "PAY67890",
  },
  {
    id: 3,
    userDP: "/images/user3.jpg",
    userName: "Alice Johnson",
    movieTitle: "Interstellar",
    date: "2025-01-15",
    seats: "C1, C2, C3",
    time: "6:30 PM",
    paymentCode: "PAY54321",
  },
];

const Tickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  const handleDelete = (id: number) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
    alert(`Deleted ticket with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Tickets</h1>

      {/* Tickets Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-900 text-left text-sm font-semibold">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Movie Title</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Seats</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Payment Code</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="hover:bg-gray-800 border-b border-gray-600"
              >
                <td className="py-2 px-4 flex items-center gap-4">
                  <img
                    src={ticket.userDP}
                    alt={ticket.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  {ticket.userName}
                </td>
                <td className="py-2 px-4">{ticket.movieTitle}</td>
                <td className="py-2 px-4">{ticket.date}</td>
                <td className="py-2 px-4">{ticket.seats}</td>
                <td className="py-2 px-4">{ticket.time}</td>
                <td className="py-2 px-4">{ticket.paymentCode}</td>
                <td className="py-2 px-4 flex justify-center">
                  <button
                    onClick={() => handleDelete(ticket.id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
