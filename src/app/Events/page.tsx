"use client"; // Add this line at the top

import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import Navbar from '../../components/navbar'; 
import { FaChevronLeft, FaChevronRight, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const EventsPage = () => {
    <div>
        <Navbar />
    </div>
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-09-22T00:00:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Navbar />
      <div className="relative bg-indigo-50 py-12 rounded-bl-[200px]">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600">E2A Conference 2024</h1>
          <div className="flex items-center my-4 space-x-4 text-lg">
            <div>
              <span className="text-4xl font-bold">{timeLeft.days}</span> Days
            </div>
            <div>
              <span className="text-4xl font-bold">{timeLeft.hours}</span> Hours
            </div>
            <div>
              <span className="text-4xl font-bold">{timeLeft.minutes}</span> Mins
            </div>
            <div>
              <span className="text-4xl font-bold">{timeLeft.seconds}</span> Secs
            </div>
          </div>
          <button className="px-6 py-2 mt-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
            Buy Tickets
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/profile-image-placeholder.png" // Replace this with your actual image path
            alt="Conference Attendee"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl font-bold">
          Upcoming <span className="text-blue-600">Events</span>
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={scrollLeft}
          >
            <FaChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={scrollRight}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide px-10 py-5"
        >
          {/* Card 1 */}
          <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105">
            <div className="relative mb-4">
              <img
                src="/images/person1.jpg" // Update with your image paths
                alt="Scott Beer"
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Scott Beer</h3>
            <p className="text-gray-500">Insert your title here</p>
            <p className="text-sm text-gray-400 mt-2">
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          {/* Repeat similar blocks for other cards */}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
