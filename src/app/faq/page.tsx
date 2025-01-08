"use client";


import { useState } from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function FAQPage() {

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [emptyCardsCount, setEmptyCardsCount] = useState(4);

  const faqData = [
    {
      question: "What is the difference between a UI and UX Designer?",
      answer: "UI Designers focus on the look and feel of a product, while UX Designers focus on the overall user experience and usability.",
    },
    {
      question: "How to become a UI designer?",
      answer: "To become a UI designer, learn design principles, master tools like Figma or Sketch, and build a portfolio showcasing your work.",
    },
    {
      question: "What is the best UI design tool?",
      answer: "The best UI design tool depends on your needs, but popular options include Figma, Sketch, and Adobe XD.",
    },
    {
      question: "What is the best place to learn Figma?",
      answer: "You can learn Figma on platforms like YouTube, Coursera, or Figma's official documentation and tutorials.",
    },
    
   ...Array(emptyCardsCount).fill({ question: "", answer: "" }),
  ];

  const filteredFaqData = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  
  const addMoreCards = () => {
    setEmptyCardsCount(emptyCardsCount + 4); 
  };

  return (
    <div
      className="min-h-screen px-4"
      style={{
        background: "linear-gradient(142.9deg, rgba(113, 9, 129, 1) 0%, rgba(0, 0, 0, 1) 51.5%)",
      }}
    >
    <div className="text-white flex flex-col items-center py-8">
    <div className="text-center text-[24px] md:text-[24px] font-medium font-calibri mb-8">
        Frequently Asked Questions
    </div>

    <div className="w-full h-6 max-w-xl mx-auto mb-8 relative">
      <input
         type="text"
         placeholder={isSearchFocused ? "" : "Search FAQs..."} 
         value={searchQuery} 
         onChange={(e) => setSearchQuery(e.target.value)} 
         onFocus={() => setIsSearchFocused(true)} 
         onBlur={() => setIsSearchFocused(false)} 
         className="w-full h-6 p-4 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-[12px] md:text-[12px] pl-5 pr-12 hover:bg-white"
          />

          {!isSearchFocused && (
    <div className="absolute top-0 right-0 flex items-center justify-center h-8 pr-4 pointer-events-none">
              <MagnifyingGlassIcon className="h-3 w-3 text-gray-400 hover:text-gray-400" />
    </div>
          )}
    </div>

    <div className="w-full max-w-2xl flex flex-col gap-4 mt-6">
        {filteredFaqData.map((faq, index) => (

    <div
        key={index}
        className="bg-purple-200 text-purple-900 rounded-lg shadow-lg border border-purple-200 overflow-hidden w-full max-w-xl mx-auto hover:bg-purple-300 transition-colors duration-200"
        >
        {faq.question ? (
                <>
 
        <button
            onClick={() => toggleQuestion(index)} 
            className="w-full text-left flex justify-between items-center p-4 text-[14px] md:text-[14px] font-medium hover:bg-purple-300 transition-colors duration-200"
        >
            <span>{faq.question}</span>
            <span
                className="transform transition-transform duration-200"
                style={{
                  transform: openQuestion === index ? "rotate(90deg)" : "rotate(0deg)",
                }}
                >
                  ▶ 
            </span>
              </button>

          {openQuestion === index && (
    <div className="p-2 bg-purple-200 text-purple-800 text-[14px] md:text-[14px]">
          {faq.answer}
    </div>
        )}
      </>
        ) : (
      
    <div
         className="p-4 text-[14px] md:text-[14px] font-medium text-purple-900 h-[50px] flex items-center justify-center w-[100%] mx-auto bg-purple-200 rounded-lg shadow-lg border border-purple-200 hover:bg-purple-300 transition-colors duration-200"
      >
         Add more cards
    </div>
        )}
      </div>
        ))}
    </div>

    <div className="mt-8 flex justify-center">
        <button
           onClick={addMoreCards}
           className="flex items-center justify-center bg-purple-500 text-white p-3 rounded-full shadow-md hover:bg-purple-600 transition-colors duration-200"
        >
        <PlusIcon className="h-5 w-5" />
      <span className="ml-2 text-[14px]">add</span>
         </button>
    </div>
    </div>
    </div>
  );
}
