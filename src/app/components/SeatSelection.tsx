import React from 'react'

const SeatSelection = () => (
  <div className="bg-transparent p-6 rounded-lg">
    <h3 className="text-2xl font-bold">SEAT SELECTION</h3>
    <div className="mt-6 grid grid-cols-10 gap-2">
      <div className="col-span-10 text-center text-sm font-bold">SCREEN</div>
      {[...Array(50)].map((_, index) => (
        <button
  key={index}
  className="w-10 h-10 bg-white hover:bg-purple-600 rounded flex items-center justify-center text-black text-sm font-bold"
>
  {`S${index + 1}`}
</button>

      
      ))}

    </div>
  </div>
);

export default SeatSelection;
