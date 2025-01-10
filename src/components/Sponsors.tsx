"use client";

import React from "react";

const Sponsors = () => {
  const sponsors = [
    { image: "/devstarterlogo.png", url: "https://devstarter.com", alt: "DevStarter Logo" },
    { image: "/nsefilogo.png", url: "https://nsefi.in", alt: "NSEFI Logo" },
    { image: "/international_conf_alerts.png", url: "https://internationalconferencealerts.com", alt: "International Conference Alerts" },
    { image: "/voltrron.jpg", url: "https://www.qmansys.com/emobility.php", alt: "Voltrron" },
    { image: "/allconfalert.jpg", url: "https://allconferencealert.net/", alt: "All Conference Alert" },
    { image: "/springer_logo.jpg", url: "https://www.springer.com/", alt: "Springer" },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          <span className="text-blue-600">Our</span> Partners & Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-3xl p-8 shadow-lg">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                className="h-24 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
