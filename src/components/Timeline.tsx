import React from 'react';

const timelineData = [
  {
    date: '15 September 2024',
    title: 'Submission Start',
    description: 'The conference submission period begins.'
  },
  {
    date: '16 December 2024',
    title: 'Last date of Paper submission',
    description: 'Deadline for submitting papers for the conference.'
  },
  {
    date: '10 February 2025',
    title: 'Review Process End/Acceptance',
    description: 'Review process concludes and acceptances are announced.'
  },
  {
    date: '25 February 2025',
    title: 'Camera Ready paper/Registration',
    description: 'Deadline for camera-ready papers and registration.'
  },
  {
    date: '8-9 March 2025',
    title: 'Conference Date',
    description: 'The main conference dates.'
  }
];

<<<<<<< HEAD
const ZigzagTimeline = () => {
    return (
        <div className="relative flex justify-center pt-6 pb-12">
            <div className="relative z-10 w-full max-w-6xl">
                {/* Central Dotted Line */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full border-t-2 border-dotted border-blue-600"></div>
                </div>

                {/* Timeline Events */}
                <div className="relative flex justify-between w-full">
                    {timelineEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center w-[20%]`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2"></div>

                            {/* Text and Date */}
                            {index % 2 === 0 ? (
                                // Even index: Text above the line
                                <div className="absolute bottom-full mb-2 text-center transform translate-y-[-10%]">
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {event.title}
                                    </h3>
                                </div>
                            ) : (
                                // Odd index: Text below the line
                                <div className="absolute top-full mt-2 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
=======
const TimelineComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Conference Timeline</h2>
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
              <div className="bg-gray-100 rounded p-3 md:p-4 text-left md:text-center ml-8 md:ml-0 flex-grow md:h-40 flex flex-col justify-between shadow-md">
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
>>>>>>> timeline
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ZigzagTimeline;
=======
export default TimelineComponent;
>>>>>>> timeline
