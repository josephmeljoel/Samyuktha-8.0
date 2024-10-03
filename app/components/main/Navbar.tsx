import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:w-full md:h-[65px] w-[360px] text-white fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50  py-10 px-[20px] ">
      
       
          <a
            href="#About"
            className="cursor-pointer font-[sega] font-[400] md:text-[15px] lg:text-[25px] text-[10px]"
          >
            Home
          </a>
          <a
            href="#Registration"
            className="cursor-pointer font-[sega] font-[400] md:text-[15px] lg:text-[25px] text-[10px]"
          >
            About Us
          </a>
          <Image
            src="/Collegelogo.jpg"
            alt="logo"
            width={70}
            height={70}
            className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] cursor-pointer rounded-[10px]"
          />
          <a
            href="#Contact"
            className="cursor-pointer md:text-[15px] lg:text-[25px] font-[sega] font-[400] text-[10px]"
          >
            Events
          </a>
          <a
            href="#Contact"
            className="cursor-pointer md:text-[15px] lg:text-[25px] font-[sega] font-[400] text-[10px]"
          >
            Contact Us
          </a>
        </div>
      

      

  );
};

export default Navbar;
