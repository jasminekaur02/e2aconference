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
    image: "/jerzy_speaker.png",
     description: "Jerzy Ryszard Szymanski works as a scientific worker and an academic lecturer at the University of Technology and Humanities in Radom, Poland, in a Professor position in the Faculty of Transport, Electrical and Computer Sciences in the Department of Electric Drives and Industrial Electronics. He has over 30 years of teaching and research experience in the diverse ﬁeld of Power Electronic Engineering. His areas of interest include Power Electronics Converters in Drive Applications, Application of High-Frequency Converter in PV and EV Systems, Electromagnetic Compatibility in Power Converters Systems, Hybrid power Systems, and Exploitation Safety of Electrical Equipment. He actively participates in research projects and international activities (Bilateral and Erasmus/CEEPUS exchange). He has published over 100 research articles in reputed national/international journals and conferences, including 20 research papers in SCI-indexed journals. He is a member of the Reviewer and Editorial Board of reputed Journals, such as MDPI, Springer, and Elsevier. He has also authored and co-authored books in reputed publishing houses.",
    scholar: "https://scholar.google.co.in/citations?user=r7mZ1McAAAAJ&hl=en",
    website: "https://www.researchgate.net/profile/Jerzy-Szymanski"
  },
  {
    name: "DR. KHALID ABIDI",
    image: "/khalid_speaker.jpg",
    description: "Khalid Abidi (Member, IEEE) received a Ph.D. degree in electrical and computer engineering with a specialization in control engineering from the National University of Singapore, Singapore, in 2009; he was an Assistant Professor of Mechatronics Engineering with Bahcesehir University, Istanbul, Turkey, from 2009 to 2014. He is currently a Lecturer in Electrical Power Engineering at Newcastle University, Singapore. He has authored over 30 papers on systems and control theory.",
    linkedin: "https://www.linkedin.com/in/khalid-abidi-41277232/?originalSubdomain=sg",
  },
  {
    name: "Dr. MARTA ZUREK-MORTKA",
    image: "/proff_marta.jpg",
     description: "Dr. Zurek-Mortka is a renowned expert in electrical engineering, specializing in sustainable technologies and renewable energy. With over 30 publications and five patents, her work in electromobility, renewable energy, and AI has made her a sought-after speaker. As a member of the Polish Association of Electrical Engineers and an expert for the European Commission and National Centre for Research and Development, she’s shaping the future of sustainable technology. Her groundbreaking work on hydrogen production, waste heat conversion, and renewable energy-based electromobility is making a significant impact. Congratulations, Dr. Zurek-Mortka, on this well-deserved recognition!",
     linkedin: "https://www.linkedin.com/in/marta-%C5%BCurek-mortka-a12480175/?locale=en_US",
  },
  {
    name: "DR. PIYUSH VERMA",
    image: "/piyush_speaker.jpg",
    description: "Piyush Verma is a Senior Advisor at the United Nations Development Programme (UNDP), leading global initiatives for a just energy transition. He has extensive experience in energy and climate policy, having worked on national policies for various countries. Verma has been recognized for his contributions to the field, serving as a Global Future Energy Leader and chairing a UNECE task force. He has published numerous articles and reports on energy and climate issues. Verma holds a PhD in Energy Technology and Policy and a Master's in Public Administration. He is a frequent public speaker, presenting at high-level forums worldwide. His expertise and leadership have made him a prominent energy and climate policy figure.",
    linkedin: "https://www.linkedin.com/in/piyushnitjsr/",
    website: "https://www.undp.org/authors/piyush-verma",

  },
  {
  
    name: "Mr. Randolph Brazier",
    description: "Mr Randolph Brazier is a  Global Head of Clean Power Systems at HSBC, and he has also participated in a range of sustainability and climate related Advisory Boards, for example at the UNECE and World Economic Forum.He has an M.Phil in Engineering for Sustainable Development from the University of Cambridge, and He is a regular presenter and panellist at a wide range of sustainability and clean investment focused events. ",
    image:
      "/randolph_brazier.jpeg",
    linkedin: "https://www.linkedin.com/in/randolph-brazier/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  

  // {
  //   name: "PROF. CELIA SHAHNAZ",
  //   image: "data:image/jpeg;base64,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",
  //   description: "Celia Shahnaz, SMIEEE, Fellow IEB, received a Ph.D. degree from Concordia University, Canada, and has been a professor at the Department of EEE, BUET, Bangladesh, since 2015. She was the winner of the Canadian Common Scholarship for pursuing her Ph.D study in Canada and the recipient of the Bangladesh Academy of Science Gold Medal for her contributions to science and technology. The World Academy of Science (TWAS) members have elected her as a TWAS Fellow for advancing science in developing countries, effective 1 January 2023. Recently, her nomination has been approved, and she was inducted into IEEE-Eta Kappa Nu as a Professional Member of the Eta Chapter of the Board of Governors. ",
  //   linkedin: "https://www.linkedin.com/in/celia-shahnaz-888ba6130/",
  //   website: "https://eee.buet.ac.bd/people/faculty/dcs",

  // },
  {
    name: "Mr. ANDREI COVATARIU",
    image: "/andrei_speaker.jpg",
    description: "Andrei Covatariu is an international energy and climate change expert. His activity focuses on climate and energy policies, concentrating on the energy transition process and its geopolitical, economic, and social challenges. Andrei's views and policy analyses are constantly published and cited in international media. Andrei is currently the Co-Chair of the Task Force on “Digitalization in Energy” and a Vice-Chair of the Group of Experts on Energy Efficiency at the United Nations Economic Commission for Europe (UNECE). He is also a consultant for the Public Power Corporation (PPC) utility company in Greece, acting as a Climate Policy Advisor for the CEO & Chairman.",
    linkedin: "https://www.linkedin.com/in/andreicovatariu?originalSubdomain=be",
    website: "https://scholar.google.com/citations?hl=en&user=RhbttjcAAAAJ",

  },
  {
    name: "Mr. Aditya Kushwah",
    description: "Mr. Aditya Kushwah is a Technical Project Manager at CALSTART. He investigates the techno-economic feasibility of transitioning to zero-emission fleets and develops business cases for fleet decarbonization. Aditya specializes in techno-economic modeling of distributed energy resources, microgrids, energy modeling, GHG inventories, and cost-benefit analyses for zero-emission fleet transitions. Prior to CALSTART, Aditya worked at the Schatz Energy Research Center and at Terra Motors (an EV manufacturing company based in India and Japan). Aditya holds an MS in Energy Technology and Policy from Cal Poly Humboldt and a BS in Mechanical and Automation Engineering.",
    image: "/adi_speaker.jpg",
    linkedin: "https://www.linkedin.com/in/adityasing012194/"
  }, 
  {
    name: "Prof Ramesh Bansal",
    description: "Prof. Ramesh Bansal is a distinguished academic affiliated with both the University of Sharjah and the University of Pretoria. His extensive research encompasses areas such as Microgrids, Distributed Generation, Photovoltaic Systems, Wind Power Systems, and Smart Grids. Prof. Bansal has amassed over 22,000 citations, reflecting the significant impact of his work in the field of renewable energy. His h-index of 70 and i10-index of 271 further underscore his substantial contributions to academia. Throughout his career, Prof. Bansal has collaborated with numerous scholars worldwide, advancing research in sustainable energy solutions. His dedication to integrating renewable energy into modern power systems has positioned him as a leading expert in the transition towards sustainable energy infrastructures.",
    image: "/ramesh.jpeg",
    linkedin: "https://www.linkedin.com/in/ramesh-bansal-34115b91/"
  }, 
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
