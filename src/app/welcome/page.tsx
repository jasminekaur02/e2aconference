'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const WelcomePage = () => {
  const [slideOut, setSlideOut] = useState(false);
  const router = useRouter();

  const handleProceed = () => {
    // Start slide out animation
    setSlideOut(true);

    // Navigate to home after the animation ends
    setTimeout(() => {
      router.push('/Home'); // Ensure your main page is accessible via /home
    }, 800); // Duration matches the CSS animation duration
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Left Section - Logo */}
      <div
        className={`flex-1 flex items-center justify-center p-8 transition-transform duration-[800ms] ${
          slideOut ? 'slide-out-left' : ''
        }`}
      >
        <Image
          src="/path/to/logo.png" // Replace with your actual logo path
          alt="E2ACon 2025 Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Right Section - Info */}
      <div
        className={`flex-1 flex flex-col items-center justify-center p-8 text-center transition-transform duration-[800ms] ${
          slideOut ? 'slide-out-right' : ''
        }`}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to E2ACon 2025
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Organized by Dr. B.R. Ambedkar National Institute of Technology
          Jalandhar
          <br />
          Department of Instrumentation and Control Engineering (ICE)
        </p>
        <button
          onClick={handleProceed}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
