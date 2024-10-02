import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
<footer className="md:flex md:w-full w-[360px] md:h-[350px] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10  justify-between">
<div>
  <img
    src="/collegelogo.jpg"
    alt="logo"
    width={70}
    height={70}
    className="md:w-[125px]  md:h-[125px] w-[40px] mt-[30px] h-[40px] cursor-pointer hover:animate-slowspin"
  ></img>
  <div>
    <div className="font-[Comfortaa] md:text-[20px] text-[18px] mt-[20px] text-white">
      <p>Saintgits College of Engineering</p>
    </div>
    <div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[10px] mt-[5px] text-white">
      <p>Kottukulam Hills, Pathamuttom P.O,</p>
    </div>
    <div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[10px] mt-[5px] text-white">
      <p>Kottayam, Pin – 686532, Kerala</p>
    </div>
    <div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[10px] mt-[5px] text-[#3333ff]">
      <p>Direction</p>
    </div>
  </div>
</div>

<div className="md:pr-[100px] pr-[0px] items-center">
<div className="font-[Comfortaa] font-[600] md:text-[20px] text-[18px] mt-[30px] text-[#4dff4d]">
  <p>Event Coordinators :</p>
</div>
<div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[20px] mt-[5px] text-[#4dff4d]">
  <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ph:</p>
</div>
<div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[20px] mt-[5px] text-[#4dff4d]">
  <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ph:</p>
</div>
<div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[20px] mt-[5px] text-[#4dff4d]">
  <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ph:</p>
</div>
<div className="font-[Comfortaa] md:text-[20px] text-[18px] md:mt-[20px] mt-[5px] text-[#4dff4d]">
  <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ph:</p>
</div>
</div>
</footer>
);
};

export default Footer;
