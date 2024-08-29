"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import KeynoteCarousel from '../../components/keynotecarousel';

const KeynotesPage: React.FC = () => {
  return (
    <div className="w-full">
      <Navbar />
      
      <div className="my-10 text-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming <span className="text-blue-600">Events</span></h2>
        <p className="text-gray-600">Join us for these exciting keynote events!</p>
      </div>
      
      <main className="w-full">
        <KeynoteCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default KeynotesPage;
