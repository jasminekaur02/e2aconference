"use client"; // Indicate that this is a client component

import React from 'react';

const Sponsors = () => {
  // Array of sponsor logos (SVG links)
  const sponsorLogos = [
    "data:image/png;base64,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", // Coca-Cola
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",      // Nike
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",    // Adidas
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/624px-Reebok_2019_logo.svg.png?20200702085200",    // Reebok
    "https://www.svgrepo.com/show/303470/puma-logo-logo.svg",      // Puma (as an additional logo)
  ];

  return (
    <section className="bg-white pb-10 animate-slide-in">
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
                  className="inline-block mx-4 h-16" // Adjust height as needed
                />
              ))}
              {/* Repeat logos for continuous scrolling */}
              {sponsorLogos.map((logo, index) => (
                <img
                  key={`repeat-${index}`}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="inline-block mx-4 h-16" // Adjust height as needed
                />
              ))}
            </div>
          </div>
          {/* <p className="text-gray-500 text-center italic mt-4">
            Sponsor logos and information will be displayed here.
          </p> */}
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