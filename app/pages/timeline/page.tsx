'use client';
import React from 'react'
import "./index.css"
import Navbar from '../../components/main/Navbar'



export default function page() {

  var shedule = [
    {
      name: 'Star Of Samyuktha',
      time: '1:30 PM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Gaming',
      time: '10:40 AM',
      desc: 'Single Round'

    },
    {
      name: 'Web Designing',
      time: '10:40 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Coding',
      time: '11:15 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Fast Typing',
      time: '1:15 PM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Best Singer',
      time: '10:45 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Treasure Hunt',
      time: '10:40 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Ideathon',
      time: '12:00 PM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Technical Quiz',
      time: '10:40 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Paper Presentaion',
      time: '10:50 AM',
      desc: 'First Round Prelims'
    },
    {
      name: 'Reels',
      time: '10:40 AM',
      desc: 'Single Round'
    },
    {
      name: 'Photography',
      time: '10:40 AM',
      desc: 'Single Round'
    },
    {
      name: 'Football',
      time: '10:40 AM',
      desc: 'First Round Prelims'
    },
  ]
  return (
    <>
      <Navbar />
      <h1 className='text-center md:text-[50px] text-[25px] mt-[50px] text-white font-[Sega]'>Event Schedule</h1>
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
