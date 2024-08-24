"use client"

import DynamicFetch from '@/functions/DynamicFetch'
import Link from 'next/link';
import { useState, useEffect } from 'react';


const HeaderTop = () => {

  const [announcement, setAnnouncement] = useState(null);

  useEffect( () => {
    const fetchData = async () => {
      const data = await DynamicFetch("HeaderTop.json");
      setAnnouncement(data);
    };

    fetchData();
  }, [] )

  return (
    <header className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
          {announcement?.link ? (
            <h1 className="text-center text-base font-semibold py-2 underline underline-offset-4">
              <Link href={announcement.link}>
                {announcement.text}
              </Link>
            </h1>
          ) : (
            <></>
          )}
    </div>
</header>
  )
}

export default HeaderTop