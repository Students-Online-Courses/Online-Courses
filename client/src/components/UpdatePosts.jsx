import React , {useState} from "react";
import axios from "axios";

const UpdatePosts = (props) =>  {
    const [title , setTitle] = useState(props.title);
    const [section , setSection] = useState(props.section);
    const [content, setContent] = useState(props.content);

    const update = () => {
        axios.put('http://localhost:3000/posts/${props.id}',{
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
            <textarea value={title} placeholder="update-title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea value={section} placeholder="update-section" onChange={(e)=>{setSection(e.target.value)}}/>
            <textarea value={content} placeholder="update-content" onChange={(e)=>{setContent(e.target.value)}}/>
            <button className="update-button" onClick={()=>{update()}}>update</button>
        </div>
    )
}

export default UpdatePosts