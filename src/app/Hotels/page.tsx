"use client";

import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import TouristAttractions from './components/TouristAttractions';
import TopRatedHotels from './components/TopRatedHotels';
import NewsTipsGuides from './components/NewsTipsGuides';

export default function HotelsPage() {
  return (
    <div className="w-full">
      <HeaderTop isHomePage={false} />
      <Navbar />
      {/* <div className="absolute top-0 w-1/2 h-1/2 bg-indigo-50 rounded-tb-[100px] -z-10 transform -translate-y-10 -left-48">
      </div> */}
      
      <div className="my-10 text-center mt-24">
        <h2 className="text-3xl font-bold">Hotels & <span className="text-blue-500">Travels</span></h2>
        <p className="text-gray-600">Explore the <span className="text-blue-500"> Northern</span> wonders and make some timeless memories</p>
      </div>
      
      <main className="w-full">
        <TouristAttractions />
        <TopRatedHotels />
        <NewsTipsGuides />
      </main>
      
      <Footer />
    </div>
  );
}
