"use client"; // Add this line to indicate that this is a client component

import React from 'react';

const Sponsors = () => {
  // Array of sponsor logos
  const sponsorLogos = [
    "/path/to/logo1.png",
    "/path/to/logo2.png",
    "/path/to/logo3.png",
    "/path/to/logo4.png",
    "/path/to/logo5.png",
  ];

  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sponsors</h2>
        <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              {sponsorLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="inline-block mx-4"
                />
              ))}
              {/* Repeat logos for continuous scrolling */}
              {sponsorLogos.map((logo, index) => (
                <img
                  key={`repeat-${index}`}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="inline-block mx-4"
                />
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-center italic mt-4">
            Sponsor logos and information will be displayed here.
          </p>
        </div>
      </div>

      {/* CSS for Marquee Effect */}
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
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;