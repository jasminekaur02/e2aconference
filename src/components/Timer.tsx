"use client" ;
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-08T00:00:00"); // Set your event date here
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-8 justify-center mt-8">
      <div className="bg-gray-600 p-6 rounded-sm shadow-lg w-60 h-40 flex flex-col items-center justify-center">
        <span className="text-7xl font-bold text-white">{timeLeft.days}</span>
        <div className="text-sm text-white">Days</div>
      </div>
      <div className="bg-gray-600 p-6 rounded-sm shadow-lg w-60 h-40 flex flex-col items-center justify-center">
        <span className="text-7xl font-bold text-white">{timeLeft.hours}</span>
        <div className="text-sm text-white">Hours</div>
      </div>
      <div className="bg-gray-600 p-6 rounded-sm shadow-lg w-60 h-40 flex flex-col items-center justify-center">
        <span className="text-7xl font-bold text-white">{timeLeft.minutes}</span>
        <div className="text-sm text-white">Minutes</div>
      </div>
      <div className="bg-gray-600 p-6 rounded-sm shadow-lg w-60 h-40 flex flex-col items-center justify-center">
        <span className="text-7xl font-bold text-white">{timeLeft.seconds}</span>
        <div className="text-sm text-white">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;