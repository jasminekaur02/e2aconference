import React from "react";

const timelineEvents = [
    {
        date: "MARCH\n8-9, 2025",
        title: "Conference BEGINS - Conference ENDS"
    },
    {
        date: "FEBRUARY\n25, 2025",
        title: "Camera Ready Exam"
    },
    {
        date: "FEBRUARY\n10, 2025",
        title: "Review Process Ends"
    },
    {
        date: "SEPTEMBER\n15, 2024",
        title: "Paper Submission Begins"
    },
    {
        date: "DECEMBER\n16, 2024",
        title: "Paper Submission Ends"
    }
];

export default function AboutUs() {
    return (
        <section className="relative py-16 overflow-hidden" id="AboutUs"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Us Header */}
                <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
                    About <span className="text-blue-600">Us</span>
                </h2>

                {/* White Content Box with Blue Background Shape */}
                <div className="relative mb-24">
                    <div className="relative bg-white p-8 rounded-lg shadow-lg z-10">
                        <p className="text-lg text-justify text-gray-700">
                            International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today's rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge.
                            As we navigate an era of unprecedented technological advancement, E2A strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2A to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.
                        </p>
                    </div>
                    {/* Blue Background Shape */}
                    <div className="absolute top-0 w-1/2 h-full bg-indigo-50 rounded-tr-[100px] -z-10 transform -translate-y-10 -left-48"></div>
                </div>

                {/* Horizontal Zigzag Timeline */}
                <div className="relative flex justify-center mt-16">
                    <div className="relative z-10 w-full max-w-6xl">
                        {/* Dotted Horizontal Line */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full border-dotted border-t-2 border-blue-600"></div>
                        </div>

                        {/* Timeline Points */}
                        <div className="relative flex justify-between w-full">
                            {timelineEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center w-[20%]`}
                                    style={{
                                        transform: `translateY(${index % 2 === 0 ? '-60px' : '60px'})`,
                                    }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="relative mb-2">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                                        {/* Vertical Dotted Line */}
                                        <div
                                            className="absolute w-0.5 h-8 border-dotted border-blue-600 top-6 left-1/2 transform -translate-x-1/2"
                                            style={{
                                                top: index % 2 === 0 ? '-20px' : 'unset',
                                                bottom: index % 2 !== 0 ? '-20px' : 'unset'
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-gray-500 text-center whitespace-pre-line">
                                        {event.date}
                                    </p>
                                    <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                        {event.title.split(' ').map((word, i) => (
                                            <span
                                                key={i}
                                                className={word === 'BEGINS' || word === 'ENDS' || word === 'Ready' ? 'text-blue-600' : ''}
                                            >
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}