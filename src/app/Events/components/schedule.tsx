import React, { useState } from "react";

const Schedule: React.FC = () => {
  // State for toggling between Day 1 and Day 2
  const [activeDay, setActiveDay] = useState(1);

  const day1ScheduleItems = [
    { time: "09:00-10:00", title: "Event Registration", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "10:00-10:00", title: "The Future of JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "12:00-02:00", title: "Javascript Ecosystem", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "03:00-04:00", title: "Javascript Algorithm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
  ];

  const day2ScheduleItems = [
    { time: "09:00-10:00", title: "React Workshop", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "10:00-11:00", title: "Advanced Node.js", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "11:00-12:00", title: "Typescript Deep Dive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
    { time: "01:00-02:00", title: "Performance Optimization", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada." },
  ];

  const scheduleItems = activeDay === 1 ? day1ScheduleItems : day2ScheduleItems;

  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center py-12">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/path-to-your-bg-image.png')` }}></div>
      <h2 className="text-4xl font-bold mb-4 relative z-10">
        Conference <span className="text-blue-600">Schedule</span>
      </h2>

      {/* Day Toggle */}
      <div className="flex mb-10 relative z-10">
        <button
          className={`px-6 py-2 font-semibold ${activeDay === 1 ? "bg-blue-600 text-white" : "bg-white text-blue-600"} border border-blue-600 rounded-l-lg`}
          onClick={() => setActiveDay(1)}
        >
          Day 1 <br/> September 25th
        </button>
        <button
          className={`px-6 py-2 font-semibold ${activeDay === 2 ? "bg-blue-600 text-white" : "bg-white text-blue-600"} border border-blue-600 rounded-r-lg`}
          onClick={() => setActiveDay(2)}
        >
          Day 2 <br/> September 26th
        </button>
      </div>

      {/* Schedule Items */}
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
