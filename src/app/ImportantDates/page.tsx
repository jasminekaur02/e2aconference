import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

interface Event {
  date: string;
  title: string;
  description: string;
  time?: string;
  location?: string;
  price?: string;
}

interface DayEvents {
  date: string;
  events: Event[];
}

const TimelineEvent: React.FC<Event> = ({ title, description, time, location, price }) => (
  <div className="mb-4 last:mb-0">
    <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    {time && <p className="text-xs text-gray-500">{time}</p>}
    {location && <p className="text-xs text-gray-500">{location}</p>}
    {price && <p className="text-xs font-semibold text-gray-700">{price}</p>}
  </div>
);

const TimelineDay: React.FC<DayEvents> = ({ date, events }) => (
  <div className="mb-8 last:mb-0">
    <div className="bg-indigo-50 p-2 mb-2 rounded-lg">
      <h2 className="text-xl font-bold text-blue-600">{date}</h2>
    </div>
    <div className="pl-4 border-l-2 border-blue-600">
      {events.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  </div>
);

interface TimelineProps {
  days?: DayEvents[]; // Optional days prop
}

const Timeline: React.FC<TimelineProps> = ({ days = [] }) => (
  <section className="py-16 px-6 md:px-12">
    <div className="max-w-2xl mx-auto p-4">
      {days.length > 0 ? (
        days.map((day, index) => (
          <TimelineDay key={index} {...day} />
        ))
      ) : (
        <p className="text-center text-gray-500">No events available.</p>
      )}
    </div>
  </section>
);

// Days data
const daysData: DayEvents[] = [
  {
    date: '2024-09-24',
    events: [
      {
        date: '2024-09-24',
        title: 'Paper Submission Starts',
        description: 'The paper submission for the conference opens on this date.',
        time: '',
        location: 'Online Submission Portal on E2ACON 2025 Website',
        price: 'Check Submission Guidelines',
      },
    ],
  },
  {
    date: '2024-12-16',
    events: [
      {
        date: '2024-12-16',
        title: 'Last Date of Paper Submission',
        description: 'The paper submisisons for the conference ends on this date.',
        time: '',
        location: '',
      },
    ],
  },
  {
    date: '2025-02-10',
    events: [
      {
        date: '2025-02-10',
        title: 'Review Process Ends',
        description: 'After reviewing papers, accepted papers will be notified.',
        time: '',
        location: '',
      },
    ],
  },
  {
    date: '2025-02-25',
    events: [
      {
        date: '2025-02-25',
        title: 'Camera Ready Paper/ Registration',
        description: 'Accepted students need to register themselves for the Conference.',
        time: '',
        location: 'E2ACON 2025 Website',
      },
    ],
  },
  {
    date: '2025-03-08',
    events: [
      {
        date: '2025-03-08',
        title: 'Conference Day : 1',
        description: 'Schedule: To Be Announced',
        time: '',
        location: '',
      },
    ],
  },
  {
    date: '2025-03-09',
    events: [
      {
        date: '2025-03-09',
        title: 'Conference Day : 2',
        description: 'Schedule: To Be Announced',
        time: '',
        location: '',
      },
    ],
  },
 
];

// Page rendering the timeline with data
const ImportantDatesPage: React.FC = () => {
  return (
    <>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero
        title="Important Dates"
        image="https://v1.nitj.ac.in/ITEP/img/01.jpg" // Replace with an actual image path
      />
      <Timeline days={daysData} />
      <Footer />
    </>
  );
};

export default ImportantDatesPage;