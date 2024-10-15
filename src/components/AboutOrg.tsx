'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Aboutice from '@/components/Aboutice'
import ZigzagTimeline from './Timeline';
import { faInfoCircle, faLandmark, faUniversity } from '@fortawesome/free-solid-svg-icons';
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
            <div className="bg-white p-8 rounded-lg shadow-lg text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">
                About <span className="text-blue-600">NIT Jalandhar</span>
              </h3>

              {/* "More Info" Button for NIT Jalandhar */}
              <div className="mb-4">

                <Link
                  href="https://www.nitj.ac.in/"
                  className="flex items-center px-2 py-2 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faUniversity} className="mr-2" />
                  NITJ Official Website

                </Link>
              </div>

              <p className="text-lg text-left">

                Dr. B. R. Ambedkar National Institute of Technology Jalandhar
                (NIT Jalandhar), formerly Regional Engineering College
                Jalandhar (est. in 1989), is a public engineering
                Institute in Jalandhar, Punjab, India. It has been declared an
                Institute of National Importance by MHRD (now known as
                MoE), Govt. of India, under the Act of Parliament 2007.
                {showMoreNit && (
                  <span>
                    <br /> The institute has been ranked 58th in the Engineering
                    Category of NIRF-2024 amongst our country&apos;s top
                    institutes/universities. It has a student strength of
                    more than 5000, a faculty and staff strength of more than
                    500, 18 departments, and about 20 clubs and cells. It offers
                    various academic programs such as B.Tech,
                    M.Tech, Ph.D., M.Sc.,
                    M.B.A., and Integrated
                    B.Sc.-B.Ed. The overall placement
                    percentage across the departments was about 86% for
                    the 2024 pass-out batch, with the highest package being 52
                    LPA and major recruiters, including Google, Amazon, Nvidia,
                    and many more.

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

            {/* Department of NUIS */}
            <div className="bg-white p-8 rounded-lg text-center lg:text-left shadow-lg">
              <h3 className="text-3xl font-bold mb-4">
                About <span className="text-blue-600"> NUiS Singapore</span>
              </h3>

              {/* "More Info" Button for Department of ICE */}
              <div className="mb-4">

                <Link
                  href="https://www.ncl.ac.uk/singapore/ "
                  className="flex items-center px-2 py-2 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faLandmark} className="mr-2" />
                  NUiS Oficial Website

                </Link>
              </div>

              <p className="text-lg  text-left  lg:text-wrap">

              Newcastle University in Singapore (NUiS) is a branch of Newcastle University, UK, offering a wide range of undergraduate and postgraduate programs with a strong emphasis on engineering, computing, and sustainability.
                {showMoreIce && (
                  <span>
                    &nbsp;Established to provide high-quality education and research in Southeast Asia, NUiS is known for its collaborative efforts with industries and academic institutions to address regional and global challenges. The campus fosters innovation, particularly in areas such as advanced engineering, smart cities, and renewable energy, aligning with Singapore's goals of becoming a global hub for research and development.


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
            <Aboutice/>
            <ZigzagTimeline />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutOrg;