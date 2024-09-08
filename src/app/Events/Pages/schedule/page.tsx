"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import HeaderTop from '@/components/HeaderTop';
import Footer from '@/components/Footer';
import Schedule from '../../components/schedule';

const SchedulePage: React.FC = () => {
  return (
    <div className="w-full">
       <HeaderTop isHomePage={false} />
      <Navbar />
      
      
      
      <main className="flex-grow mt-16">
        <Schedule />
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePage;
