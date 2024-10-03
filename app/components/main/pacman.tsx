import React from "react";
import "./styles/pacman.css"

export default function Pacman() {
  return (
    <>
      <div className="w-[450px]">
        <div className="dots">
          <div className="dot">E</div>
          <div className="dot">V</div>
          <div className="dot">E</div>
          <div className="dot">N</div>
          <div className="dot">T</div>
          <div className="dot">S</div>
    
        </div>
        <div className="dots2">
          <div className="dot2">E</div>
          <div className="dot2">V</div>
          <div className="dot2">E</div>
          <div className="dot2">N</div>
          <div className="dot2">T</div>
          <div className="dot2">S</div>
          
        </div>
        <div className="circle"></div>
      </div>
    </>
  );
}
