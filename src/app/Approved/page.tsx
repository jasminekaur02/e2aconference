"use client";
import React, { useState } from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface Speaker {
  name: string;
  image: string;
  speakerDetails: string;
  sessionTitle: string;
  sessionDescription: string;
  linkedin?: string;
  scholar?: string;
  website?: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Arvind Kumar Prajapati",
    image: "/image copy.png",
    speakerDetails: "Dr. Arvind Kumar Prajapati is working as an Assistant Professor in Electrical Engineering Department, NIT Jamshedpur, Jharkhand from October 2022 onwards. He received his bachelor's degree in 2013 from Uma Nath Singh Institute of Technology Veer Bahadur Singh Purvanchal University Jaunpur, Uttar Pradesh, in Electrical Engineering. He received his master's degree from NIT Silchar, Assam, in Electrical Engineering with the specialization of Control and Industrial Automation in 2015. Subsequently, he obtained a Ph.D. in Electrical Engineering from IIT Roorkee, Uttarakhand in 2019 with the specialization of Systems and Control. He served as a Senior Assistant Professor in Electrical and Electronics Engineering Department, Madanapalle Institute of Technology and Science Madanapalle, Chittoor District, Andhra Pradesh from June 2019 to December 2019. He worked in Vellore Institute Technology Andhra Pradesh Campus (VIT-AP) from January 2020 to October 2022 as an Assistant Professor Grade-1 in School of Electronics Engineering, where he also worked as research coordinator. He has received 14 awards based on his academic performance. He has published 3 Indian patents, 16 SCI journal papers, 19 international conference papers, 3 book chapters and one book. His current research focuses on the areas of model order reduction and its application, fault detection and accommodation, and integrated vehicle health management (IVHM) systems.",
    sessionTitle: "Hands-on Training in Reduced Order Modeling and Controller Design using MATLAB",
    sessionDescription: "With the increasing of features of the dynamical systems, complexity and order of the systems are increased simultaneously. Analysis and simulation of these systems create several limitations such as storage memory, computational time, and computation astringency. Reduced order modeling plays an important role in the analysis and synthesis of large-scale systems. MOR for standard linear systems has been extensively studied and has been successfully applied to various real-world problems such as mechanical, power systems, power electronics, chemical engineering, ecological, bio-medical, and so forth, especially in control systems. The exploration and controller design for the simple system is easier as compared to the complex system. For the controller design and simplification of the large-scale systems, various model reduction techniques are available in the frequency domain and in the time domain. These standard methods have numerous advantages but also have some limitations. To overcome their limitations, some new model reduction methods for the simplification of the large-scale systems and the controller design have been discussed. The novelty and efficacy of the proposed methods are illustrated with some standard examples.",
    scholar: "https://scholar.google.co.in/citations?user=6MBpFBQAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/dr-arvind-kumar-prajapati-1214618a/"
  },
  {
    name: "Dr. Garima Saini",
    image: "/image copy 2.png",
    speakerDetails: "Dr. Garima Saini is a faculty member in the Electronics and Communication Engineering department at NITTTR Chandigarh, with over 23 years of teaching experience. She earned her Ph.D. in Engineering from Punjab Technical University, Jalandhar. Recognized for her contributions to RF and wireless communication, she has received multiple awards, including the prestigious IETE - Smt Triveni Devi Gupta Memorial Award and Best Paper Awards at international conferences. Her research spans wireless and mobile communication, antenna design simulations, soft computing applications, and 3D printed antennas. She has guided over 104 M.Tech theses, published two patents, and authored 102 research papers in reputed journals and conferences. She is also actively involved in academic development, delivering expert talks and organizing skill training programs under national initiatives. As a member of esteemed organizations like IETE, ISSE, and IEEE, she continues to contribute significantly to the field of electronics and telecommunications.",
    sessionTitle: "5G to 6G",
    sessionDescription: "The journey from 5G to 6G marks a revolutionary shift in mobile communication, enabling high-speed connectivity, low latency, and broader network coverage. While 5G has enhanced mobile broadband, IoT, and mission-critical services, 6G is set to push communication technologies to new heights. India's telecom evolution from 2G to 5G has been a significant step toward innovation and self-reliance. Through TSDSI, India is actively contributing to the development of 6G standards, laying a strong foundation to achieve the objectives of Digital India 2030.",
    scholar: "https://scholar.google.co.in/citations?user=ksQIgeYAAAAJ&hl=en",
   
  },
  {
    name: "Mr. Subrahmanyam Pulipaka",
    image: "/speakers/subbu.jpg",
    speakerDetails: "Subrahmanyam Pulipaka serves as the Chief Executive Officer of India's National Solar Energy Federation, making him one of the youngest leaders in this position. His academic excellence is marked by his education from BITS Pilani in Electrical & Electronics Engineering. He has received prestigious recognition including the BITSAA Global 30 Under 30 Award and the BRICS Young Scientist Award in 2018. With a strong research background in solar PV module reliability, he has contributed significantly to the field through 15 research articles in internationally acclaimed journals. As the founding chairman of the India Africa Youth Energy Forum, he works towards nurturing future energy leaders across the Indian subcontinent and African continent.",
    sessionTitle: "Solar Energy Innovation and Future Trends",
    sessionDescription: "This session will explore cutting-edge developments in solar energy technology and their implementation in modern power systems. Topics will include recent innovations in solar PV technology, grid integration challenges and solutions, and emerging trends in renewable energy policy frameworks. Mr. Pulipaka will share insights from his experience in both technical and policy aspects of solar energy deployment, covering efficiency improvements, cost reduction strategies, and future market prospects. The session will also address the role of solar energy in achieving sustainable development goals and energy security.",
    linkedin: "https://www.linkedin.com/in/solarsubbu",
    website: "https://nsefi.in/team"
  }
];

