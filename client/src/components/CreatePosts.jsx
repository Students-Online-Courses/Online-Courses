import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CreatePosts.css'
import logo from './HomePage/images/logo.png';

const CreatePosts = ({update,setUpdate}) => {

const [title , setTitle] = useState('');
const [section , setSection] = useState('');
const [content , setContent] = useState('');



const addPost = () => {
axios.post('http://localhost:3000/api/posts',{
    title: title,
    section: section,
    content: content,
    users_idUser: 1
    // hedhi provisoir hata tjini id shiha mta3 user
    
})
.then(function (response) { 
    alert('Post added')
setUpdate(!update)

}).catch(function (err) {
    console.log(err)
});

}
return (
    <div className="create-post-container">
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="navbar-brand">OnlineCourses</span>
      </div>
      <div className="navbar-middle">
        <button className="navbar-btn">logout</button>
        
      </div>
    
    </div>
    <div className="form">
      <div className="input">
        <textarea
          placeholder="Title"
          className="courses-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input">
        <textarea
          placeholder="Section"
          className="courses-input"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
      </div>
      <div className="input">
        <textarea
          placeholder="Content"
          className="courses-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button" onClick={addPost}>
        Submit
      </button>
    </div>
  </div>
)
}

export default CreatePosts;
