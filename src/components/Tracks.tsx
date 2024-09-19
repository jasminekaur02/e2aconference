import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

interface Track {
  id: number;
  name: string;
  description: string;
}

const tracks: Track[] = [
  {
    id: 1,
    name: "Advances in Electrical Engineering",
    description: "Advances in Electrical Systems including Power Generation, Smart Grids, and Renewable Energy Solutions."
  },
  {
    id: 2,
    name: "Smart Electronics and Communications",
    description: "Smart Electronics and Communications focusing on VLSI Design, Embedded Systems, and 5G/6G Technologies."
  },
  {
    id: 3,
    name: "Instrumentation and Automation",
    description: "Instrumentation and Automation with emphasis on Robotics, Control Systems, and Sensor Technologies."
  },
  {
    id: 4,
    name: "Medical and Digital Healthcare",
    description: "Medical and Digital Healthcare covering Wearable Devices, AI in Healthcare, and Remote Monitoring."
  },
  {
    id: 5,
    name: "Industry 5.0, Manufacturing and Automation",
    description: "Industry 5.0, Manufacturing and Automation focusing on IoT, Big Data, and Smart Manufacturing Practices."
  },
  {
    id: 6,
    name: "Environment and Infrastructure Monitoring",
    description: "Environment and Infrastructure Monitoring , Sensors and Systems for Climate Change Mitigation"
  },
];

const TrackCard: React.FC<Track> = ({ name, description }) => (
  <div className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow-sm">
    <h3 className="text-blue-600 font-semibold mb-2 text-lg sm:text-xl">{name}</h3>
    <p className="text-gray-700 text-sm sm:text-base">{description}</p>
    {/* Learn More Link */}
    <Link href="/CallforPapers/papersubmission" className="text-blue-800 mt-4 inline-block">
      Learn More
    </Link>
  </div>
);

const AdditionalContent: React.FC = () => (
    <h3 className=" text-gray-300 text-xl mb-4">and many more...</h3>

);

const CallForPapers: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white" id="CallForPapers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center sm:text-left">
          Call For <span className="text-blue-600">Papers</span>
        </h2>

        {/* Responsive Grid for Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {tracks.map((track) => (
            <TrackCard key={track.id} {...track} />
          ))}
        </div>
        <a href="/CallforPapers/papersubmission"  rel="noopener noreferrer">
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </div>
        </a>
      </div>
    </section>
  );
};

export default CallForPapers;
