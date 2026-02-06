"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import CallForPapers from '@/components/Tracks';
import ExpertSpeakers from '@/components/Speakers';
import AboutOrg from '@/components/AboutOrg';
import Preloader from '@/components/Preloader'; // Import the Preloader
import Gallery from '@/components/Gallery';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion once the page has fully loaded
  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false); // Hide preloader when page is loaded
    };

    // Wait for the entire page to load, including images, etc.
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  return (
    <>
      {isLoading && <Preloader />} {/* Display preloader if loading */}
      {!isLoading && (
        <>
          <HeaderTop isHomePage={true} />
          <Navbar />
          <Hero />
          <AboutUs />
          <AboutOrg />  {/*includes timeline at bottom */}
          {/* <Gallery/> */}
          <Sponsors />
          <CallForPapers />
          <ExpertSpeakers />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
