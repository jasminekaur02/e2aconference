import dynamic from 'next/dynamic';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <HeaderTop/>
      <Navbar />
      <Hero/>

    </>
  );
};

export default Home;
