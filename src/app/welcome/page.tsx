'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const WelcomePage = () => {
  const [slideOut, setSlideOut] = useState(false);
  const router = useRouter();

  const handleProceed = () => {
    setSlideOut(true);

    setTimeout(() => {
      router.push('/Home');
    }, 800); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Left Section - Logo (Hidden on Small and Medium Devices) */}
      <div
        className={`flex-1 flex items-center justify-center p-8 transition-transform duration-[800ms] border-r-2 border-gray-300 ${
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
          slideOut ? 'md:animate-slideOutRight' : ''
        }`}
      >
        <div className="flex flex-col items-center">
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

          {/* Horizontal Line */}
          {/* <div className="border-b-2 border-gray-300 w-full mb-4"></div> */}

          <p className="text-lg text-gray-700 mb-6">
            Organized by<br></br> the Department of Instrumentation and Control Engineering (ICE)
          </p>
        </div>

        {/* Get Started Button */}
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