import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Foot";
import Events from "./components/main/Events";

export default function Home() {
  return (
    <main className="flex flex-col w-[360px] h-full md:w-full md:h-full items-center justify-between">
      <Navbar />

      <div className=" w-full px-[30px] py-[30px] h-full mt-[40px] rounded-[20px]  p-24 md:gap-[80px] gap-[40px] md:top-[150px] md:left-[270px] md:pt-[80px] pt-[40px] md:pr-[80px] pr-[16px] md:pb-[24px] pb-[16px] md:pl-[80px] pl-[16px]">
        
        <Events />
      </div>
     <Footer/>
    </main>
  );
}
asasd