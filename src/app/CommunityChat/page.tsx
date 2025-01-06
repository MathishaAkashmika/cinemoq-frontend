"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

const CommunityChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, ultrices quis ultricies sit amet, sagittis in elit.",
      sender: "left",
      avatar: "/images/avatars/avt_1.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sender: "left",
      avatar: "/images/avatars/avt_2.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor",
      sender: "left",
      avatar: "/images/avatars/avt_3.png",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, ultrices quis ultricies sit amet, sagittis in elit.",
      sender: "left",
      avatar: "/images/avatars/avt_1.png",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor",
      sender: "right",
      avatar: "/images/avatars/avt_4.png",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: input,
          sender: "right",
          avatar: "/images/avatars/avt_4.png",
        },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-br from-purple-800 to-black flex items-center justify-center">
        <div className="w-[800px] h-[600px] bg-gray-800 rounded-lg shadow-md flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-gray-700 to-gray-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start ${
                  msg.sender === "right" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "left" && (
                  <img
                    src={msg.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div
                  className={`p-3 rounded-lg shadow-md ${
                    msg.sender === "right"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "right" && (
                  <img
                    src={msg.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full ml-3"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex p-4 border-t border-gray-700 bg-white">
            <input
              type="text"
              placeholder="Type here.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 px-6 text-white rounded-r-md hover:bg-purple-700"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityChat;
