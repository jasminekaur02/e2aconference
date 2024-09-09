import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import React from 'react';
import { FaEnvelope, FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// Faculty contact information array
const facultyContacts = [
  {
    name: 'Dr. Richa Sharma',
    affiliation: 'Assistant Professor, NIT Jalandhar',
    email: 'richas@nitj.ac.in',
    website: 'https://www.nitj.ac.in/faculty/richa_sharma',
    photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
  },
  {
    name: 'Dr. Anil Kumar Yadav',
    affiliation: 'Assistant Professor, NIT Jalandhar',
    email: 'yadavak@nitj.ac.in',
    website: 'https://www.nitj.ac.in/faculty/anil_kumar_yadav',
    photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
  },
  {
    name: 'Dr. Another Faculty',
    affiliation: 'Professor, NIT Jalandhar',
    email: 'anotherfaculty@nitj.ac.in',
    website: 'https://www.nitj.ac.in/faculty/another_faculty',
    photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
  },
];

// Custom SVG for the new "X" logo (Twitter replacement)
const XLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M17.6,2H15.5L12,7.3L8.5,2H6.4L11.2,9L5.8,17H7.9L12,11.7L16.1,17h2.1L12.8,9L17.6,2Z"/>
  </svg>
);

const ContactUsPage = () => {
  return (
    <>
    <HeaderTop isHomePage={false} />
    <Navbar />
    <PageHero title="Contact Us" image="/path/to/your/hero-image.jpg" /> 
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facultyContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <img src={contact.photo} alt={contact.name} className="w-24 h-24 rounded-full mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{contact.name}</h2>
              <p className="text-gray-600 mb-2">{contact.affiliation}</p>
              <div className="flex space-x-4 mb-2">
  {/* Email icon (Gmail) */}
  <a
    href={`mailto:${contact.email}`}
    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
  >
    <FaEnvelope className="inline" />
  </a>

  {/* Website icon (Globe) */}
  <a
    href={contact.website}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
  >
    <FaGlobe className="inline" />
  </a>
</div>

            </div>
          ))}
        </div>

        {/* Additional Contact Details */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
          {/* Map Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md mb-12 lg:mb-0">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Location</h2>
            <div className="overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.292061367732!2d75.53511657494542!3d31.395732759254773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b386e1467db%3A0x8d4cfdb58fa63a1b!2sDr.%20B.R.%20Ambedkar%20National%20Institute%20of%20Technology%2C%20Jalandhar!5e0!3m2!1sen!2sin!4v1693296820586!5m2!1sen!2sin"
                title="NIT Jalandhar Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ height: '400px' }} // Increased height
              ></iframe>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Additional Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> Dr. B.R. Ambedkar National Institute of Technology, Jalandhar - 144011, Punjab, India
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +91-0181-5037855, 2690301, 2690453, 3082000
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> <a href="mailto:info@nitj.ac.in" className="text-blue-600 hover:underline">info@nitj.ac.in</a>
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NITJalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  transition-colors duration-300 hover:text-[#1877F2]"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/nitjalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  transition-colors duration-300 hover:text-[#E1306C]"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/school/nit-jalandhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  transition-colors duration-300 hover:text-[#0A66C2]"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCEe-fZ1W-c5f6G1lcX62q5A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  transition-colors duration-300 hover:text-[#FF0000]"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://twitter.com/NITJalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition-colors duration-300 hover:text-black"
              >
                <XLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUsPage;
