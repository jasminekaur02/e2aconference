"use client";
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaLaptop } from 'react-icons/fa'; // Import calendar and laptop icons

const Hero = () => {
  // Array of image URLs for the carousel
  const images = [
    "https://images.shiksha.com/mediadata/images/1488193562phpBbf6YJ.jpeg",
    "data:image/jpeg;base64,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",
    "https://khalsavox.com/wp-content/uploads/2024/04/image-15.png",
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  // State to manage the countdown timer

  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-08T00:00:00"); // Set your event date here
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

  // Update the countdown every second
  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // Change the background image at a regular interval (e.g., every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);


  // Live status (set to true or false based on your logic)
  const isLive = true; // Change this based on your live status logic

  const liveLink = "https://www.youtube.com/@NITJOfficial"; // Replace with your actual live link


  return (
    <section className="relative min-h-screen">
      {/* Background image carousel */}
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out",

        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
      />

      {/* Black blur effect */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-lg"></div>


      {/* Live link button */}

      <a
        href={liveLink}

        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-4 flex items-center border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
      >
        {isLive && <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>}
        Live

      </a>

      {/* Content over the background image */}
      <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold">E2ACon2025</h1>

        <p className="mt-4 text-2xl md:text-3xl max-w-2xl font-bold">

          International Conference on <br />
          <span className="text-blue-400 font-bold">Electrical, Electronics</span> &{" "}
          <span className="text-blue-400">Automation</span> (E2A)
        </p>

        {/* Countdown Timer */}
        <div className="mt-8 flex space-x-2 justify-center"> {/* Reduced space between boxes */}
          <div className="bg-blue-600 p-2 rounded-md shadow-lg"> {/* Reduced padding */}

            <span className="text-sm md:text-2xl font-bold">{timeLeft.days}</span> {/* Smaller font for mobile */}

            <div className="text-xs">Days</div> {/* Smaller text for mobile */}
          </div>

          <div className="bg-blue-600 p-2 rounded-md shadow-lg"> {/* Reduced padding */}
            <span className="text-sm md:text-2xl font-bold">{timeLeft.hours}</span> {/* Smaller font for mobile */}

            <div className="text-xs">Hours</div> {/* Smaller text for mobile */}
          </div>
          <div className="bg-blue-600 p-2 rounded-md shadow-lg"> {/* Reduced padding */}

            <span className="text-sm md:text-2xl font-bold">{timeLeft.minutes}</span> {/* Smaller font for mobile */}

            <div className="text-xs">Minutes</div> {/* Smaller text for mobile */}

          </div>
          <div className="bg-blue-600 p-2 rounded-md shadow-lg"> {/* Reduced padding */}
            <span className="text-sm md:text-2xl font-bold">{timeLeft.seconds}</span> {/* Smaller font for mobile */}
            <div className="text-xs">Seconds</div> {/* Smaller text for mobile */}

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

        {/* Hybrid Mode and Date in a single line */}
        <div className="mt-4 flex items-center justify-center space-x-10">
          <div className="flex items-center">

            <FaLaptop className="text-white mr-2" /> {/* Computer icon */}

            <p className="text-lg md:text-xl">Hybrid Mode</p>
          </div>

          <div className="flex items-center">
            <FaCalendarAlt className="text-white mr-2" />

            <span className="text-lg md:text-xl">8-9 March, 2025</span>

          </div>

        </div>

      </div>
    </section>
  );

};

export default Hero;
