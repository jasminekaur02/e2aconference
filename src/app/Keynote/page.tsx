"use client";
import React, { useState } from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface Speaker {
  name: string;
  image: string;
  description: string;
  linkedin?: string;
  scholar?: string;
  website?: string;
}

const speakers: Speaker[] = [
  {
    name: "Prof. JERZY R. SZYMANSKI",
    image: "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg",
     description: "Jerzy Ryszard Szymanski is working as a scientific worker and an academic lecturer at the University of Technology and Humanities in Radom, Poland on Professor position in the Faculty of Transport, Electrical and Computer Sciences in the Department of Electric Drives and Industrial Electronics. He has over 30 years of teaching and research experience in the diverse ﬁeld of Power Electronic Engineering. His areas of interest include: Power Electronics Converters in Drive Applications, Application of High Frequency Converter in PV and EV Systems, Electromagnetic Compatibility in Power Converters Systems, Hybrid power systems, Exploitation Safety of Electrical Equipment. He is actively involved in the various research projects and international activities (Bilateral and Erasmus/CEEPUS exchange). He has published over 100 research articles in the reputed national/international journals and conferences including 20 research papers in the SCI-indexed journals. He is a member of the Reviewer Board and Editorial Board of reputed Journals, such as MDPI, Springer, and Elsevier. He has also authored and co-authored books in the reputed publishing houses. ",
    scholar: "https://scholar.google.co.in/citations?user=r7mZ1McAAAAJ&hl=en",
    website: "https://www.researchgate.net/profile/Jerzy-Szymanski"
  },
  {
    name: "DR. KHALID ABIDI",
    image: "https://media.licdn.com/dms/image/v2/C5603AQH24WqWcxHVmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516510955992?e=1732752000&v=beta&t=bT14KftKgnh_vhInvF7Xr6zz0WLE2YpO-qp_5ijlE6A",
    description: "Khalid Abidi (Member, IEEE) received the Ph.D. degree in electrical and computer engineering with a specialization in control engineering from the National University of Singapore, Singapore, in 2009.,He was an Assistant Professor of Mechatronics Engineering with Bahcesehir University, Istanbul, Turkey, from 2009 to 2014. He is currently a Lecturer of Electrical Power Engineering with Newcastle University, Singapore. He has authored over 30 papers in systems and control theory.",
    linkedin: "https://www.linkedin.com/in/khalid-abidi-41277232/?originalSubdomain=sg",
  },
  {
    name: "MR. SUBRAMANYAM PULIPAKA",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHUIq0apsta4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688753063031?e=1732147200&v=beta&t=QM3jPzo8fRWXI7NEx1r7wI6fnYewx5LD9pGsfZRBPOE",
     description: "Subrahmanyam is the youngest Chief Executive Officer of National Solar Energy Federation of India. Subrahmanyam, who is BITSAA Global 30 Under 30 Award recipient, is an alumnus of BITS Pilani in Electrical & Electronics Engineering and is one of the youngest winners of BRICS young scientist award - 2018. Well known Speaker at various Solar and RE events in India,Pulipaka represented India in various scientific and technology platforms worldwide including United States, China, Russia and Rwanda. With a research background in reliability of solar PV modules, he has published around 15 research articles in internationally acclaimed journals. He is also the founding chairman of India Africa Youth Energy Forum, a platform dedicated to nurture future energy leaders in the Indian subcontinent and African continent.",
     linkedin: "https://www.linkedin.com/in/solarsubbu/?originalSubdomain=in",
  },
  {
    name: "DR. PIYUSH VERMA",
    image: "https://media.licdn.com/dms/image/v2/C5603AQHcfhXe5NGL9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1566290376505?e=1732752000&v=beta&t=DmFq2E8X7YauDI1pS2ognyflMX3iNRpvuoxYXRUdWgQ",
    description: "Piyush Verma is a Senior Advisor at the United Nations Development Programme (UNDP), leading global initiatives for a just energy transition. He has extensive experience in energy and climate policy, having worked on national policies for various countries. Verma has been recognized for his contributions to the field, serving as a Global Future Energy Leader and chairing a UNECE task force. He has published numerous articles and reports on energy and climate issues. Verma holds a PhD in Energy Technology and Policy and a Master in Public Administration. He is a frequent public speaker, presenting at high-level forums worldwide. His expertise and leadership have made him a prominent figure in the field of energy and climate policy.",
    linkedin: "https://www.linkedin.com/in/piyushnitjsr/",
    website: "https://www.undp.org/authors/piyush-verma",

  }
  // Add other speakers here
];

const SpeakerPage: React.FC = () => {
  const [expandedSpeakers, setExpandedSpeakers] = useState<{ [key: number]: boolean }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedSpeakers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
        title="Keynote Speakers" 
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
      />
      <div className="flex flex-col flex-grow items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 w-full">
        <div className="max-w-6xl w-full">
          {speakers.map((speaker, index) => {
            const isImageOnRight = index % 2 === 0;
            const isExpanded = expandedSpeakers[index];

            return (
              <div 
                key={speaker.name} 
                className={`bg-white p-4 lg:p-8 flex flex-col cursor-default lg:flex-row items-center mb-12 ${isImageOnRight ? 'lg:flex-row-reverse lg:rounded-br-full' : 'lg:rounded-bl-full'} shadow-md transition-transform duration-300 transform hover:translate-y-[-5px] hover:shadow-lg`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full lg:w-1/3 mb-4 lg:mb-0 flex flex-col items-center">
                  <Image
                    src={speaker.image}
                    alt={speaker.name || "Speaker Image"}
                    width={200}
                    height={200}
                    className="rounded-full shadow-lg object-cover"
                  />
                  <div className="mt-4 flex justify-center space-x-4">
                    {speaker.linkedin && (
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl hover:text-blue-500" />
                      </a>
                    )}
                    {speaker.scholar && (
                      <a href={speaker.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                        <FontAwesomeIcon icon={faGoogle} className="text-red-600 text-2xl hover:text-red-400" />
                      </a>
                    )}
                    {speaker.website && (
                      <a href={speaker.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                        <FontAwesomeIcon icon={faGlobe} className="text-green-700 text-2xl hover:text-green-500" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-2/3 lg:px-8 text-center lg:text-left relative">
                  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2 relative group">
                    {speaker.name}
                    <span 
                      className={`absolute left-0 h-1 bg-blue-600 transition-all duration-300 transform ${hoveredIndex === index ? 'w-full' : 'w-0'}`} 
                      style={{ bottom: '-5px' }}
                    ></span>
                  </h2>
                  {/* Always show full text for lg screens and toggle for smaller screens */}
                  <p className={`text-gray-800 ${isExpanded ? 'block' : 'line-clamp-5 lg:line-clamp-none'} overflow-hidden`}>
                    {speaker.description}
                  </p>
                  {/* Read More / Read Less button for sm and md devices only */}
                  <div className="">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-600 hover:text-blue-500 mt-2 lg:hidden"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpeakerPage;
