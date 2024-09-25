import React from 'react';
import PageHero from '@/components/PageHero';
const Announcements = () => {
  const announcements = [
    {
      title: "Event 1: Conference Announcement",
      date: "March 08, 2025",
      content: "Join us for the International Conference on Electrical, Electronics, and Automation. Register now!",
      image: "https://nitj.ac.in/files/1710597637693-WhatsApp%20Image%202024-03-16%20at%204.43.42%20PM%20(1).jpeg",
    },
    {
      title: "Event 2: Workshops Begins",
      date: "March 08, 2025",
      content: "A workshops begins and its applications will be held. Don't miss out!",
      image: "https://nitj.ac.in/files/1710597637693-WhatsApp%20Image%202024-03-16%20at%204.43.42%20PM%20(1).jpeg",
    },
    {
      title: "Event 3: Keynote Speaker Revealed",
      date: "February 20, 2025",
      content: "We are excited to announce our keynote speaker for the conference!",
      image: "https://nitj.ac.in/files/1710597637693-WhatsApp%20Image%202024-03-16%20at%204.43.42%20PM%20(1).jpeg",
    },
    
  ];

  return (
    <>
      <PageHero title="Announcements" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
      <div className="font-sans antialiased bg-gray-100">
        {/* Main Content */}
        <div className="container mx-auto py-8 px-4 md:px-8 flex flex-col md:flex-row md:space-x-6">
          {/* Main Announcements Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 md:mb-0">
            {announcements.map((announcement, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={announcement.image}
                  alt="Announcement"
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
                  <p className="text-gray-500 mb-4">{announcement.date}</p>
                  <p className="text-gray-700">{announcement.content}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 space-y-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-bold mb-4">Top News</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-blue-600">
                    Paper Submission starts on 24 September 2024.
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:underline text-blue-600">
                    AI-Driven Healthcare: Improving Diagnosis Accuracy Through Machine Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-600">
                    Advancements in 5G: Paving the Way for Smarter Cities and IoT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-600">
                    Green Energy Innovations: Sustainable Solutions for Data Centers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-600">
                    Cybersecurity Challenges: Protecting Critical Infrastructure in a Connected World
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-600">
                    Edge Computing: Revolutionizing Real-Time Data Processing
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-bold mb-4">
                The Role of Autonomous Vehicles in the Future of Transportation
              </h4>
              <p>
                With rapid advancements in AI and machine learning, the next decade is set to witness an
                automotive revolution, where autonomous vehicles will redefine transportation and logistics
                industries.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-bold mb-4">
                Breakthroughs in Wearable Technology and Smart Textiles
              </h4>
              <p>
                Researchers are pushing the boundaries of wearable technology, integrating sensors and AI to
                create smart textiles that have the potential to revolutionize healthcare, sports, and everyday
                life.
              </p>
            </div> */}
          </aside>
        </div>
      </div>
    </>
  );
};
  export default Announcements;
  