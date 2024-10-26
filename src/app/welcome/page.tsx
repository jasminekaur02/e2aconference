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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Container for the three divisions */}
      <div className="flex justify-between items-stretch w-full max-w-7xl text-center gap-4 mb-8">
        {/* E2A Logo (hidden for md and larger devices) */}
        <div className="hidden lg:flex flex-col items-center w-1/3  border-r-2 border-gray-300">
          <div className="relative mb-2 " style={{ width: '500px', height: '450px' }}>
            <Image
              src="/e2alogo.jpg" // Replace with the actual path to your E2A logo
              alt="E2A Logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* Organized by Info - adjusted flex-grow for width utilization */}
        <div className="flex flex-col items-center justify-center flex-grow w-1/2">
          {/* NIT Jalandhar Logo */}
          <div className="relative mb-2" style={{ width: '80px', height: '80px' }}>
            <Image
              src="/image.png"
              alt="NIT Jalandhar Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-0">Organized by</h2>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-0">
            Department of Instrumentation and Control Engineering (ICE)
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-0">
            Dr. B.R. Ambedkar National Institute of Technology Jalandhar
          </p>
        </div>

        

        {/* Co-Hosted by Info - adjusted flex-grow for width utilization */}
        <div className="flex flex-col items-center justify-center flex-grow w-1/2">
          {/* Newcastle University Logo */}
          <div className="relative mb-2" style={{ width: '150px', height: '60px' }}>
            <Image
              src="/ncuslogo.jpg"
              alt="Newcastle University Logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-0">Co-Hosted by</h2>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-0">
            School of Electrical and Electronic Engineering
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-0">Newcastle University, Singapore</p>
        </div>
      </div>

      {/* Date and Get Started Button - Positioned between the two columns */}
      <div className="flex flex-col items-center text-center mt-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">March 8-9, 2025</h2>
        <button
          onClick={handleProceed}
          className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
