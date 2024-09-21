"use client"; // Indicate that this is a client component

import React from 'react';

const Sponsors = () => {
  // Array of sponsor names (leave empty or add sponsors later)
  const sponsorNames = [""]; // This will be treated as empty

  return (
    <section className="bg-white pt-10 pb-10 animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center"><span className='text-blue-600'>Our</span> Sponsors</h2>
        
        <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              {sponsorNames.length > 0 && sponsorNames.some((name) => name.trim() !== "") ? (
                // If sponsors exist and are not empty, display them
                sponsorNames.map((name, index) => (
                  name.trim() !== "" && (
                    <span
                      key={index}
                      className="inline-block mx-4 text-xl font-semibold text-gray-800"
                    >
                      {name}
                    </span>
                  )
                ))
              ) : (
                // If no sponsors exist, display "To Be Announced" multiple times for visibility
                <>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-400">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-400">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-400">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-400">
                    To Be Announced
                  </span>
                  <span className="inline-block mx-4 text-xl font-semibold text-gray-100">
                    To Be Announced
                  </span>
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
          min-width: 100%;  /* Ensure the content takes up at least 100% width */
          animation: marquee 12s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
