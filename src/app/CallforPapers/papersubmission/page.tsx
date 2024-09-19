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

const tracks = [
  {
    id: 1,
    name: "Advances in Electrical Engineering",
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
      { name: "Reduced Order Modelling and Controller Design" },
      { name: "Power Electronics and Other Related Topics" },
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
      { name: "Mechatronics and Other Related Topics" },
    ],
  },
  {
    id: 3,
    name: "Instrumentation and Automation",
    subTracks: [
      { name: "Advanced and Intelligent Control Algorithms" },
      { name: "System Dynamics and Control applications" },
      { name: "Modelling and Identification of Linear and Non Linear Systems" },
      { name: "Fault Detection and Diagnosis" },
      { name: "Robotics and Computer Vision" },
      { name: "Unmanned Air Vehicles" },
      { name: "Machine Learning in Control Theory and Applications" },
      { name: "Industrial Process Control and Automation" },
      { name: "Sensors and Sensor Technologies" },
      { name: "Safety Instrumented Systems" },
      { name: "Intelligent Measurement and Instrumentation Systems" },
      { name: "Biomedical Instrumentation and Control and Other Related Topics" },
    ],
  },
  {
    id: 4,
    name: "Medical and Digital Healthcare",
    subTracks: [
      { name: "Wearable Medical Devices & IoT Gadgets" },
      { name: "Sensors and Sensing Systems for Diagnosis" },
      { name: "AR/VR-Based Systems in Healthcare" },
      { name: "Development of Robotic Surgery" },
      { name: "Sensor-Based Support Systems for Rehabilitation & Trauma Care" },
      { name: "Remote Healthcare and Health Monitoring" },
      { name: "AI in Predictive Healthcare Systems" },
      { name: "Role of Sensors in Critical Healthcare Systems" },
    ],
  },
  {
    id: 5,
    name: "Industry 5.0, Manufacturing and Automation",
    subTracks: [
      { name: "Cognitive Systems in Manufacturing" },
      { name: "IoT in Managing Robots for Efficient Task Execution" },
      { name: "Deep Learning Models and Big Data for Decision-Making" },
      { name: "Sensors and Systems for Monitoring Industrial Processes" },
      { name: "Data Collection, Analytics, and Remote Operations" },
      { name: "Smart Manufacturing for Carbon Neutrality" },
      { name: "Integration of Heterogeneous Sensing and Communication" },
      { name: "Convergence of Communication, Sensing, and Localization" },
    ],
  },
  {
    id: 6,
    name: "Environment and Infrastructure Monitoring",
    subTracks: [
      { name: "Environmental Monitoring: Air, Water, Soil, and Biodiversity" },
      { name: "Sensors and Systems for Climate Change Mitigation" },
      { name: "Structural Health Monitoring (SHM)" },
      { name: "Security and Access Control Systems" },
      { name: "Anomaly Detection in Electrical Equipment" },
      { name: "Disaster Response Systems" },
      { name: "Non-Intrusive and Networked Monitoring of Critical Installations" },
      { name: "Homeland and Defense Security" },
      { name: "Sensors and Systems for Carbon-Neutral Industry Practices" },
      { name: "Real-time Data Analytics" },
    ],
  },
  {
    id: 7,
    name: "Smart Cities and Villages",
    subTracks: [
      { name: "Optimum Utilisation of Natural Resources and Energy" },
      { name: "Transport Planning and Mobility" },
      { name: "Environmental Pollution Monitoring" },
      { name: "Security and Safety Control Systems" },
      { name: "Water Distribution and Harvesting" },
      { name: "Logistics and Supply Chain Optimization" },
      { name: "Improving Quality of Life and Happiness Index" },
      { name: "Sensing Systems for Energy Production, Distribution, Storage, and Consumption" },
      { name: "Green Energy and Renewable Energy Monitoring" },
      { name: "Sensors for Generating, Consuming, and Storing Renewable Energy" },
    ],
  },
  {
    id: 8,
    name: "Sensors Interfaces and Sensors Analytics",
    subTracks: [
      { name: "MEMS and NEMS Sensors & Actuators" },
      { name: "Micro- and Nanosystems Integration" },
      { name: "Fabrication and Manufacturing Techniques" },
      { name: "Micromechanical and Nanomechanical Systems" },
      { name: "Sensor Interfaces (Wired and Wireless)" },
      { name: "Hardware Interface Elements" },
      { name: "Crowdsensing and Participatory Sensing Systems" },
      { name: "Data Processing and Analytics" },
      { name: "Data Fusion Techniques" },
      { name: "Cloud, Fog, and Edge Computing in Sensor Networks" },
      { name: "Emerging Technologies and Applications" },
    ],
  },
  {
    id: 9,
    name: "Energy Managements, Electricity Market and Policy/ Regulatory Aspects",
    subTracks: [
      { name: "Electricity Market and Power System Economics" },
      { name: "Regulatory frameworks and policies" },
      { name: "New business models and transactive platforms" },
      { name: "Demand response flexibility and demand side management" },
      { name: "Local energy communities, prosumers, aggregators, and microgrids" },
      { name: "Energy Policy, Governance and Regulations" },
      { name: "Electricity Trading and Risk Management" },
      { name: "Decentralised Energy Systems and Virtual Power Plants (VPPs)" },
      { name: "Cybersecurity in Energy Systems" },
      { name: "Carbon Pricing and Cap-and-Trade Systems" },
      { name: "Electrification of Transportation" },
      { name: "Global Energy Market Trends and Geopolitical Considerations" },
      { name: "Green Hydrogen and Power-to-X Technologies" },
    ],
  },
  {
    id: 10,
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
      { name: "Cognitive Radio and Spectrum Management and Other Related Topics" },
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
  title="Track Details" 
 image="https://v1.nitj.ac.in/ITEP/img/01.jpg"
/>
      <section className="py-28 bg-white" id="CallForPapers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-4xl font-bold mb-16">
            Call For <span className="text-blue-600">Papers</span>
          </h2> */}
          <p className='text-blue-600 font-semibold mb-6 text-center text-4xl'>Sustainable Development-The Foundation of a Viksit Bharat</p>
          <p className="bg-indigo-50 text-black p-4 rounded-lg">
  Selected themes for the E2ACON 2025 proceedings are mainly comprising of the topics focusing on the new trends in the field of Electronics, Electrical, Automation, and Emerging Technologies.

  In addition to below, the organising committee of the conference also welcomes the proposals for special sessions on topics related to the field of interest of the conference.

  Following are the topics to be included in the call for paper:
</p>

          {/* Filter Section */}
          <div className="mb-8 mt-6">
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