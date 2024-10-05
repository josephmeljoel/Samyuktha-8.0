"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import "./styles/Navbar2.css"

export default function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <nav className="bg-[#7E60BF] p-4">
        <nav className="bg-[black]">
            <div className="mx-auto flex md:w-1/2 justify-center md:justify-between items-center">
                {/* Left Side Nav Links */}
                <div className="hidden md:flex space-x-12">
                    <p className='text-[20px] font-[300] text-[white] font-[Sega]'>Home</p>
                    <a href="/events" className='text-[20px] font-[300] text-[white] z-50 font-[Sega]'>Events</a>
                </div>

                {/* Logo in the Center */}
                <div className="text-white text-xl font-bold flex-grow md:flex-grow-0 m-0 md:text-center">
                    {/* <p className='text-black'>Logo</p> */}
                    <img src="/logo-textured.png" className='md:w-[250px] w-[150px] md:mt-0 mt-2' alt=""/>
                </div>

                {/* Right Side Nav Links */}
                <div className="hidden md:flex space-x-12">
                    <p className='text-[20px] font-[300] text-[white] font-[Sega]' >About Us</p>
                    <p className='text-[20px] font-[300] text-[white] font-[Sega]'>Contact</p>
                </div>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none p-4"
                >
                    <Menu color="#fff" size={40} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out m-0 ${isOpen ? 'max-h-56' : 'max-h-0'}`}

            >

                <div className="flex flex-col items-center space-y-4 mt-4">

                    <p className="text-white text-[18px] text-white">Home</p>
                    <hr className="border-t-2 border-[black] w-full my-2" />
                    <p className="text-white text-[18px] text-white font-[400]">Events</p>
                    <hr className="border-t-2 border-[black] w-full my-2" />

                    <p className="text-white text-[18px] text-white font-[400]">About Us</p>
                    <hr className="border-t-2 border-[black] w-full my-2" />

                    <p className="text-white text-[18px] text-white font-[400]">Contact Us</p>
                    <hr className="border-t-2 border-[black] w-full my-2" />


                </div>
            </div>
        </nav>
    );
}
