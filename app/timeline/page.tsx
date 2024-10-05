import React from 'react'
import "./index.css"
import Navbar from '../components/main/Navbar'



export default function page() {

  var shedule = [
    {
      name: 'Coding',
      time: '10:30 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Treasu Hunt',
      time: '10:30 AM',
      desc: 'Single Round'

    },
    {
      name: 'Web Designing',
      time: '11:00 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Photography',
      time: '10:30 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Reels',
      time: '10:30 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Football',
      time: '10:30 AM',
      desc: 'First Round Prelims'
    },
  ]
  return (
    <>
      <Navbar />
      <h1 className='text-center text-[80px]'>Event Shedule</h1>
      <div className="timeline z-50">
        <ul>
          {shedule.map((item) => (
            <li>
              <div className="right_content">
                <h2>{item.name}</h2>
                <p>{item.desc}
                </p>
              </div>
              <div className="left_content">
                <h3>{item.time}</h3>
              </div>
            </li>
          ))}

          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </>
  )
}
