"use client";
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaLandmark, FaLaptop } from 'react-icons/fa'; // Import calendar and laptop icons
import ChiefGuest from './ChiefGuest';

const Hero = () => {
  // Array of image URLs for the carousel
  const images = [
    "/01.jpg",
    "/_DSC0225.JPG",
    "/_20180311_115405-01-01.jpeg",
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State to manage the countdown timer
  // const calculateTimeLeft = () => {
  //   const eventDate = new Date("2025-03-08T00:00:00"); // Set your event date here
  //   const now = new Date();
  //   const difference = eventDate.getTime() - now.getTime();

  //   if (difference <= 0) {
  //     return {
  //       days: "L",
  //       hours: "I",
  //       minutes: "V",
  //       seconds: "E",
  //     };
  //   }

  //   let timeLeft = {
  //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //     hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //     minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //     seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //   };

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // // Update the countdown every second
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  // Change the background image at a regular interval (e.g., every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Live status (set to true or false based on your logic)
  const [isLive, setIsLive] = useState(false); // Initially set to false or true as needed
  const liveLink = "https://www.youtube.com/@NITJOfficial"; // Your YouTube link

  const toggleLiveStatus = () => {
    setIsLive((prev) => !prev); // Toggles the live status
  };

  return (
    <>
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

      {/* Content over the background image */}
      <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4 pt-32">
        <h1 className="text-2xl md:text-6xl font-bold">
          E2ACON <span className="text-blue-400">2025</span>
        </h1>
        <p className="mt-4 text-xl md:text-4xl font-bold">
          International Conference on <br />
          <span className="text-blue-400">Electrical, Electronics</span> &{" "}
          <span className="text-blue-400">Automation</span>
        </p>

        {/* Conference proceedings info */}
        <p className="mt-6 hidden md:visible text-[1rem] md:text-[1rem] font-bold text-gray-300">
          <span className="text-white"></span><br />
        </p>

        {/* New line for proceedings with LNEE */}
        <p className="mt-2 text-lg md:text-xl text-white font-bold">
          <span className="text-white">Proceedings will be published in LNEE, Springer (SCOPUS Indexed) [Approved]</span>
        </p>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
          <div className="flex items-center">
            <FaLaptop className="text-white mr-2" />
            <p className="text-lg md:text-xl">Hybrid Mode</p>
          </div>
         <div className="flex items-center">
            <FaLandmark className="text-white mr-2" />
            <span className="text-lg md:text-xl">NIT Jalandhar</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-white mr-2" />
            <span className="text-lg md:text-xl">8-9 March, 2025</span>
          </div>
        </div>

        {/* Countdown Timer */}
        {/* <div className="mt-8 flex space-x-2 justify-center">
          {Object.values(timeLeft).map((value, i) => (
            <div key={i} className="bg-blue-600 p-2 md:p-4 rounded-md shadow-lg">
              <span className="text-2xl md:text-4xl font-bold">
                {value}
              </span>
              {value !== "L" && value !== "I" && value !== "V" && value !== "E" && (
                <div className="text-sm md:text-lg">{["Days", "Hours", "Minutes", "Seconds"][i]}</div>
              )}
            </div>
          ))}
        </div> */}

        <div className="mt-8 space-x-4">
        <a href="/Guidelines" rel="noopener noreferrer">
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Submit Paper
            </button>
          </a>
          <a href="/Registration" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </button>
          </a>
        </div>
      </div>
    </section>

    <ChiefGuest/>
    </>
  );
};

export default Hero;
