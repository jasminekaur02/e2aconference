import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Importing a different icon

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  imageUrl: string;
  linkedInUrl: string;
  redirectUrl: string; // New property for redirection
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Prof. JERZY R. SZYMANSKI",
    title: "Kazimierz Pulaski University of Technology and Humanities, Poland.",
    organization: "",
    imageUrl: "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg",
    linkedInUrl: "https://www.linkedin.com/in/jerzy-ryszard-szymanski-b13726a7/?originalSubdomain=pl",
    redirectUrl: "/Keynote" // Example redirect URL
  },
  {
    id: 2,
    name: "DR. AJAY MATHUR",
    title: "Director General, International Solar",
    organization: "Alliance",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQH1lfxQsCEFHA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660797938009?e=1732147200&v=beta&t=SU9VnxB1hQtFhE9vg7ZBYyTiHeAZsdzd7xhGeehAiu0",
    linkedInUrl: "https://www.linkedin.com/in/international-solar-alliance/?originalSubdomain=in",
    redirectUrl: "/Keynote" // Example redirect URL
  },
  {
    id: 3,
    name: "MR. SUBRAMANYAM PULIPAKA",
    title: "CEO, National Solar Energy Federation of",
    organization: "India",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHUIq0apsta4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688753063031?e=1732147200&v=beta&t=QM3jPzo8fRWXI7NEx1r7wI6fnYewx5LD9pGsfZRBPOE",
    linkedInUrl: "https://www.linkedin.com/in/solarsubbu/?originalSubdomain=in",
    redirectUrl: "/Keynote" // Example redirect URL
  },
];

const SpeakerCard: React.FC<Speaker> = ({ name, title, organization, imageUrl, linkedInUrl, redirectUrl }) => {
  const handleRedirect = () => {
    window.open(redirectUrl, '_self'); // Open the redirect URL in a new tab
  };

  return (
    <div className="relative group w-full h-72 sm:h-80 bg-white rounded-lg shadow-lg overflow-hidden">
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
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mr-2" />
              </a>
              <div className="cursor-pointer hover:text-blue-600 transition" onClick={handleRedirect}>
                <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6" /> {/* Right arrow icon */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
