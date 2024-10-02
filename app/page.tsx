import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Foot";
import Events from "./components/main/Events";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full md:w-full md:h-full items-center justify-between">
      <Navbar />
       <div className=" w-full px-[30px] py-[30px] h-full mt-[40px] rounded-[20px] p-24 md:gap-[80px] gap-[40px] md:top-[150px] md:left-[270px] md:pt-[80px] pt-[40px] md:pr-[80px] pr-[16px] md:pb-[24px] pb-[16px] md:pl-[80px] pl-[16px]">
          <div className="w-[full] flex flex-col items-center justify-center">
            <p className="text-[40px] md:text-[85px] lg:text-[130px] text-[#ff9933] font-[400]">SAMYUKTHA</p>
            <p className="text-[40px] md:text-[85px] lg:text-[130px] text-[#ff9933]">8.0</p>
          </div>






        <Events />
      </div>
     <Footer/>
    </main>
  );
}