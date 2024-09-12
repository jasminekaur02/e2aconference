import React from 'react';

// Define the interface for the component props
interface PageHeroProps {
  title: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, image }) => {
  return (
    <div className="relative">
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-7xl font-extrabold">{title}</h2>
      </div>
    </div>
  );
};

export default PageHero;