const SpeakerPage: React.FC = () => {
  const [expandedSpeakers, setExpandedSpeakers] = useState<{ [key: number]: boolean }>({});
  const [activeTab, setActiveTab] = useState<{ [key: number]: 'profile' | 'session' }>({});

  const toggleExpand = (index: number) => {
    setExpandedSpeakers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleTab = (index: number, tab: 'profile' | 'session') => {
    setActiveTab((prev) => ({
      ...prev,
      [index]: tab,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
        title="Approved Sessions" 
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg"
      />
      <div className="flex flex-col flex-grow items-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 w-full">
        <div className="max-w-6xl w-full space-y-16">
          {speakers.map((speaker, index) => {
            const isImageOnRight = index % 2 === 0;
            const isExpanded = expandedSpeakers[index];
            const currentTab = activeTab[index] || 'profile';

            return (
              <div 
                key={speaker.name} 
                className="bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className={`p-6 lg:p-8 flex flex-col lg:flex-row items-center`}>
                  <div className={`w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col items-center ${isImageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                      {speaker.linkedin && (
                        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                          <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl" />
                        </a>
                      )}
                      {speaker.scholar && (
                        <a href={speaker.scholar} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                          <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-2xl" />
                        </a>
                      )}
                      {speaker.website && (
                        <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                          <FontAwesomeIcon icon={faGlobe} className="text-green-600 text-2xl" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={`w-full lg:w-2/3 px-4 lg:px-8 ${isImageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl font-bold text-blue-800 mb-2">{speaker.name}</h2>
                    <div className="flex space-x-4 mb-4">
                      <button
                        onClick={() => toggleTab(index, 'profile')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentTab === 'profile' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Speaker Profile
                      </button>
                      <button
                        onClick={() => toggleTab(index, 'session')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentTab === 'session' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Session Details
                      </button>
                    </div>
                    <div className={`text-gray-700 ${isExpanded ? 'block' : 'line-clamp-4 lg:line-clamp-none'}`}>
                      {currentTab === 'profile' ? (
                        speaker.speakerDetails
                      ) : (
                        <>
                          <h3 className="text-lg font-semibold text-blue-600 mb-2">{speaker.sessionTitle}</h3>
                          {speaker.sessionDescription}
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-600 hover:text-blue-700 mt-3 lg:hidden font-medium"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpeakerPage;