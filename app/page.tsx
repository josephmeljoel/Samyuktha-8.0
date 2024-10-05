import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Pacman from "./components/main/pacman";
import "./index.css"


export default function Home() {
  return (
    <main className="flex flex-col w-full h-full md:w-full md:h-full">

      <Navbar />


      <div className=" grid w-full px-[30px] py-[30px] h-full mt-[40px] rounded-[20px] md:gap-[80px] gap-[40px] md:top-[150px] md:left-[270px] md:pt-[80px] pt-[40px] md:pr-[80px] pr-[16px] md:pb-[24px] pb-[16px] md:pl-[80px] pl-[16px]">

        {/* <div className="flex justify-center smyk-654 ">
          <video className="w-[1000px] h-[500px]" autoPlay loop muted playsInline src="/bitrat.mp4"></video>
        </div> */}
        <div className="w-[full] flex flex-col items-center justify-center">
          <p className="text-[40px] md:text-[65px] lg:text-[85px] text-[#ff9933] font-[400] main-heading">SAMYUKTHA</p>
        </div>


        <div className="w-full h-[300px]">
          <iframe src="/countdown.html"
            className="  scrolling=no  frameborder=0 title=Countdown allowtransparency=true w-full md:h-[200px] lg:h-[400px] h-[150px] visibility: visible;"></iframe>
        </div>




        <div className="flex w-full h-full items-center justify-center mt-[300px]">
          <div className="w-1/2 h-full">
            <img src="logo-textured.png" alt="" className="w-[600px] h-[600px] items-center justify-center">

            </img>

          </div>
          <div className="w-1/2 h-full">
            <p className="text-green-400 text-[Sega] md:text-[30px] pb-[20px] text-center text-[20px] ">About</p>
            <p className="text-center text-[grey] md:text-[20px] text-[10px] font-[Inter] pb-5 pt-5">
              SAINTGITS College of Engineering organizes ‘Samyuktha 6.0’, a national level techno cultural fest, on
              March 24th. ‘Samyuktha’ has been successfully organized for the past five years and serves as an ideal
              platform for talented undergraduate and postgraduate computer application students to showcase their
              technical and artistic skills.
              In this fest, students will compete for more than 10 events like Best Singer, Spot Photography, Coding,
              Web Designing, Treasure Hunt, Spot Dance. A total prize money of Rs.70000 awaits the contestants.
              Saintgits College of Engineering launched ‘Samyuktha’ in the year 2016 with the aim of bringing to the
              forefront the artistic, cultural and technical skills of students amidst their busy academic schedule.
              ‘Samyuktha’ is jointly organized by a team of dedicated staff members and students who are leaving no
              stone unturned to ensure that this year’s ‘Samyuktha’ is bigger and better than the previous year.</p>
          </div>

        </div>

        <div className="flex flex-row justify-center">
          <Pacman />
        </div>



      </div>
      <Footer />
    </main>
  );
}

{/* <p className="text-green-400 md:text-[30px] pb-[20px] text-[20px]">About</p> 
          <p className=" text-white md:text-[25px] text-[18px] font-[Inter] pb-5 pt-5">
            SAINTGITS College of Engineering organizes ‘Samyuktha 6.0’, a national level techno cultural fest, on
            March 24th. ‘Samyuktha’ has been successfully organized for the past five years and serves as an ideal
            platform for talented undergraduate and postgraduate computer application students to showcase their
            technical and artistic skills.</p>

          <p className=" text-white md:text-[25px] text-[18px] font-[Inter] pb-5 pt-5">In this fest, students will compete for more than 10 events like Best Singer, Spot Photography, Coding,
            Web Designing, Treasure Hunt, Spot Dance. A total prize money of Rs.70000 awaits the contestants.</p>

          <p className="text-white md:text-[25px] text-[18px] font-[Inter] pb-5 pt-5">Saintgits College of Engineering launched ‘Samyuktha’ in the year 2016 with the aim of bringing to the
            forefront the artistic, cultural and technical skills of students amidst their busy academic schedule.
            ‘Samyuktha’ is jointly organized by a team of dedicated staff members and students who are leaving no
            stone unturned to ensure that this year’s ‘Samyuktha’ is bigger and better than the previous year.</p> */}