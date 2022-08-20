import React from "react";
import "./Reasons.css";
import workout1 from "../../assest/workout1.webp";
import workout2 from "../../assest/workout2.jpeg";
import workout3 from "../../assest/workout3.webp";
import workout4 from "../../assest/workout4.webp";
import tick from "../../assest/tick.jpg"
import apple from "../../assest/apple.png"
import adidas from "../../assest/adidas.png"
import nike from "../../assest/nike.png"
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={workout1} alt="" />
                <img src={workout2} alt="" />
                <img src={workout3} alt="" />
                <img src={workout4} alt="" />
            </div>

            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">why </span>
                    <span>choose us?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>FREE PROGRAM FOR NEW MAMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELATABLE PARTNERS</span>
                    </div>

                </div>
                <span style={{color:"black"}}>OUR PARTNERS</span>
                <div className="partners">
                    <img src={apple} alt=""/>
                    <img src={adidas} alt=""/>
                    <img src={nike} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Reasons;
