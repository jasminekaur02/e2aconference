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
            All peer-reviewed, accepted and presented papers in the conference will be considered to be published as proceedings in the prestigious SCOPUS-indexed &quot;Lecture Notes in Electrical Engineering&quot; by Springer series (Approval in Process)  
            (<a href="https://www.springer.com/series/7818" className="text-blue-600 hover:underline">https://www.springer.com/series/7818 </a>).
          </p>
          <p className="text-md leading-relaxed text-justify mb-4">
            LNEE is also abstracted and indexed in:
          </p>
          <ul className="list-disc list-inside text-md text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li>DBLP</li>
            <li>EI Compendex</li>
            <li>INSPEC</li>
            <li>Japanese Science and Technology Agency (JST)</li>
            <li>SCImago</li>
            <li>SCOPUS</li>
            <li>WTI Frankfurt eG</li>
            <li>zbMATH</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
