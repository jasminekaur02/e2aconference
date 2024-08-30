'use client';
import React from 'react';

const ConferenceFeesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
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
                <td className="border p-2 text-center">6000 + 18% GST</td>
                <td className="border p-2 text-center">150 + 18% GST</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Faculty from Academics</td>
                <td className="border p-2 text-center">8000 + 18% GST</td>
                <td className="border p-2 text-center">200 + 18% GST</td>
              </tr>
              <tr>
                <td className="border p-2">Delegates from Industry</td>
                <td className="border p-2 text-center">10000 + 18% GST</td>
                <td className="border p-2 text-center">300 + 18% GST</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Attendee</td>
                <td className="border p-2 text-center">3000 + 18% GST</td>
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
  );
};

export default ConferenceFeesPage;