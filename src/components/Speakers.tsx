"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct LinkedIn import
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Correct arrow icon import

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  imageUrl: string;
  linkedInUrl: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Prof. JERZY R. SZYMANSKI",
    title: "Casimir Pulaski University of Radom, Poland",
    organization: "",
    imageUrl:
      "/jerzy_speaker.png",
    linkedInUrl:
      "https://www.linkedin.com/in/jerzy-ryszard-szymanski-b13726a7/?originalSubdomain=pl",
  },
  {
    id: 2,
    name: "DR. KHALID ABIDI",
    title: "Director of Education and Associate Professor, Newcastle University",
    organization: "Singapore",
    imageUrl:
      "/khalid_speaker.jpg",
    linkedInUrl:
      "https://www.linkedin.com/in/khalid-abidi-41277232/?originalSubdomain=sg",
  },
  {
    id: 3,
    name: "Dr. Marta Zurek-Mortka",
    title: "Head of Mechatronics and Prototyping Center",
    organization: "Institute for Sustainable Technologies, Poland",
    imageUrl:
      "/proff_marta.jpg",
    linkedInUrl: "https://www.linkedin.com/in/marta-%C5%BCurek-mortka-a12480175/?locale=en_US",
  },
  {
    id: 4,
    name: "DR. PIYUSH VERMA",
    title: "Senior Governance Expert-Energy ",
    organization: "United Nations Development Programme (UNDP) ,New York",
    imageUrl:
      "/piyush_speaker.jpg",
    linkedInUrl: "https://www.linkedin.com/in/piyushnitjsr/",
  },
  
  {
    id: 5,
    name: "Mr. ANDREI COVATARIU",
    title: "United Nations Economic Commission for Europe",
    organization: "Geneva,Switzerland",
    imageUrl:
      "/andrei_speaker.jpg",
    linkedInUrl: "https://www.linkedin.com/in/andreicovatariu?originalSubdomain=be",
  },
  {
    id: 6,
    name: "Mr. Randolph Brazier",
    title: "Global Head, Clean Power Systems | Sustainable Finance | Advisory Board Member",
    organization: "London , England , United Kingdom",
    imageUrl:
      "/randolph_brazier.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/randolph-brazier/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  // {
  //   id: 7,
  //   name: "Mr. Aditya Kushwah",
  //   title: "Technical Project Manager | Zero-Emission Fleet Transition | Techno-Economic Modeling",
  //   organization: "CALSTART, United States",
  //   imageUrl: "/adi_speaker.jpg",
  //   linkedInUrl: "https://www.linkedin.com/in/adityasing012194/"
  // },  
  {
    id: 8,
    name: "Prof Ramesh Bansal",
    title: "Microgrids & DG | PV & Wind| Smart Grids",
    organization: "University of Sharjah and the University of Pretoria",
    imageUrl: "/ramesh.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/ramesh-bansal-34115b91/"
  },  
  {
    id: 9,
    name: "Dr. Shahroz Anjum",
    title: "Power Generation Engineer",
    organization: "Alliant Energy, USA",
    imageUrl: "/shahroz_anjum.jpg",
    linkedInUrl: "https://www.linkedin.com/in/shahroz-anjum-ph-d-41089251/"
  }, 

];

const SpeakerCard: React.FC<Speaker> = ({
  name,
  title,
  organization,
  imageUrl,
  linkedInUrl,
}) => (
  <div className="relative group w-full h-72 sm:h-80 bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={`Photo of ${name}`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-gradient-to-t from-black via-transparent">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">{title}</p>
          <p className="text-sm">{organization}</p>
          <div className="flex justify-center items-center mt-2 space-x-4">
            {/* LinkedIn icon */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            {/* Keynote page link */}
            <a
              href="/Keynote"
              className="text-blue-400 hover:text-blue-600"
              aria-label="Keynote"
            >
              <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6" />
            </a>
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
        <div className="text-center">
          <a href="/Registration" rel="noopener noreferrer">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
              Register Now!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertSpeakers;
