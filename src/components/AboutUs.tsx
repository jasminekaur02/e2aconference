"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false); // State to track the expansion of the text

  const aboutText =
    "International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today's rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge.As we navigate an era of unprecedented technological advancement, E2A strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2A to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.";

  const aboutTextShort = aboutText.slice(0, 200); // Shortened version of the text

  // Refs for animations
  const headingRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
            ref={aboutTextRef}
            className="relative bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg z-10 opacity-100 transform translate-y-0"
          >
            {/* Conditionally show full or shortened text */}
            <p className="text-base sm:text-lg text-justify text-gray-700">
              {/* On large screens (lg: class), always show full text; on smaller, toggle with "Read More" */}
              <span className="lg:hidden">
                {isExpanded ? aboutText : `${aboutTextShort}...`}
              </span>
              <span className="hidden lg:block">{aboutText}</span>
            </p>

            {/* Show Read More/Read Less only on sm and md screens */}
            <div className="mt-4 text-center lg:hidden">
              <button
                className="text-blue-600 hover:underline focus:outline-none"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
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
