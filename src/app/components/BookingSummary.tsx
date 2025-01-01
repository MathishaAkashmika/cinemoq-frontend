import Link from "next/link";
import React from "react";

interface BookingSummaryProps {
  movieTitle: string;
  date: string;
  tickets: string;
  time: string;
  seatPrice?: number; // Make the properties optional
  serviceCharge?: number;
  totalPayment?: number;
  MovieID: string;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  movieTitle,
  date,
  tickets,
  time,
  seatPrice = 0,
  serviceCharge = 0,
  totalPayment = 0,
  MovieID,
}) => (
  <div className="bg-gray-800 p-6 rounded-lg min-h-[700px] flex flex-col justify-center">
    <h3 className="text-2xl font-bold text-center">BOOKING SUMMARY</h3>
    <div className="mt-4">
      <p className="mb-4">
        <span className="font-semibold">MOVIE TITLE:</span> {movieTitle}
      </p>
      <p className="mb-4">
        <span className="font-semibold">DATE:</span> {date}
      </p>
      <p className="mb-4">
        <span className="font-semibold">TICKETS:</span> {tickets}
      </p>
      <p className="mb-4">
        <span className="font-semibold">HOURS:</span> {time}
      </p>
    </div>
    <div className="mt-4">
      <h4 className="text-lg font-bold">Transaction Detail</h4>
      <p className="mb-4">Regular Seat: LKR {seatPrice.toFixed(2)} x3</p>
      <p className="mb-4">
        Service Charge (6%): LKR {serviceCharge.toFixed(2)} x3
      </p>
      <p className="font-semibold">
        Total Payment: LKR {totalPayment.toFixed(2)}
      </p>
    </div>

    <Link href={`/${MovieID}/checkout`}>
      <button className="bg-purple-600 hover:bg-gray-400 text-white py-2 px-4 rounded w-full">
        C H E C K O U T
      </button>
    </Link>
  </div>
);

export default BookingSummary;
