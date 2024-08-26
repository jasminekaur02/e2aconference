import React from 'react';

const TouristAttractions = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">
        Tourist <span className="text-blue-500">Attractions</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/images/sample-image.jpg"
              alt="Attraction"
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-2">
              <h3 className="font-bold text-lg">California Sunset/Twilight Boat Cruise</h3>
              <p className="text-gray-600">2 days 3 nights &bull; 4-6 guest</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TouristAttractions;
