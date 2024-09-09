import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

const AwardsPage = () => {
  return (
    <>
      <HeaderTop isHomePage={false}/>
      <Navbar />
      <PageHero 
        title="Awards" 
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg" // Replace with actual image path
      />
      <section className=" py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">Conference Awards</h2>

          {/* Award Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Best Paper Award */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Best Paper Award</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All nominations will be selected during the review process and grouped into a few key areas. Nominated papers in the same key area will be presented in the same session.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Only full paper submissions which are presented at the conference will be eligible for the best paper award.
              </p>
            </div>

            {/* Best Student Paper Award */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Best Student Paper Award</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The first author of the paper should be a registered university student.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Only full papers submissions which are presented at the conference will be considered.
              </p>
            </div>

            {/* Best Oral Presentation Award */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Best Oral Presentation Award</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For every session, one best oral presentation will be selected by session chairs based on originality, applicability, technical merit, PPT quality, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Think Your Paper Deserves an Award?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Make sure your paper is presented at the conference and meets the eligibility criteria to be considered for one of our prestigious awards.
          </p>
          <a href="/Guidelines" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition duration-300">
            Submit Your Paper
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AwardsPage;
