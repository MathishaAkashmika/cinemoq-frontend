import React, { useEffect } from 'react'
import { getUser, getAuthToken } from "../utils/auth";

const SeatSelection = ({ showtime, refreshShowTimeData }: any) => {
  const user = getUser()!;
  const token = getAuthToken()!;

  console.log(user);

  function selectSeat(row: number, col: number) {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/showtimes/lock/" + showtime._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({
        row,
        col
      })
    })
      .then(r => r.text())
      .then(v => {
        if (v === "true") {
          refreshShowTimeData();
        }
      });
  }

  function unselectSeat(row: number, col: number) {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/showtimes/unlock/" + showtime._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({
        row,
        col
      })
    })
      .then(r => r.text())
      .then(v => {
        if (v === "true") {
          refreshShowTimeData();
        }
      });

  }

  return (
    <div className="bg-transparent p-6 rounded-lg">
      <h3 className="text-2xl font-bold">SEAT SELECTION</h3>
      <div className="grid mt-6 gap-2" style={{ gridTemplateColumns: `repeat(${showtime.seatLayout.cols}, 1fr)`, gridTemplateRows: `repeat(${showtime.seatLayout.rows}, 1fr)` }}>
        <div className="text-center text-sm font-bold" style={{ gridColumn: `${showtime.seatLayout.cols} span / ${showtime.seatLayout.cols} span` }}>SCREEN</div>
        {[...Array(showtime.totalSeats)].map((_, index) => {
          const row = Math.floor(index / showtime.seatLayout.rows);
          const col = index % showtime.seatLayout.rows;

          const lockedRow = showtime.lockedSeats.find((s: any) => s.row === row && s.col === col);

          const locked = lockedRow != null && lockedRow.userId === user._id;
          const unselectable = showtime.bookedSeats.find((s: any) => s.row === row && s.col === col) != null ||
                                (lockedRow != null && lockedRow.userId !== user._id);

          return (<button
            key={index}
            className="w-10 h-10 bg-white hover:bg-purple-600 data-[locked=true]:bg-purple-600 data-[unselectable=true]:bg-red-600  rounded flex items-center justify-center text-black text-sm font-bold"
            data-locked={locked}
            data-unselectable={unselectable}
            data-row={row}
            data-col={col}
            onClick={() => unselectable ? null : locked ? unselectSeat(row, col) : selectSeat(row, col)}
          >
            {`S${index + 1}`}
          </button>)
        })}
      </div>
    </div>
  )
};

export default SeatSelection;
