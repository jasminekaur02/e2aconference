import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import StudentCommittee from './components/student'; // Correct component import
import Footer from '@/components/Footer';

const MeetOurTeam = () => {
  return (
    <div>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <main className="container mt-12 mx-auto px-4">
        <StudentCommittee /> {/* Use the correct component name */}
      </main>
      <Footer />
    </div>
  );
}

export default MeetOurTeam;
