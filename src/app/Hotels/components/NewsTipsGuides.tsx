import React from 'react';

const NewsTipsGuides = () => {
  return (
    <section className="py-8 w-full">
      <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">
        News, Tips & <span className="text-blue-500">Guides</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/images/sample-news.jpg"
              alt="Guide"
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-2">
              <h3 className="font-bold text-lg">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
              <p className="text-gray-600">18 Sep 2024 &bull; 6 mins read</p>
              <button className="mt-2 text-blue-500">Keep Reading</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default NewsTipsGuides;
