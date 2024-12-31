"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";


const SearchMovie = () => {
  const [input, setInput] = useState(""); 
  const router = useRouter();

  const HandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?movie=${input}`);
    setInput(""); // Reset input field after search
  };
      
      return (
        <div className="flex justify-center items-center mt-6">
          <form onSubmit={HandleSearch} className="flex w-full max-w-md">
            <input type="text" placeholder="Search movies..." value={input} onChange={(e) => setInput(e.target.value)} 
            className="flex-grow px-4 py-2 rounded-l bg-gray-800 text-white placeholder-gray-500 focus:outline-none"/>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-r hover:bg-purple-700 focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
      );

  };
  export default SearchMovie;