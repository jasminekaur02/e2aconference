import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import GuidelinesPage from './components/guidelines';

const Guidelines = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <GuidelinesPage />
      </main>
      <Footer />
    </div>
  );
};

export default Guidelines;