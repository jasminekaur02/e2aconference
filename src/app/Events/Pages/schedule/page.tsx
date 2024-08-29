"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Schedule from '../../components/schedule';

const SchedulePage: React.FC = () => {
  return (
    <div className="w-full">
      <Navbar />
      
      
      
      <main className="w-full">
        <Schedule />
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePage;
