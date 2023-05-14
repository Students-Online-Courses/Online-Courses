import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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
    <div>
        <div>
            <div className='imput'>
             <textarea placeholder='title' className='courses-imput' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className='imput'>
             <textarea placeholder='section' className='courses-imput' onChange={(e)=>{setSection(e.target.value)}}/>
            </div>
            <div className='imput'>
             <textarea placeholder='content' className='courses-imput' onChange={(e)=>{setContent(e.target.value)}}/>
            </div>
            <button type='submit' onClick={addPost}>submit</button>
        </div>
    </div>
)
}

export default CreatePosts;
