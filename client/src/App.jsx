import React , {useState , useEffect} from 'react';
import {Routes , Route , BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import AllPosts from './components/AllPosts';
import Comment from './components/Comment';
import CreatePosts from './components/CreatePosts';
import UpdatePosts from './components/UpdatePosts';


const App =() =>{
  const [data,setData] = useState ([]);
  const[update,setUpdate] = useState([false])
  useEffect (()=>{getPosts()},[update]);

  const getPosts = () => {
    axios.get('http://localhost:3000/api/posts').then(response => {
      console.log("data",response.data)
      setData(response.data)
      console.log("2",data)
    })
    .catch (error => {
      console.error(error)
    })
    }
    
  return (
    <BrowserRouter><div className='app'>
      <Routes>
      <Route path='/' element =  {<CreatePosts update={update} setUpdate={setUpdate} />}></Route>
        <Route path='/AllPosts' element =  {<AllPosts/>}></Route>
        <Route path='/Comment' element = {<Comment/>} ></Route>
        {/* <Route path='/CreatePosts' element = {<CreatePosts/>} ></Route> */}
        <Route path='/UpdatePosts' element = {<UpdatePosts/>} ></Route>
      </Routes>
      </div></BrowserRouter>
  )

}

export default App;
