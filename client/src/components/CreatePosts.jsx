import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./HomePage/images/logo.png";
import axios from "axios";
import './CreatePosts.css'

const CreatePosts = ({ update, setUpdate }) => {
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(0);

  const navigate = useNavigate();



  const getUser = () => {
    
    axios
      .get(`http://localhost:3000/api/oneUser/${"khouloud@gmail.com"}`)
      .then((response) => {
        let id = response.data;
      console.log(response.data)
        setUserId(id);
      })
      .catch((err) => console.log(err));
  };
  const addPost = () => {
    axios
      .post("http://localhost:3000/api/posts", {
        title: title,
        section: section,
        content: content,
        users_idUser: 19
      })
      .then(function (response) {
        alert("Post added");
        setUpdate(!update);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(getUser, []);
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
      <div className="form">
        <div className='input'>
          <textarea
            placeholder='title'
            className='courses-input'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='input'>
          <textarea
            placeholder='section'
            className='courses-input'
            onChange={(e) => {
              setSection(e.target.value);
            }}
          />
        </div>
        <div className='input'>
          <textarea
            placeholder='content'
            className='courses-input'
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button type='submit' onClick={addPost}>
          submit
        </button>
      </div>
    </div>
  );
};

export default CreatePosts;