import React from 'react';
import Navbar from '@/components/navbar';
import HeaderTop from '@/components/HeaderTop';
import Footer from '@/components/Footer';
import GuidelinesPage from './components/guidelines';

const Guidelines = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <HeaderTop isHomePage={false} />
      <Navbar />
      
      <main className="flex-grow mt-16">
        <GuidelinesPage />
      </main>
      <Footer />
    </div>
  );
};

export default Guidelines;