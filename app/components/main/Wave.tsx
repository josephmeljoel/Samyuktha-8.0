import React from 'react'
import "./styles/wave.css"
import Navbar2 from './Navbar'

export default function Wave() {
    return (
        <>
            <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>


                <div className="infotop">


                    <Navbar2 />

                </div>
            </div>
        </>
    )
}
