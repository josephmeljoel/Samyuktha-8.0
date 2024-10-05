import React from 'react'
import "./index.css"
import FlipCard from '../components/main/FlipCard'


import Navbar from '../components/main/Navbar'
export default function events() {

  var events = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]
  return (

    <>
      <Navbar />
      <div className='container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto mb-5'>
        {/* <Navbar /> */}

        <h1 className='event-head md:text-[100px] text-[30px] font-[BlueSpirits]'>Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {events.map((item) => (
            // <div className="card p-4">

            // </div>
            <FlipCard />
          ))}
        </div>
      </div>
    </>


  )
}
