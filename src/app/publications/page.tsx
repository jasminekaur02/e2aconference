import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import { Copy } from 'lucide-react';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero title="Publications" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />

      {/* Publication Section */}
      <div className="min-h-screen flex flex-col p-8">
        <section className="mb-12 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
            <Copy className="mr-2" />
            Publication
          </h3>
          <p className="text-md leading-relaxed text-justify mb-4">
            
            {/* (<a href="https://www.springer.com/series/7818" className="text-blue-600 hover:underline"> </a>). */}
          </p>
          <p className="text-md leading-relaxed text-justify mb-4">
           TO BE ANNOUNCED 
          </p>
          
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
