import React from 'react'
import HeaderTop from '@/components/HeaderTop'
import Navbar from '@/components/navbar'
import PageHero from '@/components/PageHero'
import AdvCommittee from './components/AdvCommittee'  // Assuming Committee3 is the component for the advisory committee
import Footer from '@/components/Footer'

const MeetOurTeamPage: React.FC = () => {
  return (
    <div>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
  title="Advisory Committee" 
  image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
/>
      <main className="container mt-12 mx-auto px-4">
        <AdvCommittee />
      </main>
      <Footer />
    </div>
  )
}

export default MeetOurTeamPage
