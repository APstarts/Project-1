import React from "react";
import HeroCards from "./HeroCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
    useGSAP(() => {

      //Hero section text animations
        gsap.fromTo(".hero-grid-left span", {
            x: -100,
            opacity: 0,
        }, {
            x:0,
            duration: 1,
            opacity: 1,
        })
        gsap.fromTo(".hero-grid-right span", {
            x: 100,
            opacity: 0,
        }, {
            x:0,
            duration: 1,
            opacity: 1,
        })
        gsap.fromTo(".text-1, .text-2",{
            opacity:0,
            y:-100,
        },{
            y:0,
            opacity: 1,
            duration: 1,
        })
        gsap.fromTo(".text-3-container", {
            y:100,
            opacity: 0,
        }, {
            y:0,
            opacity: 1,
            duration: 1,
        })
    },[])
  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-grid-left">
          <span>aim</span>
        </div>
        <div className="hero-grid-mid">
          <div className="text-1-2-container">
            <span className="text-1">
              We are a creative agency committed to delivering innovative
              solutions, from concept to execution, ensuring your brand's
              success and growth.
            </span>
            <span className="text-2">Projects</span>
          </div>
          <div className="text-3-container">
            <span className="text-3">WHERE INNOVATION MEETS DESIGN.</span>
          </div>
        </div>
        <div className="hero-grid-right">
          <span>SKY</span>
        </div>
      </div>

      //infinite moving bar
      <div className="partners-bar">
        {/* The Track */}
        <div className="ticker-wrapper">
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          {/* Add a 3rd if your screen is very wide */}
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          {/* Add a 3rd if your screen is very wide */}
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          {/* Add a 3rd if your screen is very wide */}
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
          <span>DELOITTE KPMG PWC ERNST&YOUNG &nbsp; • &nbsp;</span>
        </div>
      </div>
      <div className="layer">
        <div className="layer-draw"></div>
      </div>
      <HeroCards />
    </section>
  );
}

export default Hero;