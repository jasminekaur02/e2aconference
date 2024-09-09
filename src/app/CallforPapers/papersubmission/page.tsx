"use client";
import HeaderTop from '@/components/HeaderTop'; // Import HeaderTop
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar'; // Ensure correct casing for Navbar
import PageHero from '@/components/PageHero';

interface SubTrack {
  name: string;
}

interface Track {
  id: number;
  name: string;
  subTracks: SubTrack[];
}

const tracks: Track[] = [
  {
    id: 1,
    name: "Advances in Electrical Systems",
    subTracks: [
      { name: "Electrical Materials and Process" },
      { name: "Power Generation, Transmission & Distribution Systems" },
      { name: "Electric machines control and drive" },
      { name: "Energy Storage Systems & Battery Management Systems" },
      { name: "Smart & Sustainable Energy Solutions" },
      { name: "Renewable Energy and Green Energy" },
      { name: "Smart Grids and Micro-Grids" },
      { name: "Grid Technologies Design and Security" },
      { name: "Electrical Vehicles" },
      { name: "Automotive power systems" },
      { name: "Power Quality and Cyber Physical Security" },
      { name: "Power Electronics" },
    ],
  },
  {
    id: 2,
    name: "Smart Electronics and Communications",
    subTracks: [
      { name: "Devices Circuits and Systems" },
      { name: "VLSI Design and Technology" },
      { name: "Embedded Systems" },
      { name: "Antenna, Microwave Techniques" },
      { name: "Radar, Satellite, RF and Smart Grid communication" },
      { name: "Communications and Networking Circuits" },
      { name: "5G/6G Communication" },
      { name: "Green Wireless Networks" },
      { name: "Signal & Image Processing" },
      { name: "Speech, Audio and Music Processing" },
      { name: "Biomedical Data Analysis" },
      { name: "Biomedical Engineering and Healthcare Technologies" },
      { name: "Optical Network and Systems" },
      { name: "Mobile Computing and Communication" },
      { name: "Cryptography, Security and Privacy of Mobile & Wireless Networks" },
      { name: "Mechatronics" },
    ],
  },
  {
    id: 3,
    name: "Instrumentation and Automation",
    subTracks: [
      { name: "Advanced and Intelligent Control Algorithms" },
      { name: "System Dynamics and Control applications" },
      { name: "Modeling and Identification of Linear and Non Linear Systems" },
      { name: "Fault Detection and Diagnosis" },
      { name: "Robotics and Computer Vision" },
      { name: "Unmanned Air Vehicles" },
      { name: "Machine Learning in Control Theory and Applications" },
      { name: "Industrial Process Control and Automation" },
      { name: "Sensors and Sensor Technologies" },
      { name: "Safety Instrumented Systems" },
      { name: "Intelligent Measurement and Instrumentation Systems" },
      { name: "Biomedical Instrumentation and Control" },
    ],
  },
  {
    id: 4,
    name: "Emerging Technologies",
    subTracks: [
      { name: "Internet of Things (IoT)" },
      { name: "AI and Data Science" },
      { name: "Machine Learning and Deep Learning Algorithms and Applications" },
      { name: "Cloud Computing" },
      { name: "Mobile Computing" },
      { name: "Security and Privacy" },
      { name: "Next Generation Computing and Applications" },
      { name: "Parallel and Distributed Computing" },
      { name: "Neural Networks and Data Mining" },
      { name: "Human Computer Interaction" },
      { name: "Web Services and Technology" },
      { name: "Blockchain Technology and Applications" },
      { name: "3D Printing and Applications" },
      { name: "Augmented Reality/ Virtual Reality" },
      { name: "Cognitive Radio and Spectrum Management" },
    ],
  },
  {
    id: 5,
    name: "Special Tracks on Renewable Energy",
    subTracks: [
      { name: "Solar Cell Technology" },
      { name: "Energy Generation" },
      { name: "Transmission and Distribution Infrastructures" },
      { name: "Environmental Impacts and Sustainability" },
      { name: "Wind Energy Applications" },
      { name: "Electric Vehicle" },
      { name: "Control Applications" },
    ],
  },
];

const CallForPapers: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');

  const uniqueTracks = ['All', ...tracks.map(track => track.name)];

  const filteredTracks = selectedTrack === 'All' ? tracks : tracks.filter(track => track.name === selectedTrack);

  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
  title="Call for Papers" 
  image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
/>
      <section className="py-28 bg-white" id="CallForPapers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-4xl font-bold mb-16">
            Call For <span className="text-blue-600">Papers</span>
          </h2> */}

          {/* Filter Section */}
          <div className="mb-8">
            <label className="mr-4">Track:</label>
            <select 
              value={selectedTrack} 
              onChange={(e) => setSelectedTrack(e.target.value)} 
              className="border rounded p-2"
            >
              {uniqueTracks.map((track, index) => (
                <option key={index} value={track}>{track}</option>
              ))}
            </select>
          </div>

          {/* Display Tracks and Sub-Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTracks.map(track => (
              <div key={track.id} className="bg-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="text-blue-600 font-semibold mb-2">{track.name}</h3>
                <ul className="list-disc pl-5">
                  {track.subTracks.map((subTrack, index) => (
                    <li key={index} className="text-gray-700">{subTrack.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default CallForPapers;