'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import "./styles/Navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <nav className="bg-[#7E60BF] p-4">
        <nav className="">
            <div className="mx-auto flex md:w-1/2 justify-center md:justify-between items-center">
                {/* Left Side Nav Links */}
                <div className="hidden md:flex space-x-12">
                    <a href='/' className='text-[30px] font-[300] text-[white] z-50 font-[blueSpirits]'>Home</a>
                    <a href="/pages/events" className='text-[30px] font-[300] text-[white] z-50 font-[blueSpirits]'>Events</a>
                </div>

                {/* Logo in the Center */}
                <div className="text-white text-xl font-bold flex-grow md:flex-grow-0 m-0 md:text-center">
                    {/* <p className='text-black'>Logo</p> */}
                    <img src="/logo-textured.png" className='md:w-[250px] w-[150px] md:mt-0 mt-2' alt="" />
                </div>

                {/* Right Side Nav Links */}
                <div className="hidden md:flex space-x-12 z-50">
                    <a className='text-[30px] font-[300] text-[white] font-[blueSpirits]' href='/pages/timeline'>Schedule</a>
                    <a className='text-[30px] font-[300] text-[white] font-[blueSpirits]' href='/pages/Contact'>Contact</a>
                </div>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none p-4 z-50"
                >
                    <Menu color="#fff" size={40} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={` z-50 md:hidden overflow-hidden transition-all duration-300 ease-in-out m-0 ${isOpen ? 'max-h-56' : 'max-h-0'}`}

            >

                <div className="flex flex-col items-center space-y-4 mt-4 z-50">

                    <a href='/' className="text-white text-[18px] font-[blueSpirits] z-50">Home</a>
                    <hr className="border-t-2 border-[black] w-full my-2" />
                    <a href='/pages/events' className="text-white text-[18px] font-[blueSpirits] font-[400] z-50">Events</a>
                    <hr className="border-t-2 border-[black] w-full my-2" />

                    <a href='/pages/timeline' className="text-white text-[18px] font-[blueSpirits] font-[400] z-50">Schedule</a>
                    <hr className="border-t-2 border-[black] w-full my-2" />

                    <a href='/pages/Contact' className="text-white text-[18px] font-[blueSpirits] font-[400] z-50">Contact Us</a>
                    <hr className="border-t-2 border-[black] w-full my-2" />


                </div>
            </div>
        </nav>
    );
}
