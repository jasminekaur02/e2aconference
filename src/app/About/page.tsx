'use client';

import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import React, { useState } from 'react';
import Link from 'next/link';

const AboutUsPage = () => {
  // State to control the visibility of additional content
  const [showMoreNit, setShowMoreNit] = useState(false);
  const [showMoreIce, setShowMoreIce] = useState(false);

  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        {/* Hero Section */}
        <PageHero title="About Us" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" /> {/* Add proper hero image path */}
        
        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 md:px-12">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-8">
              About&nbsp;<span className="text-blue-600">Us</span>
            </h2>

         
            <p className="text-lg leading-relaxed text-justify">
              The International Conference on Electrical, Electronics, and Automation (E2ACON) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today&apos;s rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-justify">
              As we navigate an era of unprecedented technological advancement, E2ACON strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2ACON to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.
            </p>
          </div>
        </section>

        {/* Additional Sections - About NIT Jalandhar and Department of ICE */}
        <section className="px-4 sm:px-6 md:px-12 py-16 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About NIT Jalandhar */}
            <div className="bg-white p-8 rounded-lg shadow-lg">

              <h3 className="text-3xl font-bold mb-4">
                About <span className="text-blue-600">NIT Jalandhar</span>
              </h3>
              <p className="flex items-center px-2 py-2 text-blue-400 font-semibold rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition">
                <Link
                  href="https://www.nitj.ac.in"
                  target="_blank"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faUniversity} className="mr-2" />
                  NIT Jalandhar
                </Link>
              </p>
              <p className="text-md leading-relaxed text-justify">
                Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NIT Jalandhar), formerly Regional Engineering College Jalandhar (est. in 1989), is a public engineering Institute in Jalandhar, Punjab, India. It has been declared an Institute of National Importance by MHRD (now known as MoE), Govt. of India, under the Act of Parliament 2007.
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

            {/* About Department of ICE */}
            <div className="bg-white p-8 rounded-lg shadow-lg">

              <h3 className="text-3xl font-bold mb-4">
                Department of <span className="text-blue-600">ICE</span>
              </h3>
              <p className="flex items-center px-2 py-2 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Link
                  href="https://departments.nitj.ac.in/dept/ice/home"
                  target="_blank"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  ICE Department
                </Link>
              </p>
              <p className="text-md leading-relaxed text-justify">
                The Department of Instrumentation and Control Engineering (ICE) commenced its Bachelor of Technology (B. Tech.) degree program in 1990 with an intake of 30 students. The department started the M.Tech (Full Time) and M.Tech (Part-Time) Degree Programme in Control and Instrumentation Engineering in 2006 and 2010.
                {showMoreIce && (
                  <span>
                    &nbsp;It also started a new M.Tech Machine
                    Intelligence and Automation program in 2024. The Department
                    began its Ph.D. Program in 2005 in
                    Instrumentation and Control Engineering, Biomedical
                    Engineering, Robotics, A.I., Control,
                    M.L., and Cryogenics. Currently, it has an
                    overall student strength of about 500. The Department is
                    consolidating its efforts to promote industrial research,
                    sponsored projects, and consultancy in appropriate
                    Instrumentation and Control Engineering areas.

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
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 px-4 sm:px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-md leading-relaxed text-justify">
                Our vision is to create a transformative platform where cutting-edge research in electrical, electronics, and automation technologies inspires innovation and drives the future of global industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-md leading-relaxed text-justify">
                Our mission is to bring together a global community of experts, researchers, and engineers to share knowledge, collaborate on groundbreaking innovations, and collectively shape the future of automation and technology.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
