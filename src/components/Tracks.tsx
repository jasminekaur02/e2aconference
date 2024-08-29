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
    name: "Track 1",
    description: "Advances in Electrical Systems"
  },
  {
    id: 2,
    name: "Track 2",
    description: "Smart Electronics and Communications"
  },
  {
    id: 3,
    name: "Track 3",
    description: "Instrumentation and Automation"
  },
  {
    id: 4,
    name: "Track 4",
    description: "Emerging Technologies"
  },
  {
    id: 5,
    name: "Track 5",
    description: "Special Tracks on Renewable Energy"
  },
];

const TrackCard: React.FC<Track> = ({ name, description }) => (
  <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
    <h3 className="text-blue-600 font-semibold mb-2">{name}</h3>
    <p className="text-gray-700">{description}</p>
    {/* Learn More Link */}
    <Link href="/call-for-papers" className="text-blue-800 mt-4 inline-block">
      Learn More
    </Link>
  </div>
);

const CallForPapers: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="CallForPapers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">
          Call For {" "}
          <span className="text-blue-600">Papers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tracks.map(track => (
            <TrackCard key={track.id} {...track} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;