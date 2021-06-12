import React from "react";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaPhoneSquareAlt} from "react-icons/fa";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";



const Banner = () => {
    const [state]=React.useState({
        title:"I am Amrit Bhusal",text:"I 'm Amrit, web designer and frontend web develper in ReactJS",image:"/images/amrit-01.png"
    })
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__Section">
                            <ul className="header__ul">
                                <li>
                                <a href="https://www.facebook.com/mrtbhusal"><FaFacebookF /></a>
                                </li>
                                <li>
                                <a href="https://twitter.com/mrtbhusal"><FaTwitter /></a>
                                </li>
                                <li>
                                <a href="https://www.instagram.com/mrt_bhusal/"><FaInstagram /></a>
                                </li>
                                <li>
                                <a href="https://www.linkedin.com/in/amrit-bhusal-663828158/"><FaLinkedin /></a>
                                </li>
                            </ul>
                            <h1>
                            <Typed
                className="typed-text"
                strings={[state.title]}
                typeSpeed={100}
                backSpeed={120}
                loop
                
                />
                            </h1>
                            <p> <Typed
                className="typed-text"
                strings={[state.text]}
                typeSpeed={40}
                // // backSpeed={60}
                // loop
                
                /></p>
                                <div className="header__buttons">
                                     <button className="btn-portfolio">Hire Me</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <NavLink href="" className="btn-play" to="/about"><FaPhoneSquareAlt size={30} /></NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img className="image-1" src={state.image} alt="amritphoto" />

                        </div>


                    </div>

                </div>

            </div>

        </header>
            
        </>
    )
}

export default Banner;
