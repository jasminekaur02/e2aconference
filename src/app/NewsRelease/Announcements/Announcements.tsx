import React from 'react';
import PageHero from '@/components/PageHero';
const Announcements = () => {
  const announcements = [
    {
      title: "Event 1: Conference Announcement",
      date: "March 1, 2025",
      content: "Join us for the International Conference on Electrical, Electronics, and Automation. Register now!",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Event 2: Workshop on AI",
      date: "March 08, 2025",
      content: "A workshop on AI and its applications will be held. Don't miss out!",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Event 3: Keynote Speaker Revealed",
      date: "February 20, 2025",
      content: "We are excited to announce our keynote speaker for the conference!",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Event 4: Upcoming Hackathon",
      date: "April 15, 2025",
      content: "Participate in our annual hackathon to showcase your skills and win exciting prizes!",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (<>
  <PageHero title="Announcements" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
    <div className="font-sans antialiased bg-gray-100">
      {/* Hero Section */}
      

      {/* Main Content */}
      <div className="container mx-auto py-8 flex space-x-6">
        {/* Main Announcements Grid */}
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={announcement.image} alt="Announcement" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
                <p className="text-gray-500 mb-4">{announcement.date}</p>
                <p className="text-gray-700">{announcement.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-1/3 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold mb-4">Top News</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-blue-600">The biggest supermoon since 1948</a></li>
              <li><a href="#" className="hover:underline text-blue-600">Cristiano Ronaldo showing his fighting attitude</a></li>
              <li><a href="#" className="hover:underline text-blue-600">Brazilian film team stages Cannes protest</a></li>
              <li><a href="#" className="hover:underline text-blue-600">Samsung attacks Microsoft</a></li>
              <li><a href="#" className="hover:underline text-blue-600">Beyoncé in 'Formation' for Hillary Clinton</a></li>
              <li><a href="#" className="hover:underline text-blue-600">Suspect in Kaba Brown Case confesses to 4 murders</a></li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold mb-4">Why the Next President Will Face an Automotive Revolution</h4>
            <p>Whoever wakes up in the Oval Office in January will be facing a wide variety of challenges.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold mb-4">Victoria's Secret Fashion Show</h4>
            <p>The hottest looks from the 2015 Victoria's Secret Fashion Show are now out for the public to see.</p>
          </div>
        </aside>
      </div>
    </div>
    </> );
};

export default Announcements;
