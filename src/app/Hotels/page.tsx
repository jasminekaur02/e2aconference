"use client";

import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import TouristAttractions from './components/TouristAttractions';
import TopRatedHotels from './components/TopRatedHotels';
import NewsTipsGuides from './components/NewsTipsGuides';
import PageHero from '@/components/PageHero';

export default function HotelsPage() {
  return (
    <div className="w-full">
      <HeaderTop isHomePage={false} />
      <Navbar />

      {/* Hero Section */}
      <PageHero 
        title="Hotels & Travels" 
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
      />

      <main className="w-full">
        
        {/* Accommodation Important Note */}
        <section className="bg-yellow-100 p-6 my-6 mx-auto max-w-7xl rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Important Note: Accommodation</h2>
          <p className="text-gray-700 mb-4">
            The accommodation for the participants can be arranged in institute guest houses and institute hostels subject to the availability of the same on request and on payment basis. The requirement for the preferred accommodation along with the tariff range and single/double occupancy should be sent to <a href="mailto:info.e2a@nitj.ac.in" className="text-blue-600 hover:underline">info.e2a@nitj.ac.in</a> well in advance.
          </p>
          <p className="text-gray-700">
            The participants can book nearby hotels at their own cost. Few suggested hotels are as follows.
          </p>
        </section>
        
        {/* Other Sections */}
        <TouristAttractions />
        <TopRatedHotels />
        <NewsTipsGuides />
      </main>
      
      <Footer />
    </div>
  );
}
