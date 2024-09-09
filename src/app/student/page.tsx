import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import StudentCommittee from './components/student'; // Correct component import
import Footer from '@/components/Footer';

const MeetOurTeam = () => {
  return (
    <div>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
  title="Student Members" 
  image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
/>
      <main className="container mt-12 mx-auto px-4">
        <StudentCommittee /> {/* Use the correct component name */}
      </main>
      <Footer />
    </div>
  );
}

export default MeetOurTeam;
