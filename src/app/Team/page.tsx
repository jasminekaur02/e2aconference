import React from 'react'
import HeaderTop from '@/components/HeaderTop'
import Navbar from '@/components/navbar'
import Team from './components/Team'
import Footer from '@/components/Footer'

const MeetOurTeam = () => {
  return (
    <div>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <main className="container mt-12 mx-auto px-4">
        <Team />
        </main>
        <Footer />
    </div>
  )
}

export default MeetOurTeam
