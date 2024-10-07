import React from 'react'

export default function page() {
  return (
    <div className='flex w-full h-full pt-40 justify-center  items-center'>
        <div className='grid gap-[20px] w-2/4 h-auto border bg-[#0e0622] rounded-[20px] border-white'>
       
       <div className='grid justify-center gap-[20px] mt-[20px] pb-[20px]'>
        <div className='flex gap-[20px]'>
           <p className='text-[30px]'>Name&nbsp;&nbsp;&nbsp;&nbsp;:</p>
           <input type="text" placeholder='Enter Your Name' className='w-[300px] text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 z-50'/>
           </div>

           <div className='flex gap-[20px]'>
           <p className='text-[30px]'>Name&nbsp;&nbsp;&nbsp;&nbsp;:</p>
           <input type="text" placeholder='Enter Your Name' className='w-[500px] text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 z-50'/>
           </div>

           <div className='flex gap-[20px]'>
           <p className='text-[30px]'>Name&nbsp;&nbsp;&nbsp;&nbsp;:</p>
           <input type="text" placeholder='Enter Your Name' className='w-[500px] text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 z-50'/>
           </div>

           <div className='flex gap-[20px]'>
           <p className='text-[30px]'>Name&nbsp;&nbsp;&nbsp;&nbsp;:</p>
           <input type="text" placeholder='Enter Your Name' className='w-[500px] text-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 z-50'/>
           </div>
           </div>

          
<div className='flex justify-center pb-[20px]'>
<button className='w-[150px] items-center h-[50px] border rounded-[30px] text-[20px] font-[300] hover:bg-red-500 border-red-500 z-50'>SUBMIT</button>
</div>
        </div>
    </div>
  )
}

