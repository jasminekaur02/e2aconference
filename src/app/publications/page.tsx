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
      <div className="min-h-screen flex flex-col p-8 bg-gray-100">
        <section className="mb-12 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
            <Copy className="mr-2" />
            Publication
          </h3>
          <p className="text-md leading-relaxed text-justify mb-6">
            All peer-reviewed, accepted, and presented papers of the conference will be published as proceedings in the prestigious  SCOPUS indexed by Springer series   
            <a 
              href="https://www.springer.com/series/7818" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
               <span> “Lecture Notes in Electrical Engineering”</span>
            </a> 
            <span> or any other Book Series. (Approval Pending)*.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ul className="list-disc pl-5">
              <li>DBLP</li>
              <li>EI Compendex</li>
              <li>INSPEC</li>
              <li>Japanese Science and Technology Agency (JST)</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>SCImago</li>
              <li>SCOPUS</li>
              <li>WTI Frankfurt eG</li>
              <li>zbMATH</li>
            </ul>
          </div>
          <p className="text-md bg-indigo-100 text-blue-600 p-4 rounded-lg text-sm sm:text-base">
            NOTE: Few selected best papers will be forwarded to SCOPUS/SCI indexed journals. However, publication is subject to further review and acceptance by the journal&apos;s Editorial teams. Any publication fees required by the journals will be borne by the authors separately and directly to the journal, if required.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
