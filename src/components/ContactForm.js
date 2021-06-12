import React from 'react'

export const ContactForm = () => {
    return (
        <>
        <div className="contactform">


        <div className="container">
            <div className="common">
                <h1 className="mainHeader">
                Contact Me

                </h1>
                <p className="mainContent">
                    Let's Work Together

                </p>
                <div className="commonBorder"></div>
            </div>
            <div className="row h-650 alignCenter">
                <div className="col-6">
                <div className="form-data">
                <form className="text-md-center">
                <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-white">Your Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter your full name.</div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-white">Subject</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter your subject name</div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-white">Message</label>
                        <input type="text-area" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter your subject name</div>
                    </div>
                    
                    <div className="mb-3 form-check text-white">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                   
                </div>

            </div>
            </div>
            </div>



        
        </>

    )
}
export default ContactForm;