"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const aboutText = `
    <p>The <strong>International Conference on Electrical, Electronics, and Automation (E2ACON)</strong> is a global platform that brings together leading researchers, engineers, educators, and industry professionals to exchange ideas and share innovations in these critical fields. With the theme <em>“Sustainable Development: The Foundation of a Viksit Bharat”</em>, E2ACON 2025 emphasises the role of advanced technologies in achieving sustainable growth and supporting India's vision of becoming a developed nation. The conference will focus on a wide range of topics, including renewable energy systems, smart grids, IoT, automation, and advanced control systems, all aimed at creating energy-efficient, resource-conscious solutions for the future.</p>

    <p>E2ACON is a hub for global innovation, where participants can present their latest research, collaborate with peers, and explore cutting-edge developments. This event is an opportunity to contribute to the ongoing transformation of the world through technology and help shape a sustainable, connected, and automated future. Join E2ACON 2025 and be a part of the journey toward a smarter, more sustainable world.</p>
  `;

  // State for showing more text on small screens
  const [showMore, setShowMore] = useState(false);

  // Refs for animations
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && headingRef.current) {
          headingRef.current.classList.add("animate-slide-in");
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
    };
  }, []);

  // Function to toggle "Read More" state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="relative py-8 sm:py-16 md:py-20 overflow-hidden" id="AboutUs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Header */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center opacity-100 transform translate-y-0"
        >
          About <span className="text-blue-600">Us</span>
        </h2>

        {/* White Content Box with Blue Background Shape */}
        <div className="relative">
          <div
            className="relative bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg z-10 opacity-100 transform translate-y-0"
          >
            {/* Display truncated or full text based on state */}
            <div
              className={`text-base sm:text-lg text-justify text-gray-700 ${!showMore ? 'line-clamp-6 sm:line-clamp-none' : ''}`}
              dangerouslySetInnerHTML={{ __html: aboutText }}
            ></div>

            {/* "Read More" button for small screens */}
            <div className="sm:hidden text-center mt-4">
              <button
                onClick={toggleShowMore}
                className="text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Blue Background Shape */}
          <div className="absolute top-0 w-1/2 h-full bg-indigo-50 rounded-tr-[100px] -z-10 transform -translate-y-10 -left-48"></div>
        </div>
      </div>
    </section>
  );
}
