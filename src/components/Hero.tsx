"use client";

import React, { useEffect, useState } from 'react';

const Hero = () => {
  // Array of image URLs for the carousel
  const images = [
    "https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp", // Replace with your background image paths
    "https://a-static.besthdwallpaper.com/a-lonely-man-sitting-in-the-mountains-watching-the-sunset-wallpaper-1280x768-121477_13.jpg",
    "https://www.hdwallpapers.in/download/artistic_landscape_mountains_trees_sunset_purple_sky_background_minimalist_hd_minimalism-1280x720.jpg",
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

      {/* Content over the background image */}
      <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4 pt-32">
        <h1 className="text-5xl font-bold">E2A 2025</h1>
        <p className="mt-4 text-3xl max-w-2xl font-bold">
          International Conference on <br />
          <span className="text-blue-400 font-bold">Electrical, Electronics</span> &{" "}
          <span className="text-blue-400">Automation</span> (E2A)
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
};

export default Hero;
