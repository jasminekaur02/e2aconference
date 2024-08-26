"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import TouristAttractions from './components/TouristAttractions';
import TopRatedHotels from './components/TopRatedHotels';
import NewsTipsGuides from './components/NewsTipsGuides';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Navbar/>
      <TouristAttractions />
      <TopRatedHotels />
      <NewsTipsGuides />
    </div>
  );
}
