'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Preloader from '@/components/Preloader'; // Import the Preloader component

const WelcomePage = () => {
  const [slideOut, setSlideOut] = useState(false);
  const [loading, setLoading] = useState(false); // State for the preloader
  const router = useRouter();

  const handleProceed = () => {
    setSlideOut(true);

    // Show the preloader
    setTimeout(() => {
      setLoading(true); // Start the loading state
      router.push('/Home'); // Navigate to the Home page after showing preloader
    }, 800); // Delay before showing the preloader
  };

  if (loading) {
    return <Preloader />; // Show the preloader if loading state is true
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Left Section - Logo (Hidden on Small and Medium Devices) */}
      <div
        className={`flex-1 flex items-center justify-center p-8 transition-transform duration-[800ms] ${
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
        <div className="w-24 h-24 mb-4">
          <Image
            src="/logo.png"
            alt="NIT Jalandhar Logo"
            width={96}
            height={96}
            priority
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Dr. B. R. Ambedkar National Institute of Technology
        </h2>
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          E2ACon 2025
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Organized by the <br /> Department of Instrumentation and Control Engineering (ICE)
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
