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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate up when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center"
        >
          {EventData.map(
            (item, index) =>
              item.url ? ( // Check if the URL exists
                <FlipCard key={index} data={item} /> // Add a unique key prop
              ) : null // Skip rendering for empty objects
          )}
        </motion.div>
      </div>
    </>
  );
}
