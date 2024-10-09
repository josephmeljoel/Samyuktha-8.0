import Footer from '@/app/components/main/Footer'
import Navbar from '@/app/components/main/Navbar'
import React from 'react'

export default function contact() {
  return (
    <div>
      <Navbar/>
    <div className='grid w-full h-full text-white justify-center items-center '>


      <div className='grid justify-center items-center'>
      <p className='md:text-[70px] text-[40px] mt-[60px] font-[800] font-[BlueSpirits]'>CONTACT</p>
      </div>


      <div className='grid w-auto h-auto justify-center items-center pt-[100px]'>
      <div className='grid justify-center items-center'>
      <img src="/saintgits.png" alt="saintgitslogo" className='md:w-[250px] w-[175px] md:h-[250px] h-[175px]'></img>
      </div>
      <p className='text-center md:text-[18px] text-[14px]'>Saintgits College of Engineering</p>
                  <p className='text-center md:text-[18px] text-[14px]'>Kottukulam Hills, Pathamuttom P.O</p>
                            <p className='text-center md:text-[18px] text-[14px]'>Kerala 693572</p>


     <a className='grid items-center justify-center mt-[50px]' href="https://www.google.com/maps/dir//Kottukulam+Hills,+Pathamuttam+P.+O,+Kerala+686532/@9.5099999,76.4689575,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b062ed484f475a7:0xea66b5d0e55062ca!2m2!1d76.5513594!2d9.5100096?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="md:w-[100px] w-[50px] md:h-[100px] h-[50px] lucide lucide-map-pinned hover:bg-blue-300 z-50 rounded-[50px]"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/>
                            <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
                            </a>                       
                            <div className='grid gap-[10px]'>
                            <p className='font-[Sega] md:text-[30px] text-[20px] text-center mt-[40px] py-[40px]'>Event&nbsp;&nbsp;&nbsp;Coordinators</p>
                            <p className='text-center md:text-[25px] text-[15px] font-[600]'>Paul&nbsp;Prince&nbsp;&nbsp;--&nbsp;&nbsp;9061268071</p>
                            <p className='text-center md:text-[25px] text-[15px] font-[600]'>Aparna&nbsp;Menon&nbsp;&nbsp;--&nbsp;&nbsp;9496481205</p>
                            <p className='text-center md:text-[25px] text-[15px] font-[600]'>Nandhana&nbsp;Pushpan&nbsp;&nbsp;--&nbsp;&nbsp;9495735439</p>
                            <p className='text-center md:text-[25px] text-[15px] font-[600]'>Johan&nbsp;M&nbsp;Zachariah&nbsp;&nbsp;--&nbsp;&nbsp;8590929384</p>
                            </div>
      </div>   
          
    </div>
    <Footer/>  
    </div>
  )
}
