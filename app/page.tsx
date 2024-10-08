"use client";
import React from "react";

import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import "./index.css";
import { EventData, FeaturedEvents } from "./assets/data/events";
import FeatureCard from "./components/main/FeatureCard";

import { motion, useInView } from "framer-motion";

export default function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <main className="flex flex-col w-full h-full md:w-full md:h-full z-50">
      <Navbar />

      <div className=" grid w-full px-[30px] py-[30px] h-full mt-[40px] rounded-[20px] md:gap-[80px] gap-[40px] md:top-[150px] md:left-[270px] md:pt-[80px] pt-[40px] md:pr-[80px] pr-[16px] md:pb-[24px] pb-[16px] md:pl-[80px] pl-[16px]">
        {/* <div className="flex justify-center smyk-654 ">
          <video className="w-[1000px] h-[500px]" autoPlay loop muted playsInline src="/bitrat.mp4"></video>
        </div> */}
        <div className="w-[full] flex flex-col items-center justify-center">
          <p className="text-[40px] md:text-[65px] lg:text-[85px] text-[#ff9933] font-[400] main-heading">
            SAMYUKTHA
          </p>
        </div>

        <div className="w-full h-[300px]">
          <iframe
            src="/countdown.html"
            className="  scrolling=no  frameborder=0 title=Countdown allowtransparency=true w-full md:h-[200px] lg:h-[400px] xl-[600px] h-[150px] visibility: visible;"
          ></iframe>
        </div>

        <div className=" md:flex w-full h-full items-center justify-center mt-0">
          <div className=" w-full md:w-1/2 md:mt-[20px] mt-0">
            <img
              src="logo-textured.png"
              alt=""
              className="w-full h-full md:w-[600px] md:h-[600px] items-center justify-center"
            ></img>
          </div>
          <div className="w-full md:w-1/2 h-full md:mt-[120px] mt-0">
            <p className="text-green-400 font-[SEGA] md:text-[30px] pb-[20px] text-center text-[20px] ">
              About
            </p>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 120 }} // Start from below with opacity 0
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }} // Animate up when in view
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left text-[grey] md:text-[20px] text-[15px] font-[Inter] pb-5 pt-5"
            >
              SAINTGITS College of Engineering organizes ‘Samyuktha 8.0’, a
              national level techno cultural fest, on October 19th. ‘Samyuktha’
              has been successfully organized for the past five years and serves
              as an ideal platform for talented undergraduate and postgraduate
              computer application students to showcase their technical and
              artistic skills. In this fest, students will compete for more than
              10 events like Best Singer, Spot Photography, Coding, Web
              Designing, Treasure Hunt, Spot Dance. A total prize money of
              Rs.70000 awaits the contestants. Saintgits College of Engineering
              launched ‘Samyuktha’ in the year 2016 with the aim of bringing to
              the forefront the artistic, cultural and technical skills of
              students amidst their busy academic schedule. ‘Samyuktha’ is
              jointly organized by a team of dedicated staff members and
              students who are leaving no stone unturned to ensure that this
              year’s ‘Samyuktha’ is bigger and better than the previous year.
            </motion.p>
          </div>
        </div>

        {/* <div className="container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto mb-5"> */}
        <h1 className="text-[60px] text-center mb-6 font-[SEGA]">
          Featured Events
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate up when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-4 justify-items-center"
        >
          {FeaturedEvents.map(
            (item, index) =>
              item.url ? ( // Check if the URL exists
                <FeatureCard key={index} data={item} /> // Add a unique key prop
              ) : null // Skip rendering for empty objects
          )}
          {/* </div> */}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
