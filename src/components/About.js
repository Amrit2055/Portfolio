import React from 'react'

const About = () => {
    const [header]=React.useState({
        subHeader:"About Me",
        text:"I have worked on a multitude of web and print based projects for a range of clients providing Web Design (Photoshop, Illustrator,InDesign) and Development (PHP, HTML, CSS, LESS, JS, jQuery, WordPress, WooCommerce, Bootstrap, Responsive Layouts), eCommerce Solutions, Corporate Branding and Graphic Design."
    });
    const [state]=React.useState([
        {id:1,title:'Name:',text:'Amrit Bhusal'},
        {id:2,title:'Email:',text:'mrtbhusal@gmail.com'},
        {id:3,title:'Phone:',text:'+977-9847691230'},
        {id:4,title:'linkedin',text:'amrit-bhusal'},
        
    ])
    return (
        <>
        <div className="about">
            <div className="container">
            <div className="common">
                <h1 className="mainHeader">
                    {header.subHeader}

                </h1>
                <p className="mainContent">
                    {
                        header.text
                    }

                </p>
                <div className="commonBorder"></div>
            </div>
            <div className="row h-650 alignCenter">
                <div className="col-6">
                    <div className="about__img">
                        <img src="/images/image-02.png" alt="image01" />

                    </div>

                </div>
                <div className="col-6">
                    <div className="about__info">
                        <h1>Hi There</h1>
                        <div className="about__info-p1">
                        I am a Bachelors’s student in the Department of Computer Science
                         and Information Technology at the Tribhuvan University of Nepal.
                         I specialise in creating interactive experiences and functional
                          interfaces using ReactJS. 
                

                        </div>
                        <div className="about__info-p2">
                            My passion ia all about creating real elegant looking websites.
                             Always keeping it clean and simple with that added functionality
                              of user interaction you would like to see.

                        </div>
                        <div className="info__contacts">
                            <div className="row">
                                {state.map((info) =>(
                                    <div className="col-6">
                                    <strong>{info.title}</strong>
                                    <p>{info.text}</p>
                                </div>

                                ))}
                                
                            </div>

                        </div>

                    </div>


                </div>

            </div>
            </div>


        </div>
            
        </>
    )
}

export default About
