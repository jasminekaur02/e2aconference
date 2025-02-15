import PageHero from '@/components/PageHero';
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import Navbar from '@/components/navbar';
import HeaderTop from '@/components/HeaderTop';
import Footer from '@/components/Footer';

const CameraReadySubmissionPage = () => {
  return (
    <>
   <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
        title="Camera Ready Submission Guidelines" 
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg"
      />

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Instructions for Camera Ready Paper Submission (After Acceptance)</h3>
            <ul className="list-disc list-inside text-md text-gray-700 space-y-4">
              <li>Authors of all accepted papers need to submit a camera-ready (Final) version addressing all the reviewer&apos;s comments on or before <strong>20 February 2025</strong> through Microsoft CMT portal (Editable and pdf file).</li>
              <li>The authors should make sure about the plagiarism of their manuscript (below <strong>20% similarity</strong>), using standard plagiarism checking software (e.g. Turnitin), before submitting the camera-ready paper to confirm the inclusion of the paper in LNEE SPRINGER. If Plagiarism is more than 20%, then your paper will not be included in the proceedings.</li>
              <li>The number of pages in the Final Camera-Ready Paper must be within <strong>10 pages</strong> (max <strong>12 pages</strong> with extra page charges) as per LNEE Springer format (<a href="https://conference.nitj.ac.in/Guidelines" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LNEE Springer Format</a>). The camera-ready papers that do not meet these requirements will not be submitted for further consideration to LNEE SPRINGER.</li>
              <li>Please note that authors are expected to retain the title of the original paper in the final paper. Also, the author list and sequence in the original paper cannot be changed in the final paper.</li>
              <li>A response sheet also needs to be uploaded at Microsoft CMT portal using the same camera ready link as a third file with all the reviewer&apos;s comments and responses.</li>
              <li>The camera-ready file should be named as <strong>&quot;E2ACON2025_Paper-ID&quot;</strong> and the response sheet as <strong>&quot;RS_E2ACON2025_Paper-ID&quot;</strong>. For e.g., the files for Paper-ID 258 should be named as <strong>&quot;E2ACON2025_258&quot;</strong> and <strong>&quot;RS_E2ACON2025_258&quot;</strong>.</li>
              <li>Please make sure that only original work is being submitted (not previously published/copyrighted). The Springer will be using the Cross-Check automated screening system to verify the originality of papers. Springer takes disciplinary actions when violations are detected.</li>
              <li>A copyright form will be shared with all authors before final submission to LNEE Springer after successful presentation of the paper.</li>
            </ul>

            {/* Required Files Section */}
            <section className="mt-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <FileText className="mr-2" /> Required Files for Final Submission
              </h3>
              <ul className="list-decimal list-inside text-md text-gray-700 space-y-2">
                <li>PDF File (File name as E2ACON2025_Paper-ID)</li>
                <li>Editable Source File (File named as SF-E2ACON2025_Paper-ID)</li>
                <li>Reply to Reviewers Comments (RC_E2ACON2025_Paper-ID)</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="mt-8">
              <p className="text-md leading-relaxed text-justify">
                For any clarification, kindly contact <a href="mailto:afzals@nitj.ac.in" className="text-blue-600 hover:underline">afzals@nitj.ac.in</a>.
              </p>
              {/* <p className="mt-6 font-bold">Looking forward to seeing you at the International Conference on Electrical, Electronics & Automation (E2ACON2025) at NIT Jalandhar.</p>
              <p className="mt-4 font-semibold">Best Wishes,<br/>Dr. Afzal Sikander<br/>Conference Chair-E2ACON2025<br/>NIT Jalandhar</p> */}
            </section>

            {/* Submission Section */}
            <section className="bg-white pb-2 rounded-lg shadow-md mt-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <ExternalLink className="mr-2" /> Submission Link
              </h3>
              <p className="text-md text-blue-600 leading-relaxed">
                <a 
                  href="https://cmt3.research.microsoft.com/E2ACON2025" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center hover:underline hover:text-blue-700 transition"
                >
                  <ExternalLink className="mr-2" /> Submit Camera Ready Paper
                </a>
              </p>
            </section>
          </div>
        </section>
        <Footer/>
    </>
  );
}

export default CameraReadySubmissionPage;
