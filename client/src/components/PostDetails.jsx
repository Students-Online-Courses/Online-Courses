import React , {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./HomePage/images/logo.png";




const PostDetails = () =>{
    const [updatPost , setUpdatPost] =useState(false);
    const [showComments ,setShowComments] = useState(false);
    const [content ,setContent] = useState('');
    const [data,setData] = useState([]);


    const navigate = useNavigate();

  

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/onePost/${109}`).then((response)=>{
            setData(response.data)
            console.log("post",response.data)
           
           console.log(data)
        }).catch((error)=>console.log(error))
    },[])

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
            onClick={() => navigate("/StudentView")}>
           
            All course
          </button>
         

          
          <button
            className='navbar-btn'
            onClick={() => 
              navigate("/")
            
            }>
            Sign out
          </button>
        </div>
      </nav>
            
            <div className="post-container">
        {data.map((e, i) => {
          return (
            <div className="post" key={i}>
              <div className="post-header">
                <h1 className="post-title"> Title : {e.title}</h1>
                <p className="comment-time"> Created at : {e.createdAt.slice(0,10)}</p>
              </div>
              <h2 className="post-section"> Section : {e.section}</h2>
              <p className="post-content"> {e.content}</p>
              <div className="card-actions">
                        
                       
                      </div>
            </div>
          );
        })}
      </div></div>
       
    )
}

export default PostDetails
