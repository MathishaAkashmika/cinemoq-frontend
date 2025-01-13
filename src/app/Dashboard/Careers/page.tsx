"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Career {
  id: number;
  title: string;
  description: string;
}

const initialCareers: Career[] = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Responsible for developing and maintaining web applications.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Design user interfaces and experiences for web platforms.",
  },
  {
    id: 3,
    title: "Project Manager",
    description: "Manage project timelines and deliverables.",
  },
];

const Careers = () => {
  const [careers, setCareers] = useState<Career[]>(initialCareers);

  const handleView = (id: number) => {
    alert(`View details of career ID: ${id}`);
  };

  const handleEdit = (id: number) => {
    alert(`Edit career with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setCareers(careers.filter((career) => career.id !== id));
    alert(`Deleted career with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header with Add Career Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Careers</h1>
        <Link href="Careers/Add-careers">
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md">
            <i className="fa-solid fa-plus"></i>
            <span>Add Career</span>
          </button>
        </Link>
      </div>

      {/* Careers Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-900 text-left text-sm font-semibold">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career) => (
              <tr
                key={career.id}
                className="hover:bg-gray-800 border-b border-gray-600"
              >
                <td className="py-2 px-4">{career.title}</td>
                <td className="py-2 px-4 truncate">{career.description}</td>
                <td className="py-2 px-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleView(career.id)}
                    className="text-purple-400 hover:text-purple-500"
                  >
                    VIEW
                  </button>
                  <button
                    onClick={() => handleEdit(career.id)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(career.id)}
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

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
          SAVE
        </button>
        <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Careers;
