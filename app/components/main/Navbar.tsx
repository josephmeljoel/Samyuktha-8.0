
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="md:w-full md:h-[65px] w-[360px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10 px-[0px]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px] px-[0px]">
        
          <Image
            src="/collegelogo.jpg"
            alt="logo"
            width={70}
            height={70}
            className="md:w-[50px] md:ml-[30px] ml-[0px] md:h-[50px] w-[35px] h-[35px] cursor-pointer rounded-[10px] hover:animate-slowspin"
          />
        

        <div className="md:w-[700px] h-full w-[328px] md:ml-[30px] ml-[5px]  flex flex-row items-center justify-between md:mr-20 mr-[0px]">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#About" className="cursor-pointer md:text-[20px] text-[10px]">
              About
            </a>
            <a href="#Registration" className="cursor-pointer md:text-[20px] text-[10px]">
            Registration
            </a>
            <a href="#Contact" className="cursor-pointer md:text-[20px] text-[10px]">
             Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
