import React, { useRef, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
  capacity: string;
  timings: string;
  destination: string;
  link: string;
}

const TouristAttractions: React.FC = () => {
  const attractions: Attraction[] = [
    {
      id: 1,
      name: "Golden Temple, Amritsar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcGVa6TsNMD5IeaXNkn98iv1u2yqX65coLg&s",
      description: "The holiest shrine for Sikhs, known for its gold-plated dome.",
      capacity: "Large crowds accommodated",
      timings: "Open 24 hours",
      destination: "Amritsar, Punjab",
      link: "https://en.wikipedia.org/wiki/Golden_Temple",
    },
    {
      id: 2,
      name: "Wagah Border Ceremony, Amritsar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL4UMAxl_6KJAqxPz8ydxakl5W6ldIwtKGQ&s",
      description: "A vibrant patriotic ceremony held daily at the India-Pakistan border.",
      capacity: "Large crowds accommodated",
      timings: "Ceremony starts at sunset",
      destination: "Amritsar, Punjab",
      link: "https://en.wikipedia.org/wiki/Wagah_Border_Ceremony",
    },
    {
      id: 3,
      name: "Shalimar Bagh, Amritsar",
      image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/c38fa44e93e014e8cf83128ceb1927a0_1000x1000.jpg",
      description: "A Mughal-era garden known for its water channels, fountains, and terraces.",
      capacity: "Moderate crowds",
      timings: "Open from sunrise to sunset",
      destination: "Amritsar, Punjab",
      link: "https://en.wikipedia.org/wiki/Shalimar_Bagh,_Amritsar",
    },
    {
      id: 4,
      name: "Gobindgarh Fort, Amritsar",
      image: "https://amritsartourism.org.in/images/places-to-visit/headers/gobindgarh-fort-amritsar-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      description: "An 18th-century fort showcasing Sikh military history with a museum and war demonstrations.",
      capacity: "Moderate crowds",
      timings: "Open 10:00 AM to 5:00 PM",
      destination: "Amritsar, Punjab",
      link: "https://en.wikipedia.org/wiki/Gobindgarh_Fort",
    },
    {
      id: 5,
      name: "Dharamsala, Himachal Pradesh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qbMXgrzPE_XB1qABjRePT8fU3b226fbD2w&s",
      description: "The seat of the Tibetan government in exile, known for its scenic beauty and Buddhist monasteries.",
      capacity: "Moderate crowds",
      timings: "Accessible year-round",
      destination: "Dharamsala, Himachal Pradesh",
      link: "https://en.wikipedia.org/wiki/Dharamsala",
    },
    {
      id: 6,
      name: "Dalhousie, Himachal Pradesh",
      image: "https://holidayshunt.com/wp-content/uploads/2023/01/dalhousie.jpg",
      description: "A hill station offering breathtaking views, colonial architecture, and trekking opportunities.",
      capacity: "Moderate crowds",
      timings: "Accessible year-round",
      destination: "Dalhousie, Himachal Pradesh",
      link: "https://en.wikipedia.org/wiki/Dalhousie",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      const card = scrollContainerRef.current?.querySelector('div');
      if (card) {
        setCardWidth(card.clientWidth);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = cardWidth; // Scroll by exactly one card width

      const newPosition =
        direction === 'left'
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchStartX = e.touches[0].clientX;

      const handleTouchMove = (e: TouchEvent) => {
        const touchEndX = e.touches[0].clientX;
        const touchDiff = touchStartX - touchEndX;

        if (Math.abs(touchDiff) > 50) {
          if (touchDiff > 0) {
            handleScroll('right');
          } else {
            handleScroll('left');
          }
          document.removeEventListener('touchmove', handleTouchMove);
        }
      };

      document.addEventListener('touchmove', handleTouchMove);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [cardWidth]);

  return (
    <section className="py-6 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Tourist <span className="text-blue-500">Attractions</span>
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden space-x-4 scrollbar-hide py-2"
          >
            {attractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-[90vw] md:w-[40vw] lg:w-[25vw] flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md"
                />
                <div className="mt-2">
                  <h3 className="font-bold text-lg">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{attraction.description}</p>
                  <ul className="space-y-1 mt-2 text-gray-600 text-sm">
                    <li><b>Capacity:</b> {attraction.capacity}</li>
                    <li><b>Timings:</b> {attraction.timings}</li>
                    <li><b>Destination:</b> {attraction.destination}</li>
                  </ul>
                  <a
                    href={attraction.link}
                    className="mt-2 bg-blue-500 text-white px-3 py-1 text-sm rounded inline-block cursor-pointer hover:bg-blue-600"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Scroll Arrows for Laptop View */}
        <div className="flex justify-center mt-4 hidden md:flex">
          <button
            onClick={() => handleScroll('left')}
            className="p-2 bg-gray-300 rounded-full mr-2"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 bg-gray-300 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TouristAttractions;
