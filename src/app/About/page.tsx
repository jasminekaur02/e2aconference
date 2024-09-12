"use client";
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
      <HeaderTop isHomePage={false}/>
      <Navbar/>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <PageHero title="About Us" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" /> {/* Add proper hero image path */}
        
        {/* About Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 ">Who We <span className='text-blue-600'>Are</span></h2>
            <p className="text-lg leading-relaxed text-justify">
              The International Conference on Electrical, Electronics, and Automation (E2ACON) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today&apos;s rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-justify">
              As we navigate an era of unprecedented technological advancement, E2ACON strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2ACON to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.
            </p>
          </div>
        </section>
      
        {/* Additional Sections - About NIT Jalandhar and Department of ICE */}
        <section className="px-6 md:px-12 py-16 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About NIT Jalandhar */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">About <span className='text-blue-600'>NIT Jalandhar</span></h3>
              <p className='text-sm text-blue-600 p-2'>
                <Link href="https://www.nitj.ac.in" legacyBehavior>
                  <a href="https://www.nitj.ac.in" target="_blank">https://www.nitj.ac.in</a>
                </Link>
              </p>
              <p className="text-md leading-relaxed text-justify">
                Dr. B. R. Ambedkar NIT Jalandhar was established in 1987 as an erstwhile Regional Engineering College and later given the status of NIT Jalandhar by the Ministry of Human Resource Development, Government of India in 2002.
                {showMoreNit && (
                  <span>
                    <br /> As an Institute of National importance, NIT Jalandhar comprehends its responsibility of providing high-quality education in Engineering and Technology to produce competent technical manpower for the country. The Institute offers UG, PG, and research programs with the latest research infrastructure in all disciplines, holding 46th NIRF ranking and within a ranking band of 651-700 among Asian Universities.
                  </span>
                )}
              </p>
              <button onClick={() => setShowMoreNit(!showMoreNit)} className="text-blue-600 hover:underline mt-4 inline-block">
                {showMoreNit ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* About Department of ICE */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Department of <span className='text-blue-600'>ICE</span></h3>
              <p className='text-sm text-blue-600 p-2'>
                <Link href="https://departments.nitj.ac.in/dept/ice/home" legacyBehavior>
                  <a href="https://departments.nitj.ac.in/dept/ice/home" target="_blank">https://departments.nitj.ac.in/dept/ice/home</a>
                </Link>
              </p>
              <p className="text-md leading-relaxed text-justify">
                The Department of Instrumentation and Control Engineering (ICE) commenced its Bachelor of Technology (B.Tech) degree program in 1990 with an initial intake of 30 students.
                {showMoreIce && (
                  <span>
                    <br /> The department offers specialization in areas such as Process Instrumentation, Control Systems, Biomedical Engineering, Robotics, Wireless Networking, and more. The ICE curriculum provides a broad insight into state-of-the-art methods for this interdisciplinary combination reinforced by research, with valuable inputs from prestigious institutions like IIT Roorkee, IIT Delhi, and R&D organizations like CSIO.
                  </span>
                )}
              </p>
              <button onClick={() => setShowMoreIce(!showMoreIce)} className="text-blue-600 hover:underline mt-4 inline-block">
                {showMoreIce ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
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
      <Footer/>
    </>
  );
}

export default AboutUsPage;
