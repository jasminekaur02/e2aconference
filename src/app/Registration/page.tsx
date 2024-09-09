'use client';
import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

const ConferenceFeesPage = () => {
  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero title="Registration" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
      <div className=" min-h-screen p-10">
        
        {/* Important Note Section */}
        <section className="bg-yellow-100 p-6 my-6 mx-auto max-w-7xl rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-red-600 mb-4">Important Note: Registration</h2>
  <p className="text-gray-700 mb-4">
    NOTE: In order to participate in the conference of E2ACon2025 at least one author must register and pay as per the fee mentioned below. The registration fee includes Conference Kit, attendance to all technical sessions, workshops, plenary talks, and special sessions, Tea and Snacks on both days.
  </p>
  <p className="text-gray-700 mb-4">
    Only accepted and presented papers will be published in the conference proceedings/Journals. The page limit for each paper is 10, and up to two additional pages will be permitted for an additional charge of ₹1000/$15 per page for Indians and foreigners, respectively.
  </p>
  <p className="text-gray-700">
    Students/Research Scholars have to submit a scanned copy of their Institute ID card along with the Registration form. However, they must produce the original copy of the Institute ID card at the time of presentation.
  </p>
</section>


        {/* Conference Fee Details */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <header className="bg-blue-600 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">Conference Fee Details</h1>
          </header>
          <main className="p-6">
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
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm text-gray-700">
                For transferring registration fee through NEFT/RTGS/IMPS/Bank transfer, bank account details will be shared after acceptance.
              </p>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConferenceFeesPage;
