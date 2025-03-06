import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe, FaGoogle } from 'react-icons/fa';

const guests = [
  {
    name: "Prof. Jerzy R. Szymanski",
    designation: "Casimir Pulaski University of Radom, Poland",
    google: "https://scholar.google.co.in/citations?user=r7mZ1McAAAAJ&hl=en",
    website: "https://www.researchgate.net/profile/Jerzy-Szymanski",
    image: "/jerzy_speaker.png",
    title: "Chief Guest"
  },
  {
    name: "Dr. K.K.Deepak",
    designation: "AIIMS, New Delhi(India)",
    linkedin: "https://www.linkedin.com/in/kkdeepak/?originalSubdomain=in",
    google: "https://scholar.google.com/citations?user=cvgzaiIAAAAJ&hl=en",
    website: "https://www.kkdeepak.com/",
    image: "/kalyanmoy_deb.png",
    title: "Guest of Honour"
  },
  {
    name: "Prof. Robert Brown",
    designation: "Harvard University, USA",
    linkedin: "https://www.linkedin.com/in/robert-profile",
    google: "https://scholar.google.com/citations?user=robert-profile",
    website: "https://www.harvard.edu/robert",
    image: "/robert_brown.png",
    title: "Guest of Honour"
  },
  {
    name: "Prof. Emma Johnson",
    designation: "Cambridge University, UK",
    linkedin: "https://www.linkedin.com/in/emma-profile",
    google: "https://scholar.google.com/citations?user=emma-profile",
    website: "https://www.cam.ac.uk/emma",
    image: "/emma_johnson.png",
    title: "Guest of Honour"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ChiefGuest = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden text-center p-10"
    >
      <h2 className="text-4xl font-bold mb-12">
        Chief&nbsp;<span className="text-blue-600">Guest</span>
      </h2>
      <motion.div
        className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-600 mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={guests[0].image}
          alt={guests[0].name}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <h3 className="text-2xl font-bold mb-2 text-blue-900">{guests[0].name}</h3>
      <p className="text-sm text-spotlight-red mb-4">{guests[0].designation}</p>
      <div className="flex justify-center gap-4 mb-12">
        {guests[0].linkedin && (
          <motion.a href={guests[0].linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
            <FaLinkedin size={20} className="text-blue-600" />
          </motion.a>
        )}
        {guests[0].google && (
          <motion.a href={guests[0].google} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
            <FaGoogle size={20} className="text-red-600" />
          </motion.a>
        )}
        {guests[0].website && (
          <motion.a href={guests[0].website} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
            <FaGlobe size={20} className="text-green-600" />
          </motion.a>
        )}
      </div>

      <h2 className="text-4xl font-bold mb-8">
        Guests of&nbsp;<span className="text-blue-600">Honour</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guests.slice(1).map((guest, index) => (
          <motion.div
            key={index}
            className="text-center p-4 bg-white shadow-lg rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-600 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={guest.image}
                alt={guest.name}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">{guest.name}</h3>
            <p className="text-sm text-spotlight-red mb-4">{guest.designation}</p>
            <div className="flex justify-center gap-4">
              {guest.linkedin && (
                <motion.a href={guest.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                  <FaLinkedin size={20} className="text-blue-600" />
                </motion.a>
              )}
              {guest.google && (
                <motion.a href={guest.google} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                  <FaGoogle size={20} className="text-red-600" />
                </motion.a>
              )}
              {guest.website && (
                <motion.a href={guest.website} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                  <FaGlobe size={20} className="text-green-600" />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChiefGuest;
