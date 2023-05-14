import React, { useState } from "react";
import "./HomePage.css";
import logo from "./images/logo.png";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className='center'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <img src={logo} alt='OnlineCourses logo' className='logo' />
          <span className='navbar-brand'>OnlineCourses</span>
        </div>

        <div className='navbar-right'>
          <button className='navbar-btn' onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </div>
      </nav>
      <div className='espace'></div>
      <div className='welcome-text'>
        <h1>Welcome to OnlineCourses!</h1>
        <p>
          We offer a wide range of online courses for students of all levels.
        </p>
        <p>
          About Us: OnlineCourses is an online learning platform that connects
          students with experienced teachers.
        </p>
      </div>
      <footer class='footer contact-us'>
        <h2>CONTACT US:</h2>
        <div class='contact-info'>
          <div>
            <h5>Email:</h5>
            <p>rinezkhouloud@gmail.com</p>
          </div>
          <div>
            <h5>Phone:</h5>
            <p>+216 27 840 128</p>
          </div>
          <hr />
          <div>
            <h5>Email:</h5>
            <p>rinezkhouloud@gmail.com</p>
          </div>
          <div>
            <h5>Phone:</h5>
            <p>+216 27 840 128</p>
          </div>
          <hr />
          <div>
            <h5>Email:</h5>
            <p>rinezkhouloud@gmail.com</p>
          </div>
          <div>
            <h5>Phone:</h5>
            <p>+216 27 840 128</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
