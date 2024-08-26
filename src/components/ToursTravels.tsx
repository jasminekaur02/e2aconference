"use client";

import React from 'react';
import TouristAttractions from './TouristAttractions';
import TopRatedHotels from './TopRatedHotels';
import NewsTipsGuides from './NewsTipsGuides';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold">
          Hotels & <span className="text-blue-500">Travels</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the Northern Wonders and make some timeless memories
        </p>
      </section>

      <TouristAttractions />
      <TopRatedHotels />
      <NewsTipsGuides />
    </div>
  );
}
