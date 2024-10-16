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
    title: "Casimir Pulaski University of Radom, Poland.",
    organization: "",
    imageUrl:
      "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg",
    linkedInUrl:
      "https://www.linkedin.com/in/jerzy-ryszard-szymanski-b13726a7/?originalSubdomain=pl",
  },
  {
    id: 2,
    name: "DR. KHALID ABIDI",
    title: "Director of Education and Associate Professor, Newcastle University",
    organization: "Singapore",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQH24WqWcxHVmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516510955992?e=1732752000&v=beta&t=bT14KftKgnh_vhInvF7Xr6zz0WLE2YpO-qp_5ijlE6A",
    linkedInUrl:
      "https://www.linkedin.com/in/khalid-abidi-41277232/?originalSubdomain=sg",
  },
  {
    id: 3,
    name: "MR. SUBRAMANYAM PULIPAKA",
    title: "CEO, National Solar Energy Federation of",
    organization: "India",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQHUIq0apsta4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688753063031?e=1732147200&v=beta&t=QM3jPzo8fRWXI7NEx1r7wI6fnYewx5LD9pGsfZRBPOE",
    linkedInUrl: "https://www.linkedin.com/in/solarsubbu/?originalSubdomain=in",
  },
  {
    id: 4,
    name: "DR. PIYUSH VERMA",
    title: "Senior Governance Expert-Energy ",
    organization: "United Nations Development Programme (UNDP) , India",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQHcfhXe5NGL9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1566290376505?e=1732752000&v=beta&t=DmFq2E8X7YauDI1pS2ognyflMX3iNRpvuoxYXRUdWgQ",
    linkedInUrl: "https://www.linkedin.com/in/piyushnitjsr/",
  },
  {
    id: 5,
    name: "PROF. CELIA SHAHNAZ",
    title: "BUET, Bangladesh",
    organization: "",
    imageUrl:
      "data:image/jpeg;base64,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",
    linkedInUrl: "https://www.linkedin.com/in/celia-shahnaz-888ba6130/",
  },
  {
    id: 6,
    name: "Mr. ANDREI COVATARIU",
    title: "United Nations Economic Commission for Europe",
    organization: "Geneva,Switzerland",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQGFgBl_5pCxcA/profile-displayphoto-shrink_400_400/0/1708880080460?e=2147483647&v=beta&t=MqVsB9rjXbNGuOs25tz5ufKIGOeAC3CId9lbw2wz-cM",
    linkedInUrl: "https://www.linkedin.com/in/andreicovatariu?originalSubdomain=be",
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
