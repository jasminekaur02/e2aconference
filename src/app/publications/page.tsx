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
      <div className="min-h-screen flex flex-col p-6 sm:p-8 bg-gradient-to-b from-gray-100 to-white">
        <section className="mb-12 bg-white shadow-lg rounded-xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6 flex items-center space-x-3">
            <Copy className="text-blue-600" />
            <span>Publication</span>
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
            It is planned to publish the peer-reviewed and selected papers of the conference as proceedings with Springer in their prestigious
            <a 
              href="https://www.springer.com/series/7818" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
            >
              <span> &quot;Lecture Notes in Electrical Engineering&quot;</span>
             
            </a>
            series. For detailed instructions for authors and editors of conference proceedings, kindly visit the following link: 
            <a 
              href="https://www.springer.com/us/authors-editors/conference-proceedings" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
            >
              <span> Conference Proceedings Instructions</span>
            </a>.
            <br />
            <br />
            Selected papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers, and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-blue-700">Indexed in:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>DBLP</li>
                <li>EI Compendex</li>
                <li>INSPEC</li>
                <li>Japanese Science and Technology Agency (JST)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-blue-700">Other Databases:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>SCImago</li>
                <li>SCOPUS</li>
                <li>WTI Frankfurt eG</li>
                <li>zbMATH</li>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-100 p-4 sm:p-6 rounded-lg shadow-md">
            <p className="lg:text-lg text-blue-600 font-medium">
              <span className="font-semibold">NOTE:</span> Few selected best papers will be forwarded to SCOPUS/SCI indexed journals. However, publication is subject to further review and acceptance by the journal&apos;s Editorial teams. Any publication fees required by the journals will be borne by the authors separately and directly to the journal, if required.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
