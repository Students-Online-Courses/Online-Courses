<<<<<<< Updated upstream
import React , {useState , useEffect} from 'react';
import {Routes , Route , BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AllPosts from './components/AllPosts';
import Comment from './components/Comment';
import CreatePosts from './components/CreatePosts';
import UpdatePosts from './components/UpdatePosts';
=======
import Homepage from "./components/HomePage/Homepage";


>>>>>>> Stashed changes


const App =() =>{
  const [data,setData] = useState ([]);
  const [user ,setUser] = useState ([]);
  useEffect (()=>{getPosts()},[]);
  useEffect (()=>{getUsers()},[])
  const getPosts = () => {
    axios.get('http://localhost:3000/posts').then(response => {setData (response.data)})
    .catch (error => {
      console.error(error)
    })
    }
    const getUsers = () => {
      axios.get('http://localhost:3000/users').then(response => {setData (response.data)})
      .catch (error => {
        console.error(error)
      })
      }
  return (
<<<<<<< Updated upstream
    <BrowserRouter><div className='app'>
      <Routes>
        <Route path='/AllPosts' element =  {<AllPosts/>}></Route>
        <Route path='/Comment' element = {<Comment/>} ></Route>
        <Route path='/CreatePosts' element = {<CreatePosts/>} ></Route>
        <Route path='/UpdatePosts' element = {<UpdatePosts/>} ></Route>
      </Routes>
      </div></BrowserRouter>
  )

=======
 <Homepage/>
  );
>>>>>>> Stashed changes
}

export default App;
