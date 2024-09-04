"use client";

import React from 'react';
import Card from './card';

const KeynoteCarousel: React.FC = () => {
  const cards = [
    {
      image: 'https://via.placeholder.com/150', // Replace with your image URLs
      name: 'Scott Beer',
      title: 'Insert your title here',
      description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Ivanna Drian',
      title: 'Insert your title here',
      description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Pevinna Summer',
      title: 'Insert your title here',
      description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Pevinna Summer',
      title: 'Insert your title here',
      description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    
    // Add more cards as needed
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-start overflow-x-scroll space-x-4 p-4 scroll-smooth scrollbar-hide hover:scroll-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KeynoteCarousel;
