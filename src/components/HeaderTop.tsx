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
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        {announcement?.link ? (
          <h1 className="text-center text-base font-semibold py-2 underline underline-offset-4">
            <Link href={announcement.link}>
              {announcement.text}
            </Link>
          </h1>
        ) : null}
      </div>
    </header>
  );
};

export default HeaderTop;
