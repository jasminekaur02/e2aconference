import React from "react";

export default function AboutUs() {
    return (
        <section className="relative py-16 overflow-hidden" id="AboutUs"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-gray-900 mb-12">
                    About <span className="text-blue-600">us</span>
                </h2>
                
                <div className="relative">
                    {/* White Content Box */}
                    <div className="relative bg-white p-8 rounded-lg shadow-lg z-10 mb-24">
                        <p className="text-lg text-justify text-gray-700">
                            International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today&apos;s rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge.
                            As we navigate an era of unprecedented technological advancement, E2A strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2A to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.
                        </p>
                    </div>
                    
                    {/* Blue Background Shape */}
                    <div className="absolute top-0 w-1/2 h-full bg-indigo-50 rounded-tr-[100px] -z-10 transform -translate-y-10 -left-48"></div>
                </div>

                {/* Timeline Section */}
                <div className="relative">
                    <div className="absolute left-[20%] h-full w-0.5 bg-blue-600"></div>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="flex items-center mb-12">
                            <div className="w-[20%] pr-8 text-right">
                                <p className="text-sm text-gray-500 whitespace-pre-line">{event.date}</p>
                            </div>
                            <div className="w-4 h-4 bg-blue-600 rounded-full z-10 absolute left-[20%] transform -translate-x-1/2"></div>
                            <div className="w-[70%] pl-8">
                                <h3 className="text-lg font-semibold">
                                    {event.title.split(' ').map((word, i) => (
                                        <span key={i} className={word === 'BEGINS' || word === 'ENDS' || word === 'Ready' ? 'text-blue-600' : ''}>
                                            {word}{' '}
                                        </span>
                                    ))}
                                </h3>
                                <p className="text-sm text-gray-700 mt-1">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const timelineEvents = [
    {
        date: "MARCH\n8-9, 2025",
        title: "Conference BEGINS - Conference ENDS",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
    {
        date: "FEBRUARY\n25, 2025",
        title: "Camera Ready Exam",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
    {
        date: "FEBRUARY\n10, 2025",
        title: "Review Process Ends",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
    {
        date: "SEPTEMBER\n15, 2024",
        title: "Paper Submission Begins",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
    {
        date: "DECEMBER \n16,2024",
        title: "Paper Submission Ends",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    }
];