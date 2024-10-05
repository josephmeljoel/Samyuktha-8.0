import Navbar from "@/app/components/main/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full h-auto justify-center">
        <div className="md:flex">
          <div className="md:w-1/4 h-auto ">
            <img
              src="/logo-textured.png"
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className=" grid gap-[30px] w-3/4 h-auto p-[30px] ">
            <p className="md:text-[40px] text-[30px]">Photography</p>
            <div className="flex">
              <div className="md:w-[150px] md:h-[40px] w-[100px] h-[30px] rounded-[20px] border border-red-500">
                <p className="md:text-[20px] text-[15px] text-center ">Cultural</p>
              </div>
              <div className="md:w-[150px] md:h-[40px] w-[100px] h-[30px] rounded-[20px] border border-red-500 ml-2">
                <p className="md:text-[20px] text-[15px] text-center">Single</p>
              </div>
            </div>
            <p className="md:text-[20px] text-[20px] ">Join us for an enchanting journey through your lens at the "Spooky Shot" photography event.
                 Unleash your creativity with mobile cameras, DSLRs, SLRs, or digital cameras to capture the eerie and mystical.
                  Remember, in this competition, editing and filtering.</p>

                  <p className="md:text-[18px] mt-[30px]">Registration Fee:30.</p>

                  <button className="w-[150px] h-[40px] border border-red-500 rounded-[20px] mb-[20px] z-50 hover:bg-red-500">
                    <p className="test-[10px] font-[600]">Register</p>
                  </button>
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
           <p className="text-[20px] text-center"> Akash Prakash :7909214669 </p>
           <p className="text-[20px] text-center"> Akash Prakash :7909214669 </p>
          </div>

          <div className=" rounded-[16px] ml-[10px] bg-[#110725]">
          <p className="text-[20px] text-center"> Akash Prakash :7909214669 </p>
          <p className="text-[20px] text-center"> Akash Prakash :7909214669 </p>
          </div>

   </div>
      </div>
    </div>
  );
}
