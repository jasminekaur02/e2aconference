import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';  
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface Speaker {
  name: string;
  image: string;
  description: string;
}

const speakers: Speaker[] = [
  {
    name: "Prof. JERZY R. SZYMANSKI",
    image: "",
    description: "Dr. Jane Smith is a renowned expert in artificial intelligence, with over 20 years of experience in the field. She has published numerous papers on machine learning and neural networks."
  },
  {
    name: "Prof. John Doe",
    image: "/images/john-doe.jpg",
    description: "Prof. John Doe is a leading researcher in quantum computing. He has been instrumental in developing new algorithms that push the boundaries of quantum information processing."
  },
  {
    name: "Prof. John Doe",
    image: "/images/john-doe.jpg",
    description: "Prof. John Doe is a leading researcher in quantum computing. He has been instrumental in developing new algorithms that push the boundaries of quantum information processing."
  },
  {
    name: "Prof. John Doe",
    image: "/images/john-doe.jpg",
    description: "Prof. John Doe is a leading researcher in quantum computing. He has been instrumental in developing new algorithms that push the boundaries of quantum information processing."
  },
  {
    name: "Prof. John Doe",
    image: "/images/john-doe.jpg",
    description: "Prof. John Doe is a leading researcher in quantum computing. He has been instrumental in developing new algorithms that push the boundaries of quantum information processing."
  },
  // Add more speakers as needed
];

const SpeakerPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-indigo-50">
      <HeaderTop isHomePage={false} />
      <Navbar />

      {/* Full-width Hero */}
      <PageHero 
        title="Keynote Speakers" 
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg"  // Ensure the image URL is correct
      />

      {/* Page content */}
      <div className="flex flex-col flex-grow items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 w-full">
     

        {/* Speaker list */}
        <div className="max-w-6xl w-full">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.name} 
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Speaker image */}
              <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
                <Image
                  src={speaker.image}
                  alt={speaker.name || "Speaker Image"}
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg object-cover"
                />
              </div>

              {/* Speaker details */}
              <div className="w-full md:w-2/3 md:px-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-2 text-center md:text-left">{speaker.name}</h2>
                <p className="text-gray-800 text-center md:text-left">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpeakerPage;
