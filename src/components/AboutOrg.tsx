'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ZigzagTimeline from './Timeline';

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
              <h3 className="text-3xl font-bold mb-4">
                About <span className="text-blue-600">NIT Jalandhar</span>
              </h3>

              {/* "More Info" Button for NIT Jalandhar */}
              <div className="mb-4">
                <Link href="https://www.nitj.ac.in/" className="flex items-center px-4 py-2 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                  <FontAwesomeIcon icon={faUniversity} className="mr-2" />
                  NIT Jalandhar
                </Link>
              </div>

              <p className="text-lg leading-relaxed text-justify">
                Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NIT Jalandhar), formerly Regional Engineering College Jalandhar (est. in 1989), is a public engineering Institute in Jalandhar, Punjab, India. It has been declared an Institute of National Importance by MHRD (now known as MoE), Govt. of India, under the Act of Parliament 2007. 
                {showMoreNit && (
                  <span>
                    <br /> The institute has been ranked 58th in the Engineering Category of NIRF-2024 amongst our country's top institutes/universities. It has a student strength of more than 5000, a faculty and staff strength of more than 500, 18 departments, and about 20 clubs and cells. It offers various academic programs such as B.Tech, M.Tech, Ph.D., M.Sc., M.B.A., and Integrated B.Sc.-B.Ed. The overall placement percentage across the departments was about 86% for the 2024 pass-out batch, with the highest package being 52 LPA and major recruiters, including Google, Amazon, Nvidia, and many more. 
                  </span>
                )}
              </p>
              <button
                onClick={() => setShowMoreNit(!showMoreNit)}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                {showMoreNit ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Department of ICE */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">
                About Department of <span className="text-blue-600">ICE</span>
              </h3>

              {/* "More Info" Button for Department of ICE */}
              <div className="mb-4">
                <Link href="https://departments.nitj.ac.in/dept/ice/home" className="flex items-center px-4 py-2 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  ICE Department
                </Link>
              </div>

              <p className="text-lg leading-relaxed text-justify">
                The Department of Instrumentation and Control Engineering (ICE) commenced its Bachelor of Technology (B. Tech.) degree program in 1990 with an intake of 30 students. The department started the M.Tech (Full Time) and M.Tech (Part-Time) Degree Programme in Control and Instrumentation Engineering in 2006 and 2010. 
                {showMoreIce && (
                  <span>
                    &nbsp;It also started a new M.Tech Machine Intelligence and Automation program in 2024. The Department began its Ph.D. Program in 2005 in Instrumentation and Control Engineering, Biomedical Engineering, Robotics, A.I., Control, M.L., and Cryogenics. Currently, it has an overall student strength of about 500. The Department is consolidating its efforts to promote industrial research, sponsored projects, and consultancy in appropriate Instrumentation and Control Engineering areas.
                  </span>
                )}
              </p>
              <button
                onClick={() => setShowMoreIce(!showMoreIce)}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                {showMoreIce ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Our Mission & Vision Section */}
          <div className="pt-24">
            <ZigzagTimeline />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutOrg;
