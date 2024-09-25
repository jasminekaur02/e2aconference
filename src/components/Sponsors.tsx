"use client"; // Indicate that this is a client component

import React from 'react';

const Sponsors = () => {
  // Array of sponsor image paths
  const sponsorImages = ["/devstarterlogo.png", "/nsefilogo.png"]; // Replace with actual image paths

  return (
    <section className="bg-white pt-10 pb-10 animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          <span className='text-blue-600'>Our</span> Partners & Sponsors
        </h2>
        
        <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              {sponsorImages.length > 0 ? (
                // If sponsor images exist, display them
                sponsorImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Sponsor ${index + 1}`}
                    className="inline-block mx-4 h-24 w-auto object-contain" // Adjust height and width as needed
                  />
                ))
              ) : (
                // If no sponsor images exist, display "To Be Announced"
                <>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-400">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
                  {/* Additional "To Be Announced" spans for visibility */}
                </>
              )}
            </div>
          </div>
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
          min-width: 100%;
          animation: marquee 12s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
