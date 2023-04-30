import React from 'react';
import {RiFacebookCircleFill} from "react-icons/ri";
import {FiFigma} from "react-icons/fi";
import { GrReactjs} from "react-icons/gr";
import {FaWhatsapp} from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--group">
                        <h1 className="footer--group__title">Sign up for our newsletter</h1>
                        <p className="footer--group__span">Be the first to know about our special offers, news, and updates.</p>
                        <input type="email" placeholder="email" className="footer--group__textarea"/>
                    </div>
                    <div className="footer--titles">
                        <h4 className="footer--titles__text">Use Cases</h4>
                        <p>Web-designers</p>
                        <p>Marketers</p>
                        <p>Books</p>
                        <p>Website Builder</p>
                        <p>Website</p>
                    </div>
                    <div className="footer--titles">
                        <h4 className="footer--titles__text">Books</h4>
                        <p>Classics</p>
                        <p>Crime</p>
                        <p>Roman</p>
                        <p>Fairy tales</p>
                        <p>Horror</p>
                    </div>

                    <div className="footer--website">
                        <h1>Follow us</h1>
                        <a href="#"><RiFacebookCircleFill/></a>
                        <a href="#"><FaWhatsapp/></a>
                        <a href="#"><FiFigma/></a>
                        <a href="#"><GrReactjs/></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;