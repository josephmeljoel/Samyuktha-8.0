'use-client';
import React from 'react';
import "./index.css";
import FlipCard from '../components/main/FlipCard';
import Navbar from '../components/main/Navbar';

export default function Events() {
  const events = [
    { url: '/event1.jpg' },{ url: '/event2.jpg' },{ url: '/event3.jpg' },
    { url: '/event4.jpg' },{ url: '/event5.jpg' }, { url: '/event6.jpg' },
     { url: '/event6.jpg' },{ url: '/event6.jpg' },{ url: '/event6.jpg' },
    { url: '/event6.jpg' }, { url: '/event6.jpg' },{ url: '/event6.jpg' },
    { url: '/event6.jpg' },{ url: '/event6.jpg' }, { url: '/event6.jpg' },

  ];

  return (
    <>
      <Navbar />
      <div className='container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto mb-5'>
        <h1 className='event-head md:text-[100px] text-[30px] font-[BlueSpirits]'>Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {events.map((item, index) => (
            item.url ? ( // Check if the URL exists
              <FlipCard key={index} data={item} /> // Add a unique key prop
            ) : null // Skip rendering for empty objects
          ))}
        </div>
      </div>
    </>
  );
}
