import React from 'react'
import "./styles/FlipCard.css"

export default function FlipCard() {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content">
                            <svg stroke="#ffffff">

                                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>

                                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>



                            </svg>
                            <strong>Hover Me</strong>
                        </div>
                    </div>
                    <div className="front">
                        <button className='register-button'>Register</button>
                        {/* <div className="img">
                            <div className="circle">
                            </div>
                            <div className="circle" id="right">
                            </div>
                            <div className="circle" id="bottom">
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
        </>
    )
}
