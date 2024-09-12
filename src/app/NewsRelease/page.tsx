import React from 'react';
import Navbar from '@/components/navbar'; // Adjust the path as necessary
import HeaderTop from '@/components/HeaderTop'; // Adjust the path as necessary
import Announcements from './Announcements/Announcements'; // Import the Announcements component
import Footer from '@/components/Footer'; // Adjust the path as necessary

const AnnouncementsPage = () => {
  return (
    <div>
      {/* Pass the isHomePage prop to HeaderTop */}
      <HeaderTop isHomePage={false} />
      <Navbar />
      <main className="min-h-screen mt-12">
        <Announcements />
      </main>
      <Footer />
    </div>
  );
};

export default AnnouncementsPage;
