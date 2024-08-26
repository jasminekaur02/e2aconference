import React from 'react'
import Navbar from '@/components/navbar'
import Team from './components/Team'
import Footer from '@/components/Footer'

const MeetOurTeam = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <Team />
        </main>
        <Footer />
    </div>
  )
}

export default MeetOurTeam
