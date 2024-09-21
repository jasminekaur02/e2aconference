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
    image: "/proffjerzy.jpg",
    description: "Jerzy Ryszard Szymanski is working as a scientific worker and an academic lecturer at the University of Technology and Humanities in Radom, Poland on Professor position in the Faculty of Transport, Electrical and Computer Sciences in the Department of Electric Drives and Industrial Electronics. He has over 30 years of teaching and research experience in the diverse ﬁeld of Power Electronic Engineering. His areas of interest include: Power Electronics Converters in Drive Applications, Application of High Frequency Converter in PV and EV Systems, Electromagnetic Compatibility in Power Converters Systems, Hybrid power systems, Exploitation Safety of Electrical Equipment. He is actively involved in the various research projects and international activities (Bilateral and Erasmus/CEEPUS exchange). He has published over 100 research articles in the reputed national/international journals and conferences including 20 research papers in the SCI-indexed journals. He is a member of the Reviewer Board and Editorial Board of reputed Journals, such as MDPI, Springer, and Elsevier. He has also authored and co-authored books in the reputed publishing houses. "
  },
  {
    name: "DR. AJAY MATHUR",
    image: "/ajaymathur.jpeg",
    description: "Dr. Ajay Mathur is the Director General of the International Solar Alliance (ISA), a multilateral organization established to catalyze global solar growth. He previously served as Director General of The Energy and Resources Institute (TERI) and the Bureau of Energy Efficiency in India. He was a key figure in India's climate change negotiations and served as interim Director of the Green Climate Fund. Dr. Mathur holds degrees from the University of Roorkee and the University of Illinois and has received numerous awards for his contributions to energy and climate change."
  },
  {
    name: "MR. SUBRAMANYAM PULIPAKA",
    image: "/subhramanyam.jpeg",
    description: "Subrahmanyam is the youngest Chief Executive Officer of National Solar Energy Federation of India. Subrahmanyam, who is BITSAA Global 30 Under 30 Award recipient, is an alumnus of BITS Pilani in Electrical & Electronics Engineering and is one of the youngest winners of BRICS young scientist award - 2018. Well known Speaker at various Solar and RE events in India,Pulipaka represented India in various scientific and technology platforms worldwide including United States, China, Russia and Rwanda. With a research background in reliability of solar PV modules, he has published around 15 research articles in internationally acclaimed journals. He is also the founding chairman of India Africa Youth Energy Forum, a platform dedicated to nurture future energy leaders in the Indian subcontinent and African continent."
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
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
      />

      {/* Page content */}
      <div className="flex flex-col flex-grow items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 w-full">
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
                {/* Bottom Border */}
                <div className="border-b border-gray-400 mt-10"></div>
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
