"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import TouristAttractions from './components/TouristAttractions';
import TopRatedHotels from './components/TopRatedHotels';
import NewsTipsGuides from './components/NewsTipsGuides';

export default function HotelsPage() {
  return (
    <div>
      <Navbar />
      <div className="my-10 text-center mb-8">
        <h2 className="text-3xl font-bold">Hotels & <span className="text-blue-500">Travels</span></h2>
        
      </div>
      {/* <h1>Hotels and Travels</h1> */}
      <main className="container mx-auto px-4">
      <TopRatedHotels />
      <TouristAttractions />
      <NewsTipsGuides />
      </main>
      <Footer />
    </div>
  );
}
