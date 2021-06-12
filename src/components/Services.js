import React from "react";
import {FaChrome,FaWordpress,FaCamera,FaPhoenixSquadron,FaOpencart,FaAndroid} from "react-icons/fa";


const Services = () => {
    const [header]=React.useState({mainHeader:"SERVICES",subHeading:"My Services",text:"My goal is to build fast ,mobile-first websites that clearly communicates with visitors."});
    const [state]=React.useState([
        {
            id:1,
            icon:<FaChrome />,
            heading:"Web Development",
            text:"Our approach to website design is to create awebsite thatstrengthens your company's brand while ensuring ease of use and simplicity for your audience."
        },
        {
            id:2,
            icon:<FaWordpress />,
            heading:"Custom WordPress Theme Development",
            text:"Wordpress CMS is a user-friendly administrative area allowing you to easily edit your websites content.WordPress is the world’s most popular CMS"
        },
        {
            id:3,
            icon:<FaCamera />,
            heading:"Photography",
            text:"Amrit Bhusal is available to travel to any location for your desired photo shoot. All types of photography can be created for your website.We shoot some small video clips."
        },
        {
            id:4,
            icon:<FaPhoenixSquadron />,
            heading:"Logo Design",
            text:"Our goal is to design a professional yet creative logo that reflects your company’s spirit and leaves a lasting, memorable effect.We design logo at affordable price."
        },
        {
            id:5,
            icon:<FaOpencart />,
            heading:"eCommerce Solution",
            text:"An eCommerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website."
        },
        {
            id:6,
            icon:<FaAndroid />,
            heading:"App Design",
            text:"Our approach is to create an app design that strengthens your company’s brand while ensuring ease of use and simplicity for your audience."
        },
    ])


    return (
        <>
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                    <h3 className="heading">
                        {header.mainHeader}
                    </h3>
                    <h1 className="mainHeader">{header.subHeading}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                    </div>

                    
                    <div className="row">
                        {state.map((info) =>(
                            <div className="col">
                                <div className="column-card">
                            <div className="serivices__box">
                                <div className="commonIcons" >
                                    {info.icon}
                                    </div>
                                <div className="services__box-header">
                                    {info.heading}

                                </div>
                                <div className="services__box-p">
                                    {info.text}

                                </div>
                            </div>
                            </div>

                        </div>
                        ))}   
                    </div>

                </div>
            </div>
            </div>
        
            
        </>
    )
}

export default Services
