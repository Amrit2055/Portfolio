import React from 'react'
import logo from "../logo.jpg";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";

const Contact = () => {
 
    
    return (
        <>
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="contactSection-logo">
                        <img src={logo} alt="logoimage" />
                        <div className="row justifyCenter">
                            <div className="col-6">
                            <h1>Wanna jumpstart your business?</h1><br />
                            - Designing stunning WordPress websites<br />
                            - Building an online presence<br />
                            - Promoting your website
                            </div>
                            <ul className="contactCircles">
                                
                                    <li><a href="https://www.facebook.com/mrtbhusal"><FaFacebookF /></a></li>
                                    <li><a href="https://twitter.com/mrtbhusal"><FaTwitter /></a></li>
                                    <li><a href="https://www.linkedin.com/in/amrit-bhusal-663828158/"><FaLinkedin /></a></li>
                                    <li><a href="https://www.instagram.com/mrt_bhusal/"><FaInstagram /></a></li>
                                

                            </ul>

                        </div>

                    </div>

                </div>
            </div> 
            

        </div>
        <div className="footer">
            Copyright © 2020 Amrit Bhusal.

            </div>
            
        </>
    )
}

export default Contact
