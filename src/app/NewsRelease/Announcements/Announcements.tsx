import React from 'react';
import PageHero from '@/components/PageHero';
const Announcements = () => {
  const announcements = [
    {
      title: "Event 1: Conference Announcement",
      date: "March 1, 2025",
      content: "Join us for the International Conference on Electrical, Electronics, and Automation. Register now!",
      image: "https://nitj.ac.in/files/1710597637693-WhatsApp%20Image%202024-03-16%20at%204.43.42%20PM%20(1).jpeg",
    },
    {
      title: "Event 2: Workshops Begins",
      date: "March 08, 2025",
      content: "A workshops begins and its applications will be held. Don't miss out!",
      image: "https://khalsavox.com/wp-content/uploads/2024/04/image-15.png"
    },
    {
      title: "Event 3: Keynote Speaker Revealed",
      date: "February 20, 2025",
      content: "We are excited to announce our keynote speaker for the conference!",
      image: "data:image/jpeg;base64,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",
    },
    {
      title: "Event 4: Upcoming Events",
      date: "April 15, 2025",
      content: "To be announced",
      image: "https://etimg.etb2bimg.com/photo/99959880.cms",
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
  <li><a href="#" className="hover:underline text-blue-600">Breakthrough in Quantum Computing: New Algorithm Speeds Up Computations</a></li>
  <li><a href="#" className="hover:underline text-blue-600">AI-Driven Healthcare: Improving Diagnosis Accuracy Through Machine Learning</a></li>
  <li><a href="#" className="hover:underline text-blue-600">Advancements in 5G: Paving the Way for Smarter Cities and IoT</a></li>
  <li><a href="#" className="hover:underline text-blue-600">Green Energy Innovations: Sustainable Solutions for Data Centers</a></li>
  <li><a href="#" className="hover:underline text-blue-600">Cybersecurity Challenges: Protecting Critical Infrastructure in a Connected World</a></li>
  <li><a href="#" className="hover:underline text-blue-600">Edge Computing: Revolutionizing Real-Time Data Processing</a></li>
</ul>

          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
  <h4 className="text-xl font-bold mb-4">The Role of Autonomous Vehicles in the Future of Transportation</h4>
  <p>With rapid advancements in AI and machine learning, the next decade is set to witness an automotive revolution, where autonomous vehicles will redefine transportation and logistics industries.</p>
</div>
<div className="bg-white shadow-md rounded-lg p-4">
  <h4 className="text-xl font-bold mb-4">Breakthroughs in Wearable Technology and Smart Textiles</h4>
  <p>Researchers are pushing the boundaries of wearable technology, integrating sensors and AI to create smart textiles that have the potential to revolutionize healthcare, sports, and everyday life.</p>
</div>

        </aside>
      </div>
    </div>
    </> );
};

export default Announcements;
