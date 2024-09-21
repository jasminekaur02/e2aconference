import React from 'react';

const timelineData = [
  {
    date: '15 September 2024',
    title: 'Submission Start',
  },
  {
    date: '16 December 2024',
    title: 'Last date of Paper submission',
  },
  {
    date: '10 February 2025',
    title: 'Review Process End/Acceptance',
  },
  {
    date: '25 February 2025',
    title: 'Camera Ready paper/Registration',
  },
  {
    date: '8-9 March 2025',
    title: 'Conference Date',
  }
];

const TimelineComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Important Dates</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-4 h-full w-0.5 bg-gray-300 md:hidden"></div>
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300"></div>
        
        {/* Timeline items */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex flex-col md:items-center">
              <div className="mb-2 md:mb-4 text-center z-10 bg-white md:w-full">
                <span className="text-blue-600 font-bold text-sm md:text-base">{item.date}</span>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-2 top-3 md:relative md:left-auto md:top-auto md:mb-4 z-20"></div>
              <div className="bg-gray-100 rounded p-2 md:p-2 text-center ml-8 md:ml-0 flex-grow md:h-24 flex flex-col justify-center items-center shadow-md">
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
