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
<<<<<<< HEAD
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
=======
    <section className="relative bg-indigo-50 py-12 rounded-bl-[200px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900">E2A Conference, 2025</h1>
                    <p className="mt-4 text-xl text-gray-700">
                        International Conference on <br />
                        <span className="text-blue-600">Electrical, Electronics</span> & <span className="text-blue-600">Automation</span> {" "}
                        (E2A)
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Register</a>
                        <a href="/flyer" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Download Flyer</a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <div className="absolute bottom-0 left-0 w-[130%] h-[130%] bg-white rounded-tl-[250px] -z-10 transform -translate-x-8 -translate-y-8"></div>
                    <img src="/mainbuilding.png" alt="Conference Building" className="w-full rounded-lg shadow-lg relative z-10" />
                </div>
>>>>>>> 308ecd2c42309daf273324164b7c03a6d50e2590
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