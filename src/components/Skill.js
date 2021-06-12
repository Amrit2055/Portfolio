import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export const Skill = () => {
    return (
        <>
        <div className="skill">


        <div className="container">
            <div className="common">
                <h1 className="mainHeader">
                I'M EXPERT ON

                </h1>
                <p className="mainContent">
                    Let's Work Together

                </p>
                <div className="commonBorder"></div>
            </div>
            <div className="row h-650 alignCenter">
                <div className="col-6">
                    <h3 className="progress-text">HTML</h3>
                <ProgressBar 
    completed={95}
    bgColor="#2196F3"
    labelAlignment="outside"
    labelColor="#e80909"
text="HTML"
/>
<h3 className="progress-text">CSS</h3>
                <ProgressBar 
    completed={85}
    bgColor="#F44336"
    labelAlignment="outside"
    labelColor="#e80909"
text="HTML"
/>

<h3 className="progress-text">JAVASCRIPT</h3>
                <ProgressBar 
    completed={80}
    bgColor="#4CAF50"
    labelAlignment="outside"
    labelColor="#e80909"
text="HTML"
/>

<h3 className="progress-text">REACTJS</h3>
                <ProgressBar 
    completed={65}
    bgColor="#FFBE00"
    labelAlignment="outside"
    labelColor="#e80909"
text="HTML"
/>

                </div>
                <div className="col-6">
                    <div className="about__info">
                    I’ve always sought out opportunities and challenges that are meaningful to me. Although
                     my professional path has taken many twists and turns — from touring and recording artist,
                      to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner
                       and entrepreneur — I've never stopped engaging my passion to help others and solve problems.
     
                    </div>
                    <div className="about__info">
                        <br />
                        <br />
                        <br />
                    As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things,
 and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact
  at a high growth company.
                    </div>


                </div>

            </div>
            </div>


        </div>
            
        </>
    )
}
export default Skill;
