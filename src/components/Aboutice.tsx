"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const aboutText = `
    <p>The Department of Instrumentation and Control Engineering (ICE) commenced its Bachelor of Technology (B.Tech.) degree program in 1990 with an intake of 30 students. The department started the M.Tech (Full Time) and M.Tech (Part-Time) Degree Programme in Control and Instrumentation Engineering in 2006 and 2010.</p>

    <p>It also started a new M.Tech Machine Intelligence and Automation program in 2024. The Department began its Ph.D. Program in 2005 in Instrumentation and Control Engineering, Biomedical Engineering, Robotics, A.I., Control, M.L., and Cryogenics. Currently, it has overall student strength of about 500. The Department is consolidating its efforts to promote industrial research, sponsored projects, and consultancy in appropriate Instrumentation and Control Engineering areas. </p>
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
          About <span className="text-blue-600">ICE</span>
        </h2>

        {/* White Content Box with Blue Background Shape */}
        <div className="relative">
          <div
            className="relative bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg z-10 opacity-100 transform translate-y-0"
          >
            {/* Display truncated or full text based on state */}
            <div
              className={`text-base sm:text-lg text-justify text-gray-700 ${!showMore ? 'line-clamp-5 sm:line-clamp-none' : ''}`}
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
