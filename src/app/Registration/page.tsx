'use client';
import React, { useState } from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FaHandPointer } from 'react-icons/fa';

const ConferenceFeesPage = () => {
  const [showMoreNote, setShowMoreNote] = useState(false);

  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero title="Registration" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
      <div className="min-h-screen p-10">
        
        {/* Important Note Section */}
        <section className="bg-indigo-50 p-6 my-6 mx-auto max-w-7xl rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Important Note: Registration</h2>
          <p className="text-gray-700 mb-4">
            <b>NOTE:</b> To participate in the conference of E2ACON 2025, at least one author must register and pay as per the fee mentioned below. The registration fee includes a conference kit(for offline participants only), attendance at all technical sessions, workshops, plenary talks, special sessions, and tea and snacks on both days.However Certificates will be issued to all registered participants.
          </p>

          {/* Full text visible on lg screens */}
          <div className="hidden lg:block">
            <p className="text-gray-700 mb-4">
              Only accepted and presented papers will be published in the conference proceedings/Journals. The page limit for each paper is 10, and up to two additional pages will be permitted for an additional charge of ₹1000/$15 per page for Indians and foreigners, respectively.
            </p>
            <p className="text-gray-700">
              Students/Research Scholars must submit a scanned copy of their Institute ID card and the Registration form. However, they must produce the original copy of the Institute ID card at the time of presentation.
            </p>
          </div>

          {/* Show expandable text on small and medium screens */}
          <div className="lg:hidden">
            {showMoreNote ? (
              <>
                <p className="text-gray-700 mb-4">
                  Only accepted and presented papers will be published in the conference proceedings/Journals. The page limit for each paper is 10, and up to two additional pages will be permitted for an additional charge of ₹1000/$15 per page for Indians and foreigners, respectively.
                </p>
                <p className="text-gray-700">
                  Students/Research Scholars have to submit a scanned copy of their Institute ID card along with the Registration form. However, they must produce the original copy of the Institute ID card at the time of presentation.
                </p>
              </>
            ) : null}

            {/* Read More / Read Less button for small and medium screens */}
            <button 
              onClick={() => setShowMoreNote(!showMoreNote)} 
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              {showMoreNote ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </section>

        {/* Conference Fee Details */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <header className="bg-blue-600 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">Conference Fee Details</h1>
          </header>

          {/* Wrapping the table inside a scrollable div for small and medium screens */}
          <div className="p-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border p-2 text-left">Delegates</th>
                  <th className="border p-2 text-center">Indian (INR)</th>
                  <th className="border p-2 text-center">International (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Students/Research Scholars</td>
                  <td className="border p-2 text-center">4000 + 18% GST</td>
                  <td className="border p-2 text-center">150 + 18% GST</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Faculty from Academics</td>
                  <td className="border p-2 text-center">5000 + 18% GST</td>
                  <td className="border p-2 text-center">200 + 18% GST</td>
                </tr>
                <tr>
                  <td className="border p-2">Delegates from Industry</td>
                  <td className="border p-2 text-center">6000 + 18% GST</td>
                  <td className="border p-2 text-center">250 + 18% GST</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Attendee</td>
                  <td className="border p-2 text-center">2000 + 18% GST</td>
                  <td className="border p-2 text-center">50 + 18% GST</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-gray-700">
              {/* For transferring registration fee through NEFT/RTGS/IMPS/Bank transfer, bank account details will be shared after acceptance. */}
            </p>
          </div>
        </div>

        {/* Registration Links Section */}
        <div className="bg-indigo-50 p-6 my-6 mx-auto max-w-7xl rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Registration Links</h2>
          <div className="flex items-center space-x-2">
    <p className="text-gray-700 font-medium">Registration Link:</p>
    <Link 
      href="https://www.nitj.ac.in/events_registration/e2acon20025/login"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1 hover:bg-blue-600 text-blue-600 bg-transparent font-bold py-1.5 px-3 rounded-lg hover:text-white transition duration-300"
    >
      <FaHandPointer className="w-5 h-5 animate-bounce hover:text-white" />
      <span>Click Here</span> 
      
    </Link>
  </div>


          <p className="text-gray-700 mb-2">
          <b>Please Note:</b> After submitting the registration fee, it is <b>mandatory</b> to fill the following form. The registration will be confirmed only if this form is filled.
          </p>

          <div className="mt-4 space-y-3 max-w-sm mx-auto">
  
  <Link 
    href="https://forms.gle/NWa3kdJmQsFEhJVeA"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full bg-blue-600 text-white text-center font-bold py-2.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
  >
    Fill the Google Form
  </Link>
</div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ConferenceFeesPage;
