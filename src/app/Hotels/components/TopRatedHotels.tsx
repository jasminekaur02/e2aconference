import React, { useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Hotel {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

const TopRatedHotels: React.FC = () => {
  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Taj Swarna, Amritsar",
      description:
        "Luxurious heritage hotel near Golden Temple. Impeccable service, opulent rooms, rooftop pool with city views.",
      price: "Varies",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/85011621.jpg?k=8eced7857d8410e1434cab76a76047561ec49ff5e9c5d66ce7d596fee704ab70&o=&hp=1",
      link: "https://www.tajhotels.com/en-in/taj-swarna-amritsar/",
    },
    {
      id: 2,
      name: "The Radisson Blu Hotel Amritsar",
      description:
        "Modern 5-star hotel with central location. Spacious rooms, modern amenities, international cuisine restaurants.",
      price: "Varies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhm3CUgZ_GvtV-hXR5m0qawKR5d0JUJ4wgA&s",
      link: "https://www.radissonhotels.com/en-in/amritsar/radisson-blu-hotel-amritsar",
    },
    {
      id: 3,
      name: "Holiday Inn Amritsar Ranjit Avenue",
      description:
        "Reliable chain hotel offering value and comfort. Comfortable rooms, swimming pool, fitness center.",
      price: "Varies",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/311030000.jpg?k=02241f28138afe0b8a3ece9de8fae47f9ccca60af376a981546f8e434cd3c792&o=&hp=1",
      link: "https://www.ihg.com/holidayinn/hotels/in/amritsar/amritsar-ranjit-avenue/hoteldetail?hotelId=amrri&regionCode=in&localeCode=en",
    },
    {
      id: 4,
      name: "Fortune Avenue - Member ITC's Hotel Group, Jalandhar",
      description:
        "Modern hotel in Jalandhar offering comfort and convenience. Stylish rooms, on-site restaurants.",
      price: "Varies",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/186922011.jpg?k=800699ad3416b35ac018b294171f388bf406a1930d0c0ce1e71b496abb01b7d9&o=&hp=1",
      link: "https://www.itchotels.in/hotels/india/punjab/jalandhar/fortune-avenue-jalandhar.html",
    },
    {
      id: 5,
      name: "Golden Tulip Jalandhar",
      description:
        "Upscale hotel in Jalandhar with modern amenities. Spacious rooms, swimming pool, fitness center.",
      price: "Varies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzJvEjJ6d-4gjNyd7OTNvLyZ0G1t4FaCD8w&s",
      link: "https://www.goldentulip.com/hotels/india/jalandhar/golden-tulip-jalandhar",
    },
    {
      id: 6,
      name: "The Park Plaza, Amritsar",
      description:
        "Modern upscale hotel with excellent service. Spacious rooms, rooftop restaurant with city views.",
      price: "Varies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqSl_97-gElEcHfCgA8VwIE4YWxECMiMvoQ&s",
      link: "https://www.pphotels.com/amritsar/the-park-plaza-amritsar",
    },
    {
      id: 7,
      name: "Mariton Hotel, Jalandhar",
      description:
        "Warmly furnished quarters in an informal hotel offering a restaurant, an outdoor pool & a gym.",
      price: "Varies",
      image: "https://gos3.ibcdn.com/64eba158778611edbc880a58a9feac02.jpeg",
      link: "http://www.hotelmariton.in/",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = current.clientWidth; // Scroll by the width of the container
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

  // Handle swipe events for mobile and tablet
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
  }, []);

  return (
    <section className="py-8 bg-indigo-50 w-full">
      <div className="container mx-auto px-4">
        {/* Flex container for heading and icons */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            Top Rated <span className="text-blue-500">Hotels</span>
          </h2>
          {/* Scroll arrows for larger screens */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 bg-gray-300 rounded-full"
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
        <div className="relative py-8">
          {/* Scrollable content with Framer Motion animations */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden space-x-4 scrollbar-hide"
          >
            {hotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                className="bg-white rounded-lg shadow-lg p-4 w-full md:w-64 flex-shrink-0" // Set width to full on mobile
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="mt-2">
                  <h3 className="font-bold text-lg">{hotel.name}</h3>
                  <p className="text-gray-600">{hotel.description}</p>
                  <p className="text-blue-500 font-bold mt-1">Price: {hotel.price}</p>
                  <button
                    onClick={() => window.open(hotel.link, "_blank")}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedHotels;