import TopRatedHotels from './components/TopRatedHotels';
import TouristAttractions from './components/TouristAttractions';
import ToursTravels from './components/ToursTravels';

export default function HotelsPage() {
  return (
    <div>
      <h1>Hotels and Travels</h1>
      
      <TopRatedHotels />
      <TouristAttractions />
      <ToursTravels />
    </div>
  );
}
