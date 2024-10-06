import Navbar from "@/app/components/main/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full h-auto items-center justify-center">
        <div className="md:flex">
          <div className="md:w-1/4 h-auto  ">
            <img
              src="/event1.jpg"
              className="md:w-full md:h-full md:px-7 md:py-12 px-10 py-12"
              alt=""
            />
          </div>

          <div className=" grid gap-[30px] md:w-3/4 w-full h-auto p-[30px] justify-center ">
            <p className="md:text-[40px] md:text-left text-center font-[sega] text-[30px]">Photography</p>
            <div className="flex md:justify-start  justify-center">
              <div className="md:w-[150px] md:h-[40px] w-[100px] h-[30px] rounded-[20px] border border-[#868894]">
                <p className="md:text-[20px] text-[15px] pt-[2px] text-center ">Cultural</p>
              </div>
              <div className="md:w-[150px] md:h-[40px] w-[100px] h-[30px] rounded-[20px] border border-[#868894] ml-2">
                <p className="md:text-[20px] text-[15px] pt-[2px] text-center">Single</p>
              </div>
            </div>
            <p className="md:text-[20px] text-[20px] text-[#c2c0c0] ">Join us for an enchanting journey through your lens at the "Spooky Shot" photography event.
                 Unleash your creativity with mobile cameras, DSLRs, SLRs, or digital cameras to capture the eerie and mystical.
                  Remember, in this competition, editing and filtering.</p>
                 
                 
                  <div className=" grid gap-[20px] md:justify-start justify-center">
                  <p className="md:text-[18px] mt-[30px]">Registration Fee:30.</p>
           
                  <button className="w-[150px] h-[40px] border border-red-500 rounded-[20px] mb-[20px] z-50 hover:bg-red-500">
                    <p className="test-[10px] font-[600]">Register</p>
                  </button>
                  </div>


          </div>

          
        </div>
      </div>



      <div className="md:flex w-auto h-auto p-[50px]  justify-center">
          <div className="  p-[30px]  rounded-[16px] bg-[#110725]">
          <p className="text-[40px] text-center text-red-500 font-[700]">Rules </p>
          <p className="mt-[20px]">- Participants should complete the registration and report to the venue at 10 am.<br/><br/>
             - Candidates should bring their college id for registration.<br/><br/>
             - Theme for the contest will be given by the committee members after the registration.<br/><br/>
             - Participants can use mobile cameras, DSLR, SLR or Digital cameras.<br/><br/>
             - Editing and filtering are not allowed.<br/><br/>
             - Participants should bring formatted memory card.<br/><br/>
             - Candidate can submit only one photograph.<br/><br/>
             - Photos taken from inside the college premises are only allowed.<br/><br/>
             - The photograph should be submitted in jpeg format to the provided mail id.<br/><br/>
             - The contest duration will be from 10.30 am to 2.00 pm.</p>
          </div>

   <div className=" grid gap-[20px] h-auto md:pl-[50px] md:pr-[10px] md:w-1/3 md:mt-[0px] mt-[20px] justify-center">
          <div className=" rounded-[16px]  ml-[10px] bg-[#110725]">


          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#ecfd08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           className="lucide lucide-phone w-full md:h-[100px] h-[50px] mt-[20px]"><path 
           d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
         
         
           <p className="text-[20px] text-center mt-[40px]"> Name of head :  y182y89y21894y8y2</p>
           <p className="text-[20px] text-center mt-[30px]"> Name of head :  1y287y478y42y18y4 </p>
          </div>

          <div className=" rounded-[16px] ml-[10px] bg-[#110725]">
         
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ecfd08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           className="lucide lucide-phone w-full md:h-[100px] h-[50px] mt-[20px]"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
           <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
           <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
         
           <p className="text-[20px] text-center mt-[40px]"> 1st:</p>
           <p className="text-[20px] text-center mt-[30px]"> 2nd: </p>
          </div>

   </div>
      </div>
    </div>
  );
}

