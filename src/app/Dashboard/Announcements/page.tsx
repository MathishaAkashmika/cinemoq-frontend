

"use client";

import Link from "next/link";
import React, { useState } from "react";

interface Announcement {
  id: number;
  title: string;
  description: string;
}

const initialAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "System Maintenance",
    description: "Scheduled maintenance on 10th January from 2 AM to 4 AM.",
  },
  {
    id: 2,
    title: "New Feature Release",
    description: "Introducing real-time notifications starting next week.",
  },
];

const Announcements = () => {
  const [announcements, setAnnouncements] =
    useState<Announcement[]>(initialAnnouncements);

  const handleEdit = (id: number) => {
    alert(`Edit announcement with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setAnnouncements(
      announcements.filter((announcement) => announcement.id !== id)
    );
    alert(`Deleted announcement with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Announcement</h1>
        <Link href="Announcements/Add-announcement">
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md">
        <i className="fa-solid fa-plus"></i>
        <span>Add Announcement</span>
      </button>
    </Link>
      </div>

      {/* Announcements Table */}
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
            {announcements.map((announcement) => (
              <tr
                key={announcement.id}
                className="hover:bg-gray-800 border-b border-gray-600"
              >
                <td className="py-2 px-4">{announcement.title}</td>
                <td className="py-2 px-4 truncate max-w-xs">
                  {announcement.description}
                </td>
                <td className="py-2 px-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleEdit(announcement.id)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(announcement.id)}
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

export default Announcements;
