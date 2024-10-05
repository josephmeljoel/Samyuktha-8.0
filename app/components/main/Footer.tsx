import React from 'react'
import "./styles/footer.css"

function Footer() {
    return (
        <>
            <div className='bg-[#373A40] mt-[100px] pt-1 pb-1'>
            <div className='container max-w-md sm:max-w-lg lg:max-w-4xl mx-auto h-[430px]'>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4">
                        <div className='footer-logo d-flex justify-center items-center'>
                            <img src="/logo-textured.png" alt="" width={300} />
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