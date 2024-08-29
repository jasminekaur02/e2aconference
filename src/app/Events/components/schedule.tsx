// Updated Schedule.tsx with subtle background and animation

import React from "react";

const Schedule: React.FC = () => {
  const scheduleItems = [
    { time: "09:00-10:00", title: "Event Registration", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "10:00-10:00", title: "The Future of JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "12:00-02:00", title: "Javascript Ecosystem", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "03:00-04:00", title: "Javascript Algorithm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
  ];

  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center py-12">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/path-to-your-bg-image.png')` }}></div>
      <h2 className="text-4xl font-bold mb-4 relative z-10">
        Conference <span className="text-blue-600">Schedule</span>
      </h2>
      <p className="text-lg mb-10 relative z-10">Friday, 10 July 2024</p>
      <div className="w-full max-w-3xl relative z-10">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg mb-6 p-6 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <div className="text-lg font-semibold">{item.time}</div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
