import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreatePosts = (props) => {
const [title , setTitle] = useState('');
const [section , setSection] = useState('');
const [content , setContent] = useState('');



const addPost = () => {
axios.post('http://localhost:3000/posts',{
    title: title,
    section: section,
    content: content,
    users_user_id: 1
    // hedhi provisoir hata tjini id shiha mta3 user
    
})
window.location.reload().then(function (respense) { 
console.log(respense)
}).catch(function (err) {
    console.log(err)
});
alert('Post added')
}
return (
    <div>
        <div>
            <div className='imput'>
             <textarea placeholder='title' className='courses-imput' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className='imput'>
             <textarea placeholder='section' className='courses-imput' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className='imput'>
             <textarea placeholder='content' className='courses-imput' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <button type='submit' onClick={addPost}>submit</button>
        </div>
    </div>
)
}

export default CreatePosts;
