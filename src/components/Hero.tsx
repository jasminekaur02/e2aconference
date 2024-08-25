"use client";

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-01-01T00:00:00'); // Set your event date here
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white">
      {/* Background image */}
      <img
        src="/mainbuilding.png"
        alt="Conference Building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-lg"></div> {/* Black blur effect */}
      
      <div className="relative flex flex-col justify-center items-center text-center text-white px-4 pt-32 h-full"> {/* Shifted down */}
        {/* Header Section */}
        <div className="flex items-center">
          <h1 className="text-7xl font-bold">E2A</h1>
          <h1 className="text-7xl font-bold text-white ml-2">2025</h1>
        </div>
        <p className="mt-4 text-xl max-w-7xl">
          Where international experts, innovative research, and dynamic discussions come together
          to advance Electrical, Electronics & Automation.
        </p>

        {/* Countdown Timer */}
        <div className="mt-12 mb-8">
          <div className="flex space-x-4 justify-center">
            <div className="bg-blue-600 p-4 rounded-md shadow-lg">
              <span className="text-3xl font-bold">{timeLeft.days}</span>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-blue-600 p-4 rounded-md shadow-lg">
              <span className="text-3xl font-bold">{timeLeft.hours}</span>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-blue-600 p-4 rounded-md shadow-lg">
              <span className="text-3xl font-bold">{timeLeft.minutes}</span>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-blue-600 p-4 rounded-md shadow-lg">
              <span className="text-3xl font-bold">{timeLeft.seconds}</span>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Register
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Download Flyer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;