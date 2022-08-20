import React from "react";
import "./Footer.css";
import insta from "../../assest/insta.png";
import facebook from "../../assest/facebook.png";
import linked from "../../assest/linked.png";
import logo from "../../assest/logo.png";
const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-link">
                <img src={insta} alt="" />
                <img src={facebook} alt="" />
                <img src={linked} alt="" />
                </div>
 
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>

            </div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    );
};

export default Footer;
