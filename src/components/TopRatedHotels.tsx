"use client";

import { link } from 'fs';
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TopRatedHotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Sunset Paradise",
      description: "Experience the best sunset views by the beach.",
      price: "$120.00 / night",
      image: "/images/hotel1.jpg", // Replace with actual image paths
      link: "https://example.com/booking/sunset-paradise", // Unique booking link
    },
    {
      id: 2,
      name: "Mountain Retreat",
      description: "A peaceful retreat in the mountains.",
      price: "$150.00 / night",
      image: "/images/hotel2.jpg",
      link: "https://example.com/booking/mountain-retreat", // Unique booking link
    },
    {
      id: 3,
      name: "City Lights",
      description: "Enjoy the vibrant city life and night lights.",
      price: "$180.00 / night",
      image: "/images/hotel3.jpg",
      link: "https://example.com/booking/city-lights", // Unique booking link
    },
    {
      id: 4,
      name: "Lakeside Inn",
      description: "Relax by the serene lake and unwind.",
      price: "$110.00 / night",
      image: "/images/hotel4.jpg",
      link: "https://example.com/booking/lakeside-inn", // Unique booking link
    },
    {
      id: 5,
      name: "Desert Oasis",
      description: "An oasis of luxury in the middle of the desert.",
      price: "$200.00 / night",
      image: "/images/hotel5.jpg",
      link: "https://example.com/booking/desert-oasis", // Unique booking link
    },
    {
      id: 6,
      name: "Seaside Escape",
      description: "A luxury escape near the soothing waves.",
      price: "$250.00 / night",
      image: "/images/hotel6.jpg",
      link: "https://example.com/booking/seaside-escape", // Unique booking link
    },
    // Add more hotels as needed
  ];

  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = 300;
      const newPosition =
        direction === 'left'
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };



  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">
        Top Rated <span className="text-blue-500">Hotels</span>
      </h2>
      <div className="relative">
        {/* Scrollable content */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden space-x-4 scrollbar-hide"
        >
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg p-4 w-64 flex-shrink-0">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-2">
                <h3 className="font-bold text-lg">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.description}</p>
                <p className="text-blue-500 font-bold mt-1">{hotel.price}</p>
                <a
                  href={hotel.link}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded inline-block cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
          <button
            onClick={() => handleScroll('left')}
            className="p-2 bg-gray-300 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 bg-gray-300 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopRatedHotels;
