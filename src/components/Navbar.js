import React from "react";
import logo from "../logo.jpg";
import { NavLink } from "react-router-dom";




const Navbar = () => {
    return (
        <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <div className="navbar-brand" ><img className="logo" src={logo} alt="logo.." /></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services" >Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/skill">Skills</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link" to="/contactform">Contact</NavLink>
        </li>
      </ul> 
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar
