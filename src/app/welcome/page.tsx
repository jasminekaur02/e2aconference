'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Preloader from '@/components/Preloader'; // Import the Preloader component

const WelcomePage = () => {
  const [slideOut, setSlideOut] = useState(false);
  const [loading, setLoading] = useState(true); // Initially, the page will be in a loading state
  const [transitioning, setTransitioning] = useState(false); // For transitioning to the Home page
  const router = useRouter();

  // This useEffect is used to simulate the WelcomePage load (replace with actual loading logic if needed)
  useEffect(() => {
    // Simulate a loading delay (like fetching data, etc.)
    setTimeout(() => {
      setLoading(false); // Stop the loading state once the page is ready
    }, 1000); // Simulate 1 second load time
  }, []);

  const handleProceed = () => {
    setSlideOut(true);
    setTransitioning(true); // Start transitioning state

    // Show the preloader while transitioning to Home page
    setTimeout(() => {
      router.push('/Home'); // Navigate to the Home page
    }, 800); // Delay before showing the preloader
  };

  // If the page is loading initially, show the preloader
  if (loading || transitioning) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Logos at the top */}
      <div className="flex items-center justify-center space-x-8 mb-8">
        {/* NIT Jalandhar Logo */}
        <div className="relative" style={{ width: '80px', height: '80px' }}>
          <Image
            src="/image.png"
            alt="NIT Jalandhar Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Newcastle University Logo */}
        <div className="relative" style={{ width: '96px', height: '96px' }}>
          <Image
            src="/ncuslogo.jpg"
            alt="Newcastle University Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      {/* Information side by side with separator */}
      <div className="grid grid-cols-2 items-center justify-center w-full text-center gap-8">
        {/* NIT Jalandhar Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Organized by
          </h2>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Department of Instrumentation and Control Engineering (ICE)
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Dr. B.R. Ambedkar National Institute of Technology Jalandhar 
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            March 8-9, 2025
          </h2>
        </div>

        {/* Newcastle University Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Co-Hosted by
          </h2>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            School of Electrical and Electronic Engineering
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Newcastle University, Singapore 
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="mt-8">
        <button
          onClick={handleProceed}
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
