import React from 'react';

// Define the interface for the component props
interface PageHeroProps {
  title: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, image }) => {
  return (
    <div className="relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 sm:h-80 md:h-96 object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-4 sm:px-6 md:px-8">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageHero;
