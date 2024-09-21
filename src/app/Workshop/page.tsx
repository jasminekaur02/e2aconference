import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import React from 'react';

const WorkshopPage = () => {
  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero title="Workshops" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-8">
            In addition to existing technical presentations, industry forums, and exhibitions, E2ACon2025 will feature a series of half and full-day workshops. The purpose of a workshop is to provide an opportunity for participants from academia, industry, government, and other related parties to present and discuss novel ideas on current and emerging topics relevant to the areas of Electrical, Electronics, and Automation.
          </p>
        </section>

        {/* Workshop Proposal Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Workshop Proposal Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Proposal Requirements</h3>
              <p className="text-gray-700 mb-4">Each workshop proposal (maximum 5-6 pages) must include the following:</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Title of the workshop</li>
                <li>Workshop Organisers (names, affiliation, and contact information)</li>
                <li>Scope and topics of the workshop (max 1 page)</li>
                <li>Rationale (max 1 page): Importance, relevance, and attraction potential of the topic</li>
                <li>A short biography of the organisers (up to 200 words per organiser)</li>
                <li>Planned format of the workshop, including duration and schedule</li>
                <li>A description of the publicity and promotion plan</li>
                <li>A description of past versions of the workshop (if applicable)</li>
              </ol>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How to Submit a Workshop Proposal?</h3>
              <p className="text-gray-700 mb-4">
                Proposals should be submitted in a PDF file, not exceeding 5-6 pages, for review to <a href="mailto:info.e2a@nitj.ac.in" className="text-blue-600">info.e2a@nitj.ac.in</a>. The selected workshop will be held during the conference dates for the benefit of the conference attendees.
              </p>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Selection Process</h2>
            <p className="text-gray-700 mb-4">
              All workshop proposals will be peer-reviewed. The Workshop Chairs will make a final selection to ensure variety and relevance to the conference attendees and to best fit the conference schedule.
            </p>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Important Dates</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Proposal Submission Deadline:</strong> January 20, 2025</li>
              <li><strong>Notification of Selection:</strong> February 5, 2025</li>
            </ul>
          </div>
        </section>

        {/* Contact Information - Contact Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: 'Dr. Richa Sharma',
                title: 'Assistant Professor, NIT Jalandhar',
                //email: 'richas@nitj.ac.in',
                imageUrl: 'https://www.nitj.ac.in/images/faculty/23020446113.jpeg' // Replace with actual image URL
              },
              {
                name: 'Dr. Anil Kumar Yadav',
                title: 'Assistant Professor, NIT Jalandhar',
                // email: 'yadavak@nitj.ac.in',
                imageUrl: 'https://www.nitj.ac.in/images/faculty/23012713574.jpg' // Replace with actual image URL
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={contact.imageUrl}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                  <p className="text-gray-600">{contact.title}</p>
                  {/* <a href={`mailto:${contact.email}`} className="text-blue-600">{contact.email}</a> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default WorkshopPage;
