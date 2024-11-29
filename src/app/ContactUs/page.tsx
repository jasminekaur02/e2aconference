import React from 'react';
import {
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Image from 'next/image';

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
      {/* Hero section with background image */}
      <PageHero title="Contact Us" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
      <div className="py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">

          {/* "Reach Us" Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">Reach <span className='text-blue-600'>Us</span></h2>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Text Section */}
              <div className="lg:flex-1">
                <p className="text-gray-700 mb-4">
                  The city of Jalandhar is situated between the rivers Sutlej and Beas on National Highway 1. It is one of the important towns of Punjab and is known for rich educational, cultural, and literary activities. It is an internationally renowned industrial center for sports goods, leather goods, and hand-tools.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Modes of Travel</h3>
                <p className="text-gray-700">
                  <strong>Distance from Delhi by Road:</strong> 370 kms <br />
                  <strong>Train from Delhi:</strong> The Shatabdi Express (07:20 AM & 16:30 PM) <br />
                  <strong>Nearest Airport:</strong> Sri Guru Ram Dass Jee International Airport, Amritsar <br />
                  <strong>Location:</strong> The institute is located on the GT Road bypass, 15 km from Jalandhar bus-stand, 12 km from Jalandhar city railway station (JUC), and 18 km from Jalandhar Cantt railway station (JRC).
                </p>
                <p className="text-gray-700 mt-4">
                  It is at a walking distance of half a kilometer from Bidhipur railway crossing. Auto rickshaw and taxi services are available regularly from railway stations and bus-stand.
                </p>
              </div>
              
              {/* Image Section */}
              <div className="lg:flex-1 lg:flex lg:justify-end">
                <Image
                  src="https://v1.nitj.ac.in/ITEP/img/01.jpg"
                  alt="Jalandhar"
                  width={400}
                  height={300}
                  className="mt-4 lg:mt-0 rounded-lg shadow-lg w-full lg:w-auto lg:max-w-md"
                />
              </div>
            </div>
          </div>

          {/* Additional Contact Details */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
            {/* Map Section */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mb-12 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Our <span className='text-blue-600'>Location</span></h2>
              <div className="overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.292061367732!2d75.53511657494542!3d31.395732759254773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b386e1467db%3A0x8d4cfdb58fa63a1b!2sDr.%20B.R.%20Ambedkar%20National%20Institute%20of%20Technology%2C%20Jalandhar!5e0!3m2!1sen!2sin!4v1693296820586!5m2!1sen!2sin"
                  title="NIT Jalandhar Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ height: '400px' }}
                ></iframe>
              </div>
            </div>

            {/* Additional Contact Information */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact <span className='text-blue-600'>Information</span></h2>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Dr. B.R. Ambedkar National Institute of Technology, Jalandhar - 144008, Punjab, India
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +91-7078438786 , +91-7017252858 
              </p>
             
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> <a href="mailto:info.e2a@nitj.ac.in" className="text-blue-600 hover:underline">info.e2a@nitj.ac.in</a>
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/NITJofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-[#1877F2] transition-colors duration-300"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/nitjofficial/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-[#E1306C] transition-colors duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/nitjofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-[#0077B5] transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UClD5ZSKAIUIOFeEWZrXRq7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-[#FF0000] transition-colors duration-300"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a
                  href="https://twitter.com/nitjofficial?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  <XLogo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUsPage;
