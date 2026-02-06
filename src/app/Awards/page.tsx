"use client";
import React, { useState } from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

const awardsData = [
  {
    title: "Best Paper Award",
   description: "All nominations will be selected during the review process and grouped into a few key areas. Nominated papers in the same key area will be presented in the same session. Only full paper submissions which are presented at the conference will be eligible for the best paper award.",
    winners: [
      { position: "1st", photo: "/winners/bestpaper1.jpg", paperId: "BP101", title: "Advancements in AI", author: "Dr. A. Kumar" },
      { position: "2nd", photo: "/winners/bestpaper2.jpg", paperId: "BP102", title: "Quantum Computing Insights", author: "Dr. B. Sharma" },
      { position: "3rd", photo: "/winners/bestpaper3.jpg", paperId: "BP103", title: "Robotics Revolution", author: "Dr. C. Singh" },
    ]
  },
  {
    title: "Best Student Paper Award",
    description: " The first author of the paper should be a registered university student. Only full papers submissions which are presented at the conference will be considered.",
    winners: [
      { position: "1st", photo: "/winners/student1.jpg", paperId: "SP201", title: "ML in Healthcare", author: "R. Verma" },
      { position: "2nd", photo: "/winners/student2.jpg", paperId: "SP202", title: "Blockchain Security", author: "K. Joshi" },
      { position: "3rd", photo: "/winners/student3.jpg", paperId: "SP203", title: "IoT Innovations", author: "S. Mehta" },
    ]
  },
  {
    title: "Best Oral Presentation Award",
    description: "For every session, one best oral presentation will be selected by session chairs based on originality, applicability, technical merit, PPT quality, and more.",
    winners: [
      { position: "1st", photo: "/winners/oral1.jpg", paperId: "OP301", title: "Cybersecurity Trends", author: "Dr. D. Rao" },
      { position: "2nd", photo: "/winners/oral2.jpg", paperId: "OP302", title: "Smart Grids", author: "Dr. E. Gupta" },
      { position: "3rd", photo: "/winners/oral3.jpg", paperId: "OP303", title: "Autonomous Vehicles", author: "Dr. F. Patel" },
    ]
  }
];

const AwardsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleWinners = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero title="Awards" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Conference <span className='text-blue-600'>Awards</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {awardsData.map((award, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-8 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{award.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{award.description}</p>
                <button onClick={() => toggleWinners(index)} className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                  {expandedIndex === index ? "Hide Winners" : "Show Winners"}
                </button>
              </div>
            ))}
          </div>
          {expandedIndex !== null && (
            <div className="w-full p-8 mt-6 rounded-lg animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awardsData[expandedIndex].winners.map((winner, wIndex) => (
                <div key={wIndex} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                  <img src={winner.photo} alt={winner.author} className="w-16 h-16 rounded-full mb-4" />
                  <h4 className="font-semibold text-blue-600">{winner.position} Place</h4>
                  <p className="text-sm text-gray-700 text-center">{winner.paperId}</p>
                  <p className="text-sm text-gray-700 text-center">{winner.title}</p>
                  <p className="text-sm text-gray-500">By {winner.author}</p>
                  <a href={`/papers/${winner.paperId}`} className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-blue-50 transition duration-300">
                    Read Paper
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AwardsPage;
