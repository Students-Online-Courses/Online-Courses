import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./HomePage/images/logo.png";
import axios from "axios";
import "./HomePage/HomePage.css";




const TeacherCourses = () => {
    const [data, setData] = useState([]);
    const[update,setUpdate] = useState(false);
   
    const navigate = useNavigate();

    const deletCourse =() =>{
      axios.delete(`http://localhost:3000/api/posts/${111}`)
      .then((response)=> {
      console.log(response)
    setUpdate(!update)
  }
      ).catch((error)=>
      console.log(error)
      )
  }

  const getCourses = () => {
    axios.get(`http://localhost:3000/api/posts/${7}`).then(response => {
      console.log("data",response.data)
      setData(response.data)
      console.log("2",data)
    })
    .catch (error => {
      console.error(error)
    })
    }
    useEffect (()=>{getCourses()},[update]);
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
            onClick={() => navigate("/allCourses")}>
            {" "}
            All courses{" "}
          </button>
          <button
            className='navbar-btn'
            onClick={() => navigate("/myCourses")}>
            {" "}
            My courses{" "}
          </button>

          <button
            className='navbar-btn'
            onClick={() => navigate("/CreatePosts")}>
            Create course
          </button>
        </div>
      </nav>
      <div className="card-container">
        {
            data.map((e, i) => {
                return (
                    <div key={i}>
                    <div className="card">
                      <div className="card-content">
                        <h2>{e.title}</h2>
                        <h3>{e.section}</h3>
                      </div>
                      <div className="card-actions">
                        <button className="card-button">View</button>
                        <button className="card-button" onClick={() => navigate("/edit")}>Edit</button>
                        <button className="card-button" onClick={() =>deletCourse()}>Remove</button>
                      </div>
                    </div>
                    </div>  
                    )})}
      </div>
    </div>
  );
};

export default TeacherCourses;
