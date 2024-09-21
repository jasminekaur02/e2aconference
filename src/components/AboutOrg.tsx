'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ZigzagTimeline from './Timeline';
import { faInfoCircle, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutOrg = () => {
  const [showMoreNit, setShowMoreNit] = useState(false);
  const [showMoreIce, setShowMoreIce] = useState(false);

  return (
    <>
      <div className="pt-8 min-h-screen flex flex-col">
        {/* About Section */}
        <section className="px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* About NIT Jalandhar */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">About <span className='text-blue-600'>NIT Jalandhar</span></h3>
              
              {/* "More Info" Button for NIT Jalandhar */}
              <div className="mb-4">
                <Link href="https://www.nitj.ac.in/" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  More Info
                </Link>
              </div>
              
              <p className="text-lg leading-relaxed text-justify">
                Established in 1987, NIT Jalandhar offers UG, PG, and research programs. It holds 46th NIRF ranking and ranks among the top 700 universities in Asia.
                {showMoreNit && (
                  <span>
                    <br /> The institute has been a beacon of knowledge, fostering innovation and research across multiple engineering disciplines.
                  </span>
                )}
              </p>
              <button onClick={() => setShowMoreNit(!showMoreNit)} className="text-blue-600 hover:underline mt-4 inline-block">
                {showMoreNit ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Department of ICE */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">About Department of <span className='text-blue-600'>ICE</span></h3>
              
              {/* "More Info" Button for Department of ICE */}
              <div className="mb-4">
                <Link href="https://departments.nitj.ac.in/dept/ice/home" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  More Info
                </Link>
              </div>
              
              <p className="text-lg leading-relaxed text-justify">
                The Department of Instrumentation and Control Engineering (ICE) commenced its B.Tech program in 1990. Specializations include Process Instrumentation, Control Systems, Biomedical Engineering, and Robotics.
                {showMoreIce && (
                  <span>
                    <br /> The department focuses on research and innovation, providing students with practical knowledge and hands-on experience in the latest technologies.
                  </span>
                )}
              </p>
              <button onClick={() => setShowMoreIce(!showMoreIce)} className="text-blue-600 hover:underline mt-4 inline-block">
                {showMoreIce ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Our Mission & Vision Section */}
          <div className='pt-24'>
            <ZigzagTimeline />
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutOrg;
