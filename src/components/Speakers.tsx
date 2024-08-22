import React from 'react';
import Image from 'next/image';

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "PROF. MARTA ZUREK-MORTKA",
    title: "Institute for Sustainable Technologies, Poland",
    organization: "",
    imageUrl: "/speakers/marta-zurek-mortka.jpg"
  },
  {
    id: 2,
    name: "DR. AJAY MATHUR",
    title: "Director General, International Solar",
    organization: "Alliance",
    imageUrl: "/speakers/ajay-mathur.jpg"
  },
  {
    id: 3,
    name: "MR. SUBRAMANYAM PULIPAKA",
    title: "CEO, National Solar Energy Federation of",
    organization: "India",
    imageUrl: "/speakers/subramanyam-pulipaka.jpg"
  },
];

const SpeakerCard: React.FC<Speaker> = ({ name, title, organization, imageUrl }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-48 h-48 mb-4">
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <h3 className="text-lg font-semibold text-center">{name}</h3>
    <p className="text-sm text-gray-600 text-center">{title}</p>
    <p className="text-sm text-gray-600 text-center">{organization}</p>
  </div>
);

const ExpertSpeakers: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 mb-2">KEYNOTES FROM THE INDUSTRY EXPERTS</p>
        <h2 className="text-4xl font-bold mb-12">
          Expert <span className="text-blue-600">Speakers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {speakers.map(speaker => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
            Get Your Tickets Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertSpeakers;