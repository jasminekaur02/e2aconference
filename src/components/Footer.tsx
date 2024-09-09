import React from "react";
import Link from "next/link";

// Make sure to import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Conference Information */}
          <div>
            <h2 className="text-3xl font-bold mb-2">E2ACon2025</h2>
            <h3 className="text-xl mb-1">International Conference</h3>
            <h3 className="text-xl">
              on <span className="text-blue-400">Electrical, Electronics</span> &
            </h3>
            <h3 className="text-xl text-blue-400">Automation</h3>
          </div>

          {/* Google Map Embed */}
          <div>
            <iframe
              title="NITJ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5482396691536!2d75.53224917640961!3d31.395982381410425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b6ee8f7b399%3A0x1bc2cbb6b1a6f9b5!2sDr.%20B.%20R.%20Ambedkar%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1698589206934!5m2!1sen!2sin"
              width="100%"
              height="200"       
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-blue-400 mr-3" />
              <p className="text-sm mt-1">
                Dr B R Ambedkar National Institute of Technology, G.T. Road, Amritsar Bypass, Jalandhar, Punjab, India
                <br />
                PIN : 144008
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-blue-400 mr-3" />
              <div>
                <p className="text-sm">Dr Afzal Sikander</p>
                <a href="mailto:afzal@nitj.ac.in" className="text-sm text-blue-400">
                  afzal@nitj.ac.in
                </a>
                <span className="text-sm mx-2">|</span>
                <a href="tel:+917078438756" className="text-sm text-blue-400">
                  +91 70784 38756
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-blue-400 mr-3" />
              <div>
                <p className="text-sm">Dr Mamta Khosla</p>
                <a href="mailto:khoslam@nitj.ac.in" className="text-sm text-blue-400">
                  khoslam@nitj.ac.in
                </a>
                <span className="text-sm mx-2">|</span>
                <a href="tel:+919888604833" className="text-sm text-blue-400">
                  +91 98886 04833
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start">
              <li className="mr-6">
                <Link href="/#about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/CallforPapers/papersubmission" className="hover:text-blue-400">
                  Call for Papers
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/Events/Pages/schedule" className="hover:text-blue-400">
                  Events
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/NewsRelease" className="hover:text-blue-400">
                  New Release
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/Team" className="hover:text-blue-400">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/Hotels" className="hover:text-blue-400">
                  Hotels & Travels
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-gray-400">
            Copyright © 2024 • E2A NITJ Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
