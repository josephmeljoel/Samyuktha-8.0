'use client';
import { useState, useEffect } from "react";
import "./styles/CountDown.css"

interface CountdownProps {
  targetDate: string; // Example: "2024-12-31T00:00:00"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
    <div className="grid items-center justify-center">
      <div className="z-50 md:w-full w-[360px] h-16 border rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center md:mt-40 mt-20 mb-20">
        <h1 className="md:text-[80px] text-[50px] font-[BlueSpirits] days-text text-transparent bg-clip-text">Days Left</h1>
        <div className="flex border items-start justify-center md:w-full w-[360px] gap-1.5 count-down-main">
          <div className="timer">
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className="text-[40px] md:text-[100px] countdown-element days font-manrope font-semibold text-white text-center">
                {timeLeft.days}:
              </h3>
              <p className=" font-normal text-white mt-1 text-center w-full">
                Days
              </p>
            </div>
          </div>

          <div className="timer">
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className=" countdown-element hours font-manrope font-semibold text-[40px] md:text-[100px] text-white text-center">
                {timeLeft.hours}:
              </h3>
              <p className="font-normal text-white mt-1 text-center w-full ">
                Hour
              </p>
            </div>
          </div>

          <div className="timer">
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className=" countdown-element minutes font-manrope font-semibold text-[40px] md:text-[100px] text-white text-center">
                {timeLeft.minutes}:
              </h3>
              <p className=" fo uppercasent-normal text-white mt-1 text-center w-full">
                Minutes
              </p>
            </div>
          </div>

          <div className="timer">
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className=" countdown-element seconds font-manrope font-semibold text-[40px] md:text-[100px] text-white text-center">
                {timeLeft.seconds}  
              </h3>
              <p className=" fo uppercasent-normal text-white mt-1 text-center w-full">
                Seconds
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Countdown;
