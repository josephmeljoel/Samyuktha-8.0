import React from 'react'
import "./index.css"

export default function events() {

  var events = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]
  return (
    <div className='container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto mb-5'>

      <h1 className='event-head'>Events</h1>
      <div className="grid grid-cols-3 justify-center gap-4">

        {events.map((item) => (
          <div className="card p-4">

          </div>
        ))}
      </div>
    </div>


  )
}
