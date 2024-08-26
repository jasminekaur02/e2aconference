import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NewsTipsGuides = () => {
  const newsItems = [
    {
      id: 1,
      title: "Experience Amritsar's Spiritual Heart: The Golden Temple",
      image: "https://cdn1.prayagsamagam.com/media/2023/07/24134924/4-scaled.webp",
      description:
        "Immerse yourself in the serenity and architectural beauty of this iconic Sikh pilgrimage site.",
      date: "26 Aug 2024",
      link: "https://en.wikipedia.org/wiki/Golden_Temple",
    },
    {
      id: 2,
      title: "Unwind in Jalandhar's Oasis: The Ranjit Sagar Dam",
      image: "https://ffo.gov.in/sites/default/files/styles/flexslider_full/public/2024-03/ranjit_sagar_dam_0.jpg?itok=VHsGQAlI",
      description:
        "Enjoy breathtaking views, boating activities, and a serene escape from the city.",
      date: "26 Aug 2024",
      link: "https://en.wikipedia.org/wiki/Ranjit_Sagar_Dam",
    },
    {
      id: 3,
      title: "Explore Amritsar's Culinary Delights: A Food Tour",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c4/2e/89/caption.jpg?w=500&h=400&s=1",
      description:
        "Embark on a delicious journey through Amritsar's streets, savoring local delicacies.",
      date: "26 Aug 2024",
      link: "https://en.wikipedia.org/wiki/Amritsar_cuisine",
    },
    {
      id: 4,
      title: "Embrace Punjabi Culture: Attend a Bhangra Performance",
      image: "https://www.hindustantimes.com/ht-img/img/2023/04/20/1600x900/hoshiarpur-hoshiarpur-cavalcade-hindustan-youngste_1681970877065_1681970877266.jpg",
      description:
        "Witness the vibrant energy and colorful costumes of this traditional Punjabi folk dance.",
      date: "26 Aug 2024",
      link: "https://en.wikipedia.org/wiki/Bhangra",
    },
    {
      id: 5,
      title: "Shop for Local Treasures: Amritsar's Hall Bazaar",
      image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/03/Hall-Bazaar.jpg?tr=w-400",
      description:
        "Explore a bustling marketplace filled with textiles, spices, handicrafts, and souvenirs.",
      date: "26 Aug 2024",
      link: "https://en.wikipedia.org/wiki/Hall_Bazaar,_Amritsar",
    },
    {
      id: 6,
      title: "Delve into History: Partition Museum Amritsar",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/46/af/45/the-partition-museum.jpg?w=1200&h=-1&s=1",
      description:
        "Learn about the sensitive history of India's partition through exhibits and stories.",
      date: "26 Aug 2024",
      link: "https://en.wikipedia.org/wiki/Partition_Museum",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = 300;
      const newPosition =
        direction === 'left'
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });

      // Update the current slide based on scrolling direction
      setCurrentSlide(direction === 'left' ? currentSlide - 1 : currentSlide + 1);
    }
  };

  return (
    <section className="py-8 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">
          News, Tips & <span className="text-blue-500">Guides</span>
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden space-x-4 scrollbar-hide"
          >
            {newsItems.map((item) => (
              <NewsTipGuide key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
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

export default NewsTipsGuides;

// Export the NewsTipGuide component
export const NewsTipGuide = ({ item }) => {
  return (
    <motion.div
      key={item.id}
      className="bg-white rounded-lg shadow-lg p-4 w-[25vw] flex-shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-2">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-600">{item.date}</p>
        <a href={item.link} className="mt-2 text-blue-500 hover:underline">
          Keep Reading
        </a>
      </div>
    </motion.div>
  );
};