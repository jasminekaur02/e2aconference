// components/Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Preloader Animation */}
      <img src="/logoe2a.gif" alt="Loading..." className="w-32 h-32" />
    </div>
  );
};

export default Preloader;
