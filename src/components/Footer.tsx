import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Grid layout with improved responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-16">
          
          {/* Conference Information */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">E2ACON 2025</h2>
            <h3 className="text-lg md:text-xl">International Conference</h3>
            <h3 className="text-lg md:text-xl">
              on <span className="text-blue-400">Electrical, Electronics</span> & Automation
            </h3>

            {/* Contact Information for Dr. Afzal Sikander */}
            {/* Contact Information for Dr. Afzal Sikander */}
<div className="text-center md:text-center lg:text-left">
  <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-center lg:space-x-4 mb-4">
    <FontAwesomeIcon
      icon={faEnvelope}
      className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mb-2 md:mb-0 md:mr-2 lg:mr-0 lg:mb-0"
    />
    <div className="text-center md:text-left lg:text-left">
      <p className="text-sm md:text-base">Dr Afzal Sikander</p>
      <a
        href="mailto:info.e2a@nitj.ac.in"
        className="text-sm md:text-base text-blue-400 block md:inline-block"
      >
        info.e2a@nitj.ac.in
      </a>
      <span className="text-sm md:text-base mx-2 hidden lg:inline">|</span>
      <a
        href="tel:+917078438756"
        className="text-sm md:text-base text-blue-400 block md:inline-block"
      >
        +91 70784 38786
      </a>
    </div>
  </div>
</div>

{/* Contact Information for Mr. Sumit Kataria */}
<div className="text-center md:text-center lg:text-left">
  <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-center lg:space-x-4 mb-4">
    <FontAwesomeIcon
      icon={faEnvelope}
      className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mb-2 md:mb-0 md:mr-2 lg:mr-0 lg:mb-0"
    />
    <div className="text-center md:text-left lg:text-left">
      <p className="text-sm md:text-base">Mr Sumit Kataria</p>
      <a
        href="mailto:info.e2a@nitj.ac.in"
        className="text-sm md:text-base text-blue-400 block md:inline-block"
      >
        info.e2a@nitj.ac.in
      </a>
      <span className="text-sm md:text-base mx-2 hidden lg:inline">|</span>
      <a
        href="tel:+917017252858"
        className="text-sm md:text-base text-blue-400 block md:inline-block"
      >
        +91-7017252858
      </a>
    </div>
  </div>
</div>
</div>

          {/* Quick Links */}
          <div className="flex justify-center lg:justify-start">
            <nav className="text-center lg:text-left">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link href="/About" className="hover:text-blue-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/CallforPapers/papersubmission" className="hover:text-blue-400">
                    Call for Papers
                  </Link>
                </li>
                <li>
                  <Link href="/Workshop" className="hover:text-blue-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/NewsRelease" className="hover:text-blue-400">
                    News Release
                  </Link>
                </li>
                <li>
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
          </div>

          {/* Google Map Embed */}
          <div className="flex flex-col items-center lg:items-end lg:space-y-4">
            <iframe
              title="NITJ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5482396691536!2d75.53224917640961!3d31.395982381410425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b6ee8f7b399%3A0x1bc2cbb6b1a6f9b5!2sDr.%20B.%20R.%20Ambedkar%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1698589206934!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="border-0 mb-4 lg:mb-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="flex items-center justify-center lg:justify-end mt-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mr-3" />
              <p className="text-sm md:text-base text-center md:text-left lg:text-left">
              Dr B R Ambedkar National Institute of Technology, G.T. Road, Amritsar Bypass, Jalandhar, Punjab, India
                <br />
                PIN: 144008
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left mb-2 md:mb-0">
            Copyright &copy; 2024 • E2ACON 2025 NITJ Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;