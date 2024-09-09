import React from 'react'
import HeaderTop from '@/components/HeaderTop'
import Navbar from '@/components/navbar'
import Team from './components/Team'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const MeetOurTeam = () => {
  return (
    <div>
      <HeaderTop isHomePage={false} />
      <Navbar />
        <Team />
        <Footer />
    </div>
  )
}

export default MeetOurTeam