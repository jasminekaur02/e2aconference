import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">E2A Conference</h2>
            <h3 className="text-xl mb-2">International Conference</h3>
            <h3 className="text-xl">
              on <span className="text-blue-400">Electrical, Electronics</span> &
            </h3>
            <h3 className="text-xl text-blue-400">Automation</h3>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">
                Dr B R Ambedkar National Institute of Technology,<br />
                G.T. Road, Amritsar Bypass, Jalandhar, Punjab, India<br />
                PIN : 144008
              </p>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div>
                <p className="text-sm">Dr Afzal Sikander</p>
                <a href="mailto:afzal@nitj.ac.in" className="text-sm text-blue-400">afzal@nitj.ac.in</a>
                <a href="tel:+917078438756" className="text-sm text-blue-400 block">+91 70784 38756</a>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div>
                <p className="text-sm">Dr Mamta Khosla</p>
                <a href="mailto:khoslam@nitj.ac.in" className="text-sm text-blue-400">khoslam@nitj.ac.in</a>
                <a href="tel:+919888604833" className="text-sm text-blue-400 block">+91 98886 04833</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start">
              <li className="mr-6"><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li className="mr-6"><Link href="/call-for-papers" className="hover:text-blue-400">Call for Papers</Link></li>
              <li className="mr-6"><Link href="/events" className="hover:text-blue-400">Events</Link></li>
              <li className="mr-6"><Link href="/new-release" className="hover:text-blue-400">New Release</Link></li>
              <li className="mr-6"><Link href="/committee" className="hover:text-blue-400">Committee</Link></li>
              <li><Link href="/hotels-travels" className="hover:text-blue-400">Hotels & Travels</Link></li>
            </ul>
          </nav>
          <p className="text-sm text-gray-400">Copyright © 2024 • E2A NITJ Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;