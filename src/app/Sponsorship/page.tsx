"use client";
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaStar, FaGem, FaCrown } from 'react-icons/fa'; 
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

// Sponsorship packages data should be outside of the component
const sponsorshipPackages = [
  {
    title: "Platinum",
    price: "2.50 Lakhs",
    benefits: [
      "Opportunity of maximum 2 hours duration address to the audience to deliver expert talk, panel session during the conference program.",
      "A full website page dedicated to the contributor within the 'about' category.",
      "The logo of the main contributor on the organizing banner displayed at the conference, website & on all conference marketing material.",
      "Two stalls (each of 3mx3m) for the contributor.",
      "Contributor's brochure included in the conference kit.",
      "Maximum five (5) approved promotional items (supplied by contributor) distributed with the conference packs to all delegates.",
      "Four banners/standee received from contributors at the venue.",
      "Six (6) complimentary registrations for the conference, which includes access to all technical sessions, daily working lunch, attendance at the welcome reception, talent and networking event, conference gala dinner, and closing ceremony.",
      "Six (6) complimentary tickets to attend the conference gala dinner.",
      "Company logo displayed at the welcome reception, talent and networking event, and conference gala dinner.",
      "Contributor acknowledgement during the conference on banners and/or projector screen.",
    ],
  },
  {
    title: "Gold",
    price: "1.50 Lakhs",
    benefits: [
      "Opportunity of 1 hour duration address to the audience to deliver expert talk, panel session during the conference program.",
      "A full website page dedicated to the contributor within the 'about' category.",
      "The logo of the main contributor on the organizing banner displayed at the conference, website & on all conference marketing material.",
      "Contributor's brochure included in the conference kit.",
      "Two banners/standee received from contributors at the venue.",
      "Maximum Three (3) approved promotional items (supplied by contributor) distributed with the conference packs to all delegates.",
      "One stall (3mx3m) for the contributor.",
      "Four (4) complimentary registrations for the conference, which includes access to all technical sessions, daily working lunch, attendance at the welcome reception, talent and networking event, conference gala dinner, and closing ceremony.",
      "Company logo displayed at the Welcome Reception, Talent and Networking Event, and conference Gala Dinner.",
      "Contributor acknowledgment during the conference on banners and/or projector screen.",
    ],
  },
  {
    title: "Diamond",
    price: "1 Lakh",
    benefits: [
      "Opportunity of a 30-minute duration address to the audience to deliver an expert talk, a panel session during the conference program.",
      "A full website page dedicated to the contributor within the 'about' category.",
      "The logo of the main contributor on the organizing banner displayed at the conference, website & on all conference marketing material.",
      "Contributor's brochure included in the conference kit.",
      "Space for ads at various venues.",
      "One (1) approved promotional item (supplied by the contributor) distributed with the conference packs to all delegates.",
      "One stall (3mx3m) for the contributor.",
      "Two (2) complimentary registrations for the conference, which includes access to all technical sessions, daily working lunch, attendance at the welcome reception, talent and networking event, conference gala dinner, and closing ceremony.",
      "Company logo displayed at the welcome reception, talent and networking event, and conference gala dinner.",
      "Contributor acknowledgment during the conference on banners and/or projector screen.",
    ],
  },
];

const SponsorshipPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero title="Sponsorship Packages" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
      <section className="py-10 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipPackages.map((packageItem, index) => (
              <div
                key={index}
                className={`bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-1 relative cursor-pointer ${
                  packageItem.title === 'Gold'
                    ? 'shadow-gold'
                    : 'shadow-cyan'
                } ${hovered ? 'shadow-6xl' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    {packageItem.title === 'Platinum' && (
                      <FaGem className="text-4xl text-gray-300" />
                    )}
                    {packageItem.title === 'Gold' && (
                      <FaStar className="text-4xl text-yellow-400" />
                    )}
                    {packageItem.title === 'Diamond' && (
                      <FaCrown className="text-4xl text-blue-300" />
                    )}
                  </div>
                  <h3
                    className={`text-2xl font-bold text-center mb-4 ${
                      packageItem.title === 'Platinum'
                        ? 'platinum-heading'
                        : packageItem.title === 'Gold'
                        ? 'gold-heading'
                        : 'text-blue-300'
                    }`}
                  >
                    {packageItem.title} Category
                  </h3>
                  <p className={`text-xl text-center text-gray-200 font-bold mb-4 ${packageItem.title==='Diamond'? 'text-blue-300': ''}`} >
                    {packageItem.price}
                  </p>
                  <ul className={`list-disc list-inside ${packageItem.title==='Gold'? 'text-white':'text-gray-400'}`}>
                    {packageItem.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-2">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                {packageItem.title === 'Gold' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-50 pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-2xl">To Avail Package <span className='font-bold text-blue-600'></span></p>
            <Link href="/ContactUs" legacyBehavior>
              <a className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition duration-300">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SponsorshipPage;
