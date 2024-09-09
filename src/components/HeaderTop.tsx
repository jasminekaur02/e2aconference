"use client";

import DynamicFetch from '@/functions/DynamicFetch';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const HeaderTop = ({ isHomePage }) => {
  const [announcement, setAnnouncement] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await DynamicFetch("HeaderTop.json");
      setAnnouncement(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <header
      className={`${
        isHomePage
          ? isScrolled
            ? 'bg-gray-800'
            : 'bg-transparent'
          : 'bg-gray-800'
      } text-white h-16 fixed top-0 left-0 w-full z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
        {/* Show announcement only on larger screens */}
        {announcement?.link && (
          <h1 className="hidden md:text-center md:text-base md:font-semibold md:py-2 md:underline md:underline-offset-4 md:block">
            <Link href={announcement.link}>
              {announcement.text}
            </Link>
          </h1>
        )}
        {/* Live link below the menu, visible only on medium screens and larger */}
        <div className="hidden md:flex flex-col items-center">
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;