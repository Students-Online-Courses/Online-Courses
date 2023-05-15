import React , {useState } from "react";
import axios from "axios";
import './UpdatePosts.css'
import logo from "./HomePage/images/logo.png"
import { useNavigate } from "react-router-dom";


const UpdatePosts = (props) =>  {
    const [title , setTitle] = useState(props.title);
    const [section , setSection] = useState(props.section);
    const [content, setContent] = useState(props.content);

    const navigate = useNavigate();


    const update = () => {
        axios.put(`http://localhost:3000/api/posts/${118}`,{
            title: title,
            section: section,
            content: content
        })
        window.location.reload().then((response)=>
        console.log(response)
        ).catch((error)=>
        console.log(error)
        )
    }
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
           
            All course
          </button>
          <button
            className='navbar-btn'
            onClick={() => navigate("/myCourses")}>
          
            My courses
          </button>

          <button
            className='navbar-btn'
            onClick={() => navigate("/CreatePosts")}>
            Create course
          </button>
        </div>
      </nav>
    
        <div className="form"> 
        <div className="input">
        <textarea value={title} placeholder="Title" className="courses-input" onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
           <div className="input">
           <textarea value={section} placeholder="Section" className="courses-input" onChange={(e)=>{setSection(e.target.value)}}/>
           </div> 
            <div className="input">
            <textarea value={content} placeholder="Content" className="courses-input" onChange={(e)=>{setContent(e.target.value)}}/>
            </div>
            
            <button type="submit" className="submit-button" onClick={()=>{update()}}>update</button>
        </div> 
        </div>
    )
}

export default UpdatePosts