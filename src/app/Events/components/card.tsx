"use client";

import React from 'react';

interface CardProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, name, title, description }) => {
  return (
    <div className="min-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden mx-2 transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex justify-around mt-4">
          <a href="#" className="text-blue-500">🔗</a>
          <a href="#" className="text-blue-500">🔗</a>
          <a href="#" className="text-blue-500">🔗</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
