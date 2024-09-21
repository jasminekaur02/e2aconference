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
    name: "Prof. JERZY R. SZYMANSKI",
    title: "Kazimierz Pulaski University of Technology and Humanities,Poland.",
    organization: "",
    imageUrl: "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg"
  },
  {
    id: 2,
    name: "DR. AJAY MATHUR",
    title: "Director General, International Solar",
    organization: "Alliance",
    imageUrl: "https://i0.wp.com/www.mojo4industry.com/wp-content/uploads/2021/02/international-solar-alliance-appoints-dr-ajay-mathur-as-its-new-dg.jpg?fit=853%2C483&ssl=1"
  },
  {
    id: 3,
    name: "MR. SUBRAMANYAM PULIPAKA",
    title: "CEO, National Solar Energy Federation of",
    organization: "India",
    imageUrl: "https://media.licdn.com/dms/image/D4D03AQHUIq0apsta4Q/profile-displayphoto-shrink_200_200/0/1688753063031?e=2147483647&v=beta&t=w30bORqQ7jZeFbzkf2cwKgmMdskPFMokzaebzNc8p-I"
  },
];

const SpeakerCard: React.FC<Speaker> = ({ name, title, organization, imageUrl }) => (
  <div className="relative group w-full h-72 sm:h-80 bg-white rounded-lg shadow-lg overflow-hidden"> {/* Adjust height */}
    <div className="relative w-full h-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-gradient-to-t from-black via-transparent">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">{title}</p>
          <p className="text-sm">{organization}</p>
          <div className="flex justify-center items-center mt-2 text-blue-400">
            <span className="mr-1"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L13.586 10H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExpertSpeakers: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 mb-2 text-center sm:text-left">
          SPEAKERS FROM ACADEMIA/INDUSTRY
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
          Expert <span className="text-blue-600">Speakers</span>
        </h2>
        
        {/* Speaker cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-hidden sm:gap-8 mb-12">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
        
        {/* CTA Button */}
        <a href="/Registration" rel="noopener noreferrer">
        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
            Register Now!
          </button>
        </div>
        </a>
      </div>
    </section>
  );
};

export default ExpertSpeakers;