import React from 'react';

const timelineData = [
  {
    date: '24 September 2024',
    title: 'Paper Submission Starts',
  },
  {
    date: '20 January 2025',
    title: 'Last date of Paper Submission',
  },
  {
    date: '20 February 2025',
    title: 'Review Process Ends/ Acceptance Notification',
  },
  {
    date: '25 February 2025',
    title: 'Camera Ready Submission/ Registration End',
  },
  {
    date: '8-9 March 2025',
    title: 'Conference Days 1 & 2',
  }
];

const TimelineComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Important<span className='text-blue-600'> Dates</span></h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-4 md:left-2 h-full w-0.5 bg-gray-300 lg:hidden "></div>
        <div className="hidden md:hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-300"></div>
        
        {/* Timeline items */}
        <div className="flex flex-col md:gap-8 lg:grid lg:grid-cols-5">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex flex-col md:items-left lg:items-center">
              <div className="mb-2 md:mb-4 text-center md:text-left  lg:text-center md:ml-10 z-10 bg-white md:w-full">
                <span className="text-blue-600 font-bold text-sm md:text-base">{item.date}</span>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-2 top-3 md:relative md:left-auto lg:top-auto md:mb-0 lg:mb-4 z-20"></div>
              <div className="bg-gray-100 rounded p-2 md:p-2 text-center ml-8 md:ml-8 lg:ml-0 flex-grow md:h-24 flex flex-col justify-center   md:text-left lg:text-center shadow-md">
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
