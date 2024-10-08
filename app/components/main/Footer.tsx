'use client';
import React from 'react'
import "./styles/footer.css"

function Footer() {
    return (
        <>
            <div className='bg-[#131842] text-white mt-[80px] pt-1 pb-1'>
            <div className='container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto justify-center h-full md:h-[430px]'>
                <div className="grid md:flex md:gap-8 gap-0 justify-center">
                    <div className="p-4">
                        <div className='footer-logo d-flex justify-center items-center'>
                            <img className='md:w-[300px] ml-5 md:ml-0 w-[200px]' src="/logo-textured.png" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-4">
                        <div className="flex flex-col items-center">
                            <img src="/saintgits.png" width={100} alt="Saintgits College Logo" />
                            <p>Saintgits College of Engineering</p>
                            <p>Kottukulam Hills, Pathamuttom P.O</p>
                            <p>Kerala 693572</p>
                        </div>
                    </div>

                </div>
                <div>
                <p className='text-center mt-[40px]'>&copy; 2024 Saintgits College of Engineering. All rights reserved.</p>

                </div>
            </div>
            </div>

        </>
    )
}

export default Footer