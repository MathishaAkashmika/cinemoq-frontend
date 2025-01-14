import Link from "next/link";
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { redirect } from 'next/navigation';
import { getUser, getAuthToken } from "../utils/auth";

interface BookingSummaryProps {
  movieTitle: string;
  date: string;
  tickets: string;
  time: string;
  seatPrice?: number; // Make the properties optional
  serviceCharge?: number;
  totalPayment?: number;
  MovieID: string;
  showtime: any;
}

var pendingBookingId = "";

const BookingSummary: React.FC<BookingSummaryProps> = ({
  movieTitle,
  date,
  tickets,
  time,
  seatPrice = 0,
  serviceCharge = 0,
  totalPayment = 0,
  MovieID,
  showtime
}) => {
  const user = getUser()!;
  const token = getAuthToken()!
  const [success, setSuccess] = useState(false);

  if (success) {
    redirect("/MyTickets");
  }
  return (
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
      <div className="mt-4 mb-8">
        <h4 className="text-lg font-bold">Transaction Detail</h4>
        <p className="mb-4">Regular Seat: LKR {seatPrice.toFixed(2)}</p>
        <p className="mb-4">
          Service Charge (6%): LKR {serviceCharge.toFixed(2)}
        </p>
        <p className="font-semibold">
          Total Payment: LKR {totalPayment.toFixed(2)}
        </p>
      </div>

      <PayPalScriptProvider options={{
         "clientId": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
         "enable-funding": "venmo",
         "disable-funding": "",
         "buyer-country": "US",
         currency: "USD",
         "data-page-type": "product-details",
         components: "buttons",
         "data-sdk-integration-source": "developer-studio", 
      }}>
          <PayPalButtons
              style={{
                  shape: "pill",
                  layout: "vertical",
                  color: "white",
                  label: "paypal",
              }} 
              createOrder={async () => {
                const seats = showtime.lockedSeats
                  .filter((s: any) => s.userId === user._id)
                  .map((s: any) => ({ row: s.row, col: s.col }));

                const data = await fetch(
                  process.env.NEXT_PUBLIC_API_URL + "/bookings", 
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + token,
                    },
                    body: JSON.stringify({
                      showtimeId: showtime._id,
                      seats,
                    }),
                }).then((r) => r.json());

                pendingBookingId = data.booking._id;

                return data.order.id;
              }} 
              onApprove={async (_data, actions) => {
                const data = await fetch(
                  process.env.NEXT_PUBLIC_API_URL + "/bookings/confirm/" + pendingBookingId,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + token,
                    },
                    body: JSON.stringify({
                      orderId: _data.orderID,
                    }),
                  }
                ).then((r) => r.json());

                pendingBookingId = "";
                setSuccess(true);
              }} 
          />
      </PayPalScriptProvider> 
    </div>
  )
};

export default BookingSummary;
