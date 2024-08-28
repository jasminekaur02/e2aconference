"use client";

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-03-08T00:00:00'); // Set your event date here
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
    <section className="relative min-h-screen">
      {/* Background image */}
      <img
        src="/mainbuilding.png" // Replace with your background image path
        alt="Main Building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Black blur effect */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-lg"></div>

      <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4 pt-32"> {/* Added pt-32 to shift down */}
        {/* Conference Title */}
        <h1 className="text-5xl font-bold">E2A 2025</h1>
        <p className="mt-4 text-3xl max-w-2xl font-bold">
          International Conference on <br />
          <span className="text-blue-400 font-bold">Electrical, Electronics</span> & <span className="text-blue-400">Automation</span> {" "}
          (E2A)
        </p>

        {/* Countdown Timer */}
        <div className="mt-8 flex space-x-4 justify-center">
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