"use client";

import React from "react";
import "./index.css";
import FlipCard from "@/app/components/main/FlipCard";
import Navbar from "@/app/components/main/Navbar";
import { EventData } from "@/app/assets/data/events";
import { motion, useInView } from "framer-motion";

export default function Events() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <Navbar />
      <div className="container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto mb-5">
        <h1 className="event-head md:text-[100px] text-[30px] font-[BlueSpirits]">
          Events
        </h1>
        <div
          
          className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center"
        >
          {EventData.map(
            (item, index) =>
              item.url ? ( // Check if the URL exists
                <FlipCard key={index} data={item} /> // Add a unique key prop
              ) : null // Skip rendering for empty objects
          )}
        </div>
      </div>
    </>
  );
}
