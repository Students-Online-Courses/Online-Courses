import React , {useState} from "react";
import axios from "axios";
import UpdatePosts from "./UpdatePosts.jsx";
import Comment from "./Comment.jsx";



const PostDetails = (props) =>{
    const [updatPost , setUpdatPost] =useState(false);
    const [showComments ,setShowComments] = useState(false);
    const [content ,setContent] = useState('');
    const addComment =() =>{
        axios.post('http://localhost:3000/api/comments',{content:content}).then((response)=>
        console.log(response)
        ).catch((error)=>
        console.log(error)
        )
    }
    const showComment =() =>{
        setShowComments(!showComments);
    }
    const updateposts =() =>{
        setUpdatPost(!updatPost);
    }
    const deletPost =() =>{
        axios.delete('http://localhost:3000/api/posts/${props.data.id}')
        window.location.reload().then((response)=>
        console.log(response)
        ).catch((error)=>
        console.log(error)
        )
    }
    return (
        <div className="post-container">
            <div className="post">
                <p className="comment-time">{props.data.createdAt}</p>
                <h2>{props.data.user.fullName}</h2>
                <h1 className="post-title">{props.data.title}</h1>
                <h2 className="post-section">{props.data.section}</h2>
                <p className="post-content">{props.data.content}</p>
                <button className="delete-button" onClick={()=> deletPost()}>delete Post</button>
                <imput className = 'update-button' type ='submit' value='update' onClick={()=>updateposts()}/>
                <imput className = 'update-button' type ='submit' value='show comments' onClick={()=>showComment()}/>
                {updatPost && (<UpdatePosts id ={props.data.id}  title = {props.data.title} content = {props.data.content} section = {props.data.section} />)}
                <div>
                    <imput className ='comment-imput' placeholder ='add comment' onChange={(e)=>{setContent(e.target.value)}}/>
                    <button className="comment-button" onClick={()=>{addComment()}}> add comment</button>
                </div>
            </div>
            <div>
                {props.data.comments && props.data.comments.map((e,index)=>(
                    <div key={index}>{showComments && <Comment data ={e}/>}</div>
                )) }
            </div>
        </div>
    )
}

export default PostDetails
