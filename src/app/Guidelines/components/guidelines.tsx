import PageHero from '@/components/PageHero';
import React from 'react';
import { Book, FileText, Copy, ExternalLink } from 'lucide-react';

const GuidelinesPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <PageHero title="Submission Guidelines" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" /> {/* Add proper hero image path */}

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Submission <span className="text-blue-600">Guidelines</span></h3>
            <p className="text-md leading-relaxed text-justify mb-8">
              E2A 2024 invites researchers, practitioners, and students worldwide to submit previously unpublished original papers for consideration to be presented at the conference in the English language. All submissions will be peer-reviewed. All manuscripts submitted to E2A 2024 will go through a plagiarism check. Manuscripts with a similarity score of 30% or above will not be forwarded for the reviewing process and will be rejected.
              The purpose of a conference template is to provide a consistent format for papers appearing in the conference proceedings. Authors must use the conference manuscript templates provided below. The conference templates contain guidance text for composing and formatting conference papers. Please ensure that all guidance text is removed from your conference paper prior to submission to the conference.
            </p>
            
            {/* Submission Declaration and Verification Section */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <FileText className="mr-2" />
                Submission Declaration and Verification
              </h3>
              <p className="text-md leading-relaxed text-justify">
                Submission of an article implies that the work described has not been published previously (except in the form of an abstract, a published lecture, or academic thesis), that it is not under consideration for publication elsewhere, that its publication is approved by all authors and tacitly or explicitly by the responsible authorities where the work was carried out, and that, if accepted, it will not be published elsewhere in the same form, in English or in any other language, including electronically without the written consent of the copyright-holder.
              </p>
              <p className="mt-6 text-md leading-relaxed text-justify">
                To verify compliance, your article may be checked by originality or duplicate checking software.
              </p>
            </section>

            {/* Manuscript Template Section */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <Book className="mr-2" />
                Manuscript Template
              </h3>
              <p className="text-md leading-relaxed text-justify mb-4">
                Manuscripts must strictly adhere to the Springer template as follows:
              </p>
              <ul className="list-disc list-inside text-md text-gray-700 space-y-2">
                <li>MS Word template: <a href="#" className="text-blue-600 hover:underline">Word Template</a></li>
                <li>LaTex Formatting Macros: <a href="#" className="text-blue-600 hover:underline">LaTex Template</a></li>
                <li>Copyright/Author&apos;s Agreement/Consent Form: <a href="#" className="text-blue-600 hover:underline">Copyright Form</a></li>
              </ul>
              <p className="text-md leading-relaxed text-justify mt-4">
                For detailed guidelines, authors can refer to the link:
                <a href="https://www.springer.com/series/7818" className="text-blue-600 hover:underline ml-1">
                  https://www.springer.com/series/7818
                </a>
              </p>
            </section>

            {/* Submission Section */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <ExternalLink className="mr-2" />
                Submission
              </h3>
              <p className="text-md leading-relaxed text-justify">
                The submission link will be shared soon. Please check back later for updates.
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default GuidelinesPage;
