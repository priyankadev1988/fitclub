import React from "react";
import Header from "../../Header/Header";  
import "./Hero.css";
import heroimg from "../../assest/fitness.png"
import heart from "../../assest/heart.webp"
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*THE BEST ADD*/}
        <div className="the-best-ad">
          <div></div>
          <span>the fitness club in the town</span>
        </div>

        {/* HERO HEADING*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in hear we will help you to shape and bulid your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+150</span>
            <span>expert coach</span>
          </div>
          <div>
            <span>+987</span>
            <span>member joind</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness progarms</span>
          </div>
        </div>
        {/* hero button*/}
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join More</button>
        <div className="heart-rate">

          <img src={heart} alt="" />
          <span>Heart rate </span>
          <span>116bpm</span>
        </div>
        {/*hero image*/ }
     
       <img src={heroimg} alt= "" className="hero-image"/>
       

      </div>

    </div>
  );
};

export default Hero;
