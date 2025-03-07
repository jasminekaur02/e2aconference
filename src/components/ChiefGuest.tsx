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
    designation: "AIIMS, New Delhi (India)",
    linkedin: "https://www.linkedin.com/in/kkdeepak/?originalSubdomain=in",
    google: "https://scholar.google.com/citations?user=cvgzaiIAAAAJ&hl=en",
    website: "https://www.kkdeepak.com/",
    image: "/dr_deepak.jpg",
    title: "Guest of Honour"
  },
  {
    name: "Dr. Marta Zurek-Mortka",
    designation: "Institute for Sustainable Technologies, Poland",
    linkedin: "https://www.linkedin.com/in/marta-%C5%BCurek-mortka-a12480175/?locale=en_US",
    image: "/proff_marta.jpg",
    title: "Guest of Honour"
  },
  {
    name: "Prof Ramesh Bansal",
    designation: "University of Sharjah and the University of Pretoria",
    linkedin: "https://www.linkedin.com/in/ramesh-bansal-34115b91/",
    image: "/ramesh.jpeg",
    title: "Guest of Honour"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const ChiefGuest = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white shadow-xl rounded-3xl overflow-hidden text-center p-6 sm:p-10 hover:shadow-blue-600/50 transition-shadow duration-700"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 tracking-wide text-black">
        Chief&nbsp;<span className="text-blue-600">Guest</span>
      </h2>
      <motion.div
        className="relative w-32 sm:w-40 h-32 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-6"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={guests[0].image} alt={guests[0].name} layout="fill" objectFit="cover" />
      </motion.div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-900">{guests[0].name}</h3>
      <p className="text-lg sm:text-xl text-spotlight-red italic mb-4">{guests[0].designation}</p>
      <div className="flex justify-center gap-6 mb-10">
        {guests[0].linkedin && (
          <motion.a href={guests[0].linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <FaLinkedin size={30} className="text-blue-600 hover:text-blue-900 transition duration-300" />
          </motion.a>
        )}
        {guests[0].google && (
          <motion.a href={guests[0].google} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <FaGoogle size={30} className="text-red-600 hover:text-red-900 transition duration-300" />
          </motion.a>
        )}
        {guests[0].website && (
          <motion.a href={guests[0].website} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <FaGlobe size={30} className="text-green-600 hover:text-green-900 transition duration-300" />
          </motion.a>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-black">
        Guests of&nbsp;<span className="text-blue-600">Honour</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {guests.slice(1).map((guest, index) => (
          <motion.div
            key={index}
            className="text-center p-4 sm:p-6 bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-blue-500/50 transition duration-700"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative w-28 sm:w-32 h-28 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-600 mb-4 shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={guest.image} alt={guest.name} layout="fill" objectFit="cover" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-900">{guest.name}</h3>
            <p className="text-md sm:text-lg text-spotlight-red italic mb-4">{guest.designation}</p>
            <div className="flex justify-center gap-6">
              {guest.linkedin && (
                <motion.a href={guest.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                  <FaLinkedin size={25} className="text-blue-600 hover:text-blue-900 transition duration-300" />
                </motion.a>
              )}
              {guest.google && (
                <motion.a href={guest.google} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                  <FaGoogle size={25} className="text-red-600 hover:text-red-900 transition duration-300" />
                </motion.a>
              )}
              {guest.website && (
                <motion.a href={guest.website} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                  <FaGlobe size={25} className="text-green-600 hover:text-green-900 transition duration-300" />
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
