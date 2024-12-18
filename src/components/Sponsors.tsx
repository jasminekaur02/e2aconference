"use client";

import React, { useRef, useState } from "react";

const Sponsors = () => {
  const sponsors = [
    { image: "/devstarterlogo.png", url: "https://devstarter.com" },
    { image: "/nsefilogo.png", url: "https://nsefi.in" },
    { image: "/international_conf_alerts.png", url: " https://internationalconferencealerts.com" },
    { image: "/voltrron.jpg", url: "https://www.qmansys.com/emobility.php" },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [pausedPosition, setPausedPosition] = useState(0);

  const handleMouseEnter = () => {
    // Calculate and store the current animation offset
    if (marqueeRef.current) {
      const computedStyle = getComputedStyle(marqueeRef.current);
      const transform = computedStyle.transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        setPausedPosition(matrix.m41); // Get the X translation value
      }
      marqueeRef.current.style.animationPlayState = "paused"; // Pause the animation
    }
  };

  const handleMouseLeave = () => {
    // Resume the animation from the paused position
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = "none"; // Reset animation
      marqueeRef.current.style.transform = `translateX(${pausedPosition}px)`; // Set the paused position
      setTimeout(() => {
        if (marqueeRef.current) {
          marqueeRef.current.style.animation = "marquee 12s linear infinite"; // Restart animation
        }
      }, 0); // Reapply the animation immediately
    }
  };

  return (
    <section className="bg-white pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          <span className="text-blue-600">Our</span> Partners & Sponsors
        </h2>

        <div
          className="bg-gray-100 rounded-3xl p-8 shadow-lg overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="whitespace-nowrap animate-marquee"
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-4"
              >
                <img
                  src={sponsor.image}
                  alt={`Sponsor ${index + 1}`}
                  className="h-24 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 12s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
