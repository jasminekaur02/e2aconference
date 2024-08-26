import React from 'react'
import Navbar from './navbar'
import Team from './Team'
import Footer from './Footer'

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
