'use client';
import Link from 'next/link'; // Assuming Next.js routing
import React from 'react';
import ZigzagTimeline from './Timeline';

const AboutOrg = () => {
  return (
    <>
     
      <div className="pt-8 min-h-screen flex flex-col">
        {/* About Section */}
        <section className=" px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
           

            {/* About NIT Jalandhar */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">About <span className='text-blue-600'>NIT Jalandhar</span></h3>
              <p className="text-lg leading-relaxed text-justify">
                Established in 1987, NIT Jalandhar offers UG, PG, and research programs. It holds 46th NIRF ranking and ranks among the top 700 universities in Asia.
              </p>
              <Link href="https://www.nitj.ac.in/" className="text-blue-600 hover:underline mt-4 inline-block">
                Read More
              </Link>
            </div>
             {/* Department of ICE */}
             <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold  mb-4">Department of <span className='text-blue-600'>ICE</span></h3>
              <p className="text-lg leading-relaxed text-justify">
                The Department of Instrumentation and Control Engineering (ICE) commenced its B.Tech program in 1990. Specializations include Process Instrumentation, Control Systems, Biomedical Engineering, and Robotics.
              </p>
              <Link href="https://departments.nitj.ac.in/dept/ice/home" className="text-blue-600 hover:underline mt-4 inline-block">
                Read More
              </Link>
            </div>

          </div>

          <div className='pt-24'>
            <ZigzagTimeline/>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutOrg;
