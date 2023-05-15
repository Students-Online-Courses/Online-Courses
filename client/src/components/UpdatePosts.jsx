import React , {useState} from "react";
import axios from "axios";
import './UpdatePosts.css';
import logo from './HomePage/images/logo.png'

const UpdatePosts = (props) =>  {
    const [title , setTitle] = useState(props.title);
    const [section , setSection] = useState(props.section);
    const [content, setContent] = useState(props.content);

    const update = () => {
        axios.put('http://localhost:3000/api/posts/${props.id}',{
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
        <div className="create-post-container">
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="logo" />
            <span className="navbar-brand">OnlineCourses</span>
          </div>
          <div className="navbar-middle">
            <button className="navbar-btn">logout</button>
            
          
        </div>
        <div className="form-container">
        <div className="input">
          <input
            type="text"
            className="form-input"
            value={title}
            placeholder="Update Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          /> 
          </div> 
          <div className="input">
          <input
            type="text"
            className="form-input"
            value={section}
            placeholder="Update Section"
            onChange={(e) => {
              setSection(e.target.value);
            }}
          /> </div>
          <div className="input">
          <textarea
            className="form-textarea"
            value={content}
            placeholder="Update Content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          /> </div>
          <button className="submit-button" onClick={() => update()}>
            Update
          </button>
        </div>
      </div>
    </div>
    )
}

export default UpdatePosts