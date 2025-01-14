"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterNew";
import { API_ENDPOINTS } from "../config/api";
import { Career, CareersResponse } from "../types/careers";

const Careers = () => {
  const [careersData, setCareersData] = useState<CareersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.careers);
        if (!response.ok) {
          throw new Error('Failed to fetch careers');
        }
        const data: CareersResponse = await response.json();
        setCareersData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#710981] via-[#000000] to-[#000000] flex flex-col items-center justify-start text-white">
        <div className="text-center mt-10">
          <h1 className="text-[26px] font-medium">CAREERS</h1>
          <p className="text-[14px] font-normal mt-4 px-6 md:px-12 lg:px-24 leading-[1.8] max-w-4xl text-left">
            Cinemoq Cinemas is set to give Sri Lanka its first-ever international
            standard cinema multiplex at Colombo City Centre in 2018. Dedicated
            towards raising the bar in Sri Lanka's cinema experience, our aim is
            to provide Sri Lankans with all the flare of old-school movie
            theatres, coupled with state-of-the-art modernity and comfort
            consistent with international standards. From the box office toppers
            that will be airing throughout the year, to the handpicked F&B brands
            right down to the uber comfy seating – Cinemoq Cinemas is
            fast-tracking the future of Sri Lanka's cinema sphere. And you have an
            opportunity to be a part of that change.
          </p>
        </div>

        <div className="bg-gray-700 bg-opacity-30 mt-10 py-4 px-6 w-[90%] max-w-3xl rounded-lg text-center">
          <h2 className="text-[18px] font-medium mb-6">Current Vacancies</h2>
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          )}
          {error && (
            <div className="text-red-500 py-4">
              {error}
            </div>
          )}
          {!loading && !error && careersData?.docs.length === 0 && (
            <div className="text-gray-400 py-4">
              No vacancies available at the moment.
            </div>
          )}
          <div className="flex flex-col gap-6">
            {careersData?.docs.map((career) => (
              <div key={career._id} className="bg-black bg-opacity-50 p-6 rounded-lg text-left">
                <h3 className="text-xl font-medium text-purple-400 mb-2">{career.name}</h3>
                <p className="text-gray-300 text-sm">{career.description}</p>
                {career.requirements && career.requirements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-purple-300 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                      {career.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;