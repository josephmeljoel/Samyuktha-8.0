"use client";
import React from "react";
import "./styles/FeatureCard.css";

interface FeatureCardProps {
  data: {
    url: string;
    id: number;
    event_alternative_name: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ data }) => {
  return (
    <>
      <div className="card z-50">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img src={data.url} className="h-full w-full" alt="" />
            </div>
          </div>
          <div className="front">
            <h1>{data.event_alternative_name}</h1>
            <a
              className="register-button text-center mt-2"
              href={`/pages/events/desc?eventId=${data.id}`}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
