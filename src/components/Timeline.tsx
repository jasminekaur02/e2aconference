import React from 'react';

const timelineEvents = [
    {
        date: "MARCH 8-9, 2025",
        title: "Conference BEGINS - Conference ENDS"
    },
    {
        date: "FEBRUARY 25, 2025",
        title: "Camera Ready Exam"
    },
    {
        date: "FEBRUARY 10, 2025",
        title: "Review Process Ends"
    },
    {
        date: "SEPTEMBER 15, 2024",
        title: "Paper Submission Begins"
    },
    {
        date: "DECEMBER 16, 2024",
        title: "Paper Submission Ends"
    }
];

const ZigzagTimeline = () => {
    return (
        <div className="relative flex justify-center mt-16">
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
                                <div className="absolute bottom-full mb-4 text-center transform translate-y-[-20%] ">
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {event.title}
                                    </h3>
                                </div>
                            ) : (
                                // Odd index: Text below the line
                                <div className="absolute top-full mt-4 text-center  ">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ZigzagTimeline;
