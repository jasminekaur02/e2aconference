"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';

const ComponentName = () => {
  const scheduleRef = useRef(null);

  const handleScrollToSchedule = () => {
    scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const scheduleSection = scheduleRef.current;
    const handleScroll = () => {
      if (scheduleSection) {
        const rect = scheduleSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          scheduleSection.classList.add('animate-fadeIn');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-bl-[200px]">
      <Navbar />

      <header className="">
        <div className="px-2 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="py-5 sm:py-16 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-blue-600 sm:text-6xl lg:text-7xl">
                E2A 2025
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[10px] border-blue-600"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Conference</h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">March 8-9, 2025.</p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title=""
                  onClick={handleScrollToSchedule}
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-full bg-blue-600 hover:bg-indigo-500 focus:bg-blue-600 transform hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  View Schedule
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-0 origin-bottom-left scale-75 bg-gray-900 rounded-br-none sm:-translate-x-16 xl:-translate-x-24 rounded-2xl sm:scale-100">
                <svg
                  className="absolute w-auto h-10 text-blue-600 -translate-x-5 -translate-y-4"
                  viewBox="0 0 44 38"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 38H27.1765C25.6975 31.574 24.958 25.8894 24.958 20.9463C24.958 6.98212 31.2437 0 43.8151 0V8.1561C37.8992 8.1561 34.9412 11.3691 34.9412 17.7951V22.0585H44V38ZM19.042 38H2.21849C0.739496 31.574 0 25.8894 0 20.9463C0 6.98212 6.28571 0 18.8571 0V8.1561C12.9412 8.1561 9.98319 11.3691 9.98319 17.7951V22.0585H19.042V38Z"
                  />
                </svg>

                <div className="px-4 py-5 sm:p-6">
                  <blockquote>
                    <p className="text-base font-normal leading-6 text-white">
                      You made it so simple. Our new site is so much faster and easier to work with than my old site.
                      I just choose the page, make the change and it's done.
                    </p>
                  </blockquote>
                  <p className="mt-4 text-base font-semibold text-white">Ralph Edwards</p>
                  <p className="mt-1 text-sm font-normal text-gray-400">CEO - Brain360</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Schedule Section */}
      <section
        ref={scheduleRef}
        className="py-8 bg-gray-50 opacity-0 transition-opacity duration-700 ease-in-out"
      >
        <div className="max-w-4xl px-4 py-8 mx-auto text-center">
          {/* Header Section */}
          <h2 className="text-3xl font-bold text-gray-800">
            Conference <span className="text-blue-600">Schedule</span>
          </h2>
          <p className="mt-2 text-lg text-gray-600">March 8-9, 2025</p>

          {/* Schedule Section */}
          <div className="mt-8 space-y-6">
            {/* Event Item */}
            <div className="bg-gray-800 text-left text-white p-4 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold">
                09:00-10:00 <span className="ml-4">Event Registration</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Registration and welcome coffee. Pick up your conference materials.
              </p>
            </div>

            <div className="bg-gray-800 text-left text-white p-4 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold">
                10:00-11:00 <span className="ml-4">Keynote: The Future of JS</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Keynote address by a leading expert in JavaScript.
              </p>
            </div>

            <div className="bg-gray-800 text-left text-white p-4 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold">
                11:00-12:00 <span className="ml-4">Breakout Sessions</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Choose from various breakout sessions on topics like React, Node.js, and more.
              </p>
            </div>

            <div className="bg-gray-800 text-left text-white p-4 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold">
                12:00-01:30 <span className="ml-4">Lunch Break</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Enjoy a lunch break and network with other attendees.
              </p>
            </div>

            <div className="bg-gray-800 text-left text-white p-4 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold">
                01:30-03:00 <span className="ml-4">Workshop: Building Modern Apps</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Hands-on workshop focusing on modern application development techniques.
              </p>
            </div>

            <div className="bg-gray-800 text-left text-white p-4 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold">
                03:00-04:00 <span className="ml-4">Closing Remarks</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Recap of the day and final thoughts from the conference organizers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentName;
