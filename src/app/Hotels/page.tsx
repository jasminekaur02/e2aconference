import TopRatedHotels from './components/TopRatedHotels';
import TouristAttractions from './components/TouristAttractions';
import ToursTravels from './components/ToursTravels';
import Navbar from './components/navbar';
import Footer from './components/Footer';
export default function HotelsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold">
          Hotels & <span className="text-blue-500">Travels</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the Northern Wonders and make some timeless memories
        </p>
      </section>
      <TopRatedHotels />
      <TouristAttractions />
      <ToursTravels />
     
      
    </div>
    <Footer />
    </div>
  );
}
