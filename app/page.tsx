"use client";
import React from "react";

import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import "./index.css";
import { EventData, FeaturedEvents } from "./assets/data/events";
import FeatureCard from "./components/main/FeatureCard";

import { motion, useInView } from "framer-motion";
import Countdown from "./components/main/Countdown";

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
        <div className="w-[full] flex flex-col items-center justify-center  ">
          <p className=" bg-gradient-to-r from-[#e31768] to-[#febf96] rounded-[40px] px-[20px] text-[40px] md:text-[65px] lg:text-[85px]  font-[400] main-heading">
            SAMYUKTHA
          </p>

          <div className="flex mt-[20px] md:mt-[60px] gap-[15px] items-center justify-center">
            <p className="text-[25px] md:text-[50px] text-white font-[BlueSpirits]">
              {" "}
              October
            </p>
            <p className="text-[35px] md:text-[60px] text-white font-[BlueSpirits]">
              18
            </p>
          </div>
        </div>

        {/* <div className="w-full h-[100px]">
          <iframe
            src="/countdown.html"
            className="  scrolling=no  frameborder=0 title=Countdown allowtransparency=true w-full md:h-[200px] lg:h-[400px] xl-[600px] h-[150px] visibility: visible;"
          ></iframe>
        </div> */}
        <Countdown targetDate="2024-10-18T00:00:00" />

        <div className="md:flex w-full h-full items-center justify-center md:mt-[50px] mt-[0px]">
          <div className=" w-full md:w-1/2 md:mt-[20px] mt-[0px]">
            <img
              src="logo-textured.png"
              alt=""
              className="w-full h-full md:w-[600px] md:h-[600px] "
            ></img>
          </div>
          <div className=" md:flex flex-col w-full md:w-1/2 h-full items-center justify-center">
            <p className="text-green-400 font-[SEGA] md:text-[30px] text-center text-[20px] mb-10">
              About
            </p>

            <p className="text-left text-[grey] md:text-[20px] text-[15px] font-[Inter] pb-5 text-center">
              SAINTGITS College of Engineering organizes ‘Samyuktha 8.0’, a
              national level techno cultural fest, on October 18th. ‘Samyuktha’
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
            </p>
          </div>
        </div>

        {/* <div className="container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto mb-5"> */}
        <h1 className="md:text-[60px] text-[30px] text-white text-center mb-6 font-[SEGA] md:mt-[100px] mt-[120px]">
          Featured Events
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate up when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-[20px] grid-cols-1 md:grid-cols-4 justify-items-center z-50"
        >
          {FeaturedEvents.map(
            (item, index) =>
              item.url ? ( // Check if the URL exists
                <FeatureCard key={index} data={item} /> // Add a unique key prop
              ) : null // Skip rendering for empty objects
          )}

          {/* </div> */}
        </motion.div>
        <div className="z-50 flex justify-center items-center w-full ">
          <a
            className="bg-[#F3C623] font-[600] text-black px-4 py-2 hover:bg-[#EB8317] rounded explore-btn explore-btn transition duration-300"
            href="/pages/events"
          >
            Explore More
          </a>
        </div>
        <div className="flex w-full h-full pt-40 justify-center  items-center">
          <div className="grid gap-[20px] w-full h-auto bg-[#0e0622] rounded-[20px]  py-[30px]">
            <p className=" font-[Inter] font-[800] md:text-[30px] text-[20px] text-center text-red-600">
              Mandatory rules to follow
            </p>

            <div className="grid gap-[20px] text-white pt-[30px]">
              <p className="  md:text-[15px] text-[13px] text-left md:px-[20px] px-[30px]">
                - Only students enrolled in non-engineering courses are eligible
                to participate in the event.
              </p>
              <p className="  md:text-[15px] text-[13px] text-left md:px-[20px] px-[30px]">
                - Participants are required to present a valid student ID card
                or any official proof from the department. Failure to provide
                proof may result in disqualification.
              </p>
              <p className="  md:text-[15px] text-[13px] text-left md:px-[20px] px-[30px]">
                - The decision of the judges for each event is final and
                binding. No appeals or disputes regarding the judges' decisions
                will be entertained.
              </p>
              <p className="  md:text-[15px] text-[13px] text-left md:px-[20px] px-[30px]">
                We kindly urge all prospective participants to thoroughly
                understand and commit to abiding by these rules. Their adherence
                is vital to ensure a fair and harmonious event while upholding
                the event's integrity.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-[10px]">
            <p className="font-[Sega] md:text-[30px] text-[20px] text-center mt-[40px] py-[40px] underline">
              Event&nbsp;&nbsp;&nbsp;Coordinators
            </p>
            <p className="text-center md:text-[25px] text-[15px] font-[600]">
              Paul&nbsp;Prince&nbsp;&nbsp;--&nbsp;&nbsp;9061268071
            </p>
            <p className="text-center md:text-[25px] text-[15px] font-[600]">
              Aparna&nbsp;Menon&nbsp;&nbsp;--&nbsp;&nbsp;9496481205
            </p>
            <p className="text-center md:text-[25px] text-[15px] font-[600]">
              Nandhana&nbsp;Pushpan&nbsp;&nbsp;--&nbsp;&nbsp;9495735439
            </p>
            <p className="text-center md:text-[25px] text-[15px] font-[600]">
              Johan&nbsp;M&nbsp;Zachariah&nbsp;&nbsp;--&nbsp;&nbsp;8590929384
            </p>
          </div>
      </div>
      <Footer />
    </main>
  );
}
