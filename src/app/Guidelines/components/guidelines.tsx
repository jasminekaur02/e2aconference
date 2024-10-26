import PageHero from '@/components/PageHero';
import React from 'react';
import { Book, FileText, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const GuidelinesPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-hidden">
        {/* Hero Section */}
        <PageHero title="Submission Guidelines" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" /> {/* Add proper hero image path */}

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
             <span className="text-blue-600"></span>
            </h3>
            <p className="text-md leading-relaxed text-justify mb-8">
            E2ACON 2025 invites researchers, practitioners, and students worldwide to submit previously unpublished original papers for consideration for presentation at the conference in English. All submissions will be peer-reviewed. All manuscripts submitted to E2ACON 2025 will go through a plagiarism check. Manuscripts with a similarity score of 30% or above will not be forwarded for the reviewing process and will be rejected. The purpose of a conference template is to provide a consistent format for papers appearing in the conference proceedings. Authors must use the conference manuscript templates provided below. The conference templates contain guidance text for composing and formatting conference papers. Please ensure that all guidance text is removed from your conference paper before submission to the conference.
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
    <li>
      MS Word template: 
      <a 
        href="https://drive.usercontent.google.com/download?id=1gjIg-ljNAff6btztsT2AvG2cmGadPLJx&export=download&authuser=0&confirm=t&uuid=bfe6537a-6137-411d-b82c-02420e14b881&at=AN_67v3o1FEsTqlbSsUm-CZbqVVf:1729924731017" // Replace with your actual file path
        className="text-blue-600 hover:underline"
        download // This attribute prompts download
      >
        Word Template
      </a>
    </li>
    <li>
      LaTex Formatting Macros: 
      <a 
        href="https://drive.usercontent.google.com/download?id=1XrMElqpNvj-cwYOPwxZPOqz3Pf7wZNZi&export=download&authuser=0&confirm=t&uuid=8975d716-c4d8-4e85-a97c-20128de584ca&at=AN_67v137WVFvR2JmJ4QaPAbATmr:1729924665337" // Replace with your actual file path
        className="text-blue-600 hover:underline"
        download // This attribute prompts download
      >
        LaTex Template
      </a>
    </li>
  </ul>
 
</section>

            {/* Submission Section */}
<section className="bg-white  pb-2 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
    <ExternalLink className="mr-2" />
    Submission
  </h3>
  <div className="flex flex-col items-left mb-4"> {/* Keep the flex direction column */}
    <img
      src="/submission_qr.png" // Replace with your QR code image path
      alt="QR Code for Submission"
      className="w-32 h-32 mb-2" // Add margin-bottom for spacing
    />
    <p className="text-md text-blue-600 leading-relaxed mt-2">
    <a 
  href="https://cmt3.research.microsoft.com/E2ACON2025" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-flex items-center hover:underline hover:text-blue-700 transition"
>
  {/* Link Text */}
    
  
  {/* Right Icon */}
  <ExternalLink className="mr-2" />
    Submission Link
</a>

</p>


  </div>
</section>


          </div>
        </section>
      </div>
    </>
  );
}

export default GuidelinesPage;
