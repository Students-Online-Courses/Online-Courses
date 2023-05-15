import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./HomePage/images/logo.png";
import axios from "axios";
import "./HomePage/HomePage.css";




const StudentView = () => {
    const [data, setData] = useState([]);
    const[update,setUpdate] = useState(false)
   
    const navigate = useNavigate();

  
  const getCourses = () => {
    axios.get('http://localhost:3000/api/posts').then(response => {
      console.log("data",response.data)
      setData(response.data)
      console.log("2",data)
    })
    .catch (error => {
      console.error(error)
    })
    }
    useEffect (()=>{getCourses()},[]);
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-left'>
          <img src={logo} alt='OnlineCourses logo' className='logo' />
          <span className='navbar-brand'>OnlineCourses</span>
        </div>

        <div className='navbar-right'>
          <button
            className='navbar-btn'
            onClick={() => 
              navigate("/")
            
            }>
            Sign out
          </button>
        </div>
      </nav>
      <div className="card-container">
        {
            data.map((e, i) => {
                return (
                    <div >
                    <div className="card" onClick={()=>(navigate("/postDetails"))}>
                      <div className="card-content">
                        <h2>{e.title}</h2>
                        <h3>{e.section}</h3>
                      </div>
                      
                    </div>
                    </div>  
                    )})}
      </div>
    </div>
  );
};

export default StudentView;