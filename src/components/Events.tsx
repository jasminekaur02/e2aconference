"use client"; // Add this line at the top

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './navbar'; // Ensure the import path is correct

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
          {/* Replace with Next.js Image component */}
          <Image
            src="/profile-image-placeholder.png" // Replace this with your actual image path
            alt="Conference Attendee"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
    
  );
};

export default EventsPage;