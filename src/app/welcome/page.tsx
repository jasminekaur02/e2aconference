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
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Left Section - Logo (Hidden on Small and Medium Devices) */}
      <div
        className={`flex-1 items-center justify-center p-8 transition-transform duration-[800ms] ${
          slideOut ? 'lg:animate-slideOutLeft' : ''
        } hidden lg:flex`}
      >
        <div className="relative" style={{ width: '45vw', height: '100vh' }}>
          <Image
            src="/logoe2a.gif"
            alt="E2ACon 2025 Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      {/* Right Section - Info */}
      <div
        className={`flex-1 flex flex-col items-center justify-center p-8 text-center transition-transform duration-[800ms] ${
          slideOut ? 'animate-slideUp lg:animate-slideOutRight' : ''
        }`}
      >
        <div className="flex items-center space-x-4 mb-4">
          {/* NITJ Logo */}
          <Image
            src="/image.png"
            alt="NIT Jalandhar Logo"
            width={48}
            height={48}   
            priority
          />

          {/* Show logo gif for small and medium devices */}
          <div className="relative lg:hidden" style={{ width: '120px', height: '100px' }}>
            <Image
              src="/logoe2a.gif"
              alt="E2ACon 2025 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Newcastle University Logo */}
          <div className="relative" style={{ width: '96px', height: '96px' }}>
            <Image
              src="/ncuslogo.jpg" // Replace with the actual path to the Newcastle University logo
              alt="Newcastle University Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <span className="block">
            Dr. B. R. Ambedkar National Institute of Technology Jalandhar
          </span>
        </h2>
        <h1 className="text-3xl font-bold text-blue-600 mb-4">E2ACON 2025</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-0">
          March 8-9, 2025
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Organized by <br /> Department of Instrumentation and Control Engineering (ICE)
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Co-hosted by the School of Electrical and Electronic Engineering, <br />
          Newcastle University in Singapore
        </p>

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
