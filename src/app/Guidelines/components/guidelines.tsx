'use client';
import React from 'react';
import { Book, FileText, Copy, ExternalLink } from 'lucide-react';

const GuidelinesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">Guidelines</h1>
        </header>
        <main className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <FileText className="mr-2" />
              Submission Declaration and Verification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Submission of an article implies that the work described has not been published previously (except in the form of an abstract, a published lecture or academic thesis), that it is not under consideration for publication elsewhere, that its publication is approved by all authors and tacitly or explicitly by the responsible authorities where the work was carried out, and that, if accepted, it will not be published elsewhere in the same form, in English or in any other language, including electronically without the written consent of the copyright-holder. To verify compliance, your article may be checked by originality or duplicate checking software.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <Book className="mr-2" />
              Manuscript Template
            </h2>
            <p className="text-gray-700 mb-4">Manuscripts must strictly adhere to the Springer template as follows:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>MS Word template: <a href="#" className="text-blue-600 hover:underline">Word Template</a></li>
              <li>LaTex Formatting Macros: <a href="#" className="text-blue-600 hover:underline">LaTex Template</a></li>
              <li>Copyright/Author's Agreement/Consent Form: <a href="#" className="text-blue-600 hover:underline">Copyright Form</a></li>
            </ul>
            <p className="text-gray-700 mt-4">
              For detailed guidelines authors can refer to the link: 
              <a href="https://www.springer.com/series/7818" className="text-blue-600 hover:underline ml-1">
                https://www.springer.com/series/7818
              </a>
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <Copy className="mr-2" />
              Publication
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All peer reviewed papers of the conference will be published as proceedings in the prestigious SCOPUS indexed "Lecture Notes in Electrical Engineering" by Springer series 
              (<a href="https://www.springer.com/series/7818" className="text-blue-600 hover:underline">https://www.springer.com/series/7818</a>).
            </p>
            <p className="text-gray-700 mb-4">LNEE is also Abstracted and indexed in:</p>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
              <li>DBLP</li>
              <li>EI Compendex</li>
              <li>INSPEC</li>
              <li>Japanese Science and Technology Agency (JST)</li>
              <li>SCImago</li>
              <li>SCOPUS</li>
              <li>WTI Frankfurt eG</li>
              <li>zbMATH</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              All papers from the conference will be published by Springer as a proceedings book volume. However, Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published.
            </p>
          </section>
          
          <section className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
              <ExternalLink className="mr-2" />
              Submission
            </h2>
            <p className="text-gray-700">Submission link will be shared soon.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GuidelinesPage;