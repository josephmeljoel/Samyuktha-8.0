import React from 'react'
import "./styles/FlipCard.css"

interface FlipCardProps {
    data: {
        url: string;
    };
}

const FlipCard: React.FC<FlipCardProps> = ({ data }) => {
    return (
        <>
            <div className="card z-50">
                <div className="content">
                    <div className="back">
                        <div className="back-content">
                            <img src={data.url} className='h-full w-full' alt="" />
                        </div>
                    </div>
                    <div className="front">
                        <button className="register-button">Register</button>
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

export default FlipCard