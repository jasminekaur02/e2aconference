import React from 'react';

interface Track {
  id: number;
  name: string;
  description: string;
}

const tracks: Track[] = [
  {
    id: 1,
    name: "Track 2",
    description: "Smart Electronics and Communications"
  },
  {
    id: 2,
    name: "Track 2",
    description: "Smart Electronics and Communications"
  },
  {
    id: 3,
    name: "Track 2",
    description: "Smart Electronics and Communications"
  },
  {
    id: 4,
    name: "Track 2",
    description: "Smart Electronics and Communications"
  },
  {
    id: 5,
    name: "Track 2",
    description: "Smart Electronics and Communications"
  },
];

const TrackCard: React.FC<Track> = ({ name, description }) => (
  <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
    <h3 className="text-blue-600 font-semibold mb-2">{name}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CallForPapers: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-2">Call For</h2>
        <h2 className="text-5xl font-bold text-blue-600 mb-12">Papers</h2>
        
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