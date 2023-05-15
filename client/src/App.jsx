
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Comment from "./components/Comment";
import CreatePosts from "./components/CreatePosts";
import UpdatePosts from "./components/UpdatePosts";

import Homepage from "./components/HomePage/Homepage";
import Login from "./components/Authetification/Login";
import Sign_Up from "./components/Authetification/Sign_Up";
import TeacherView from "./components/TeacherView";
import TeacherCourses from "./components/TeacherCourses";


const App = () => {


  
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/AllPosts' element={<AllPosts />}></Route>
          <Route path='/Comment' element={<Comment />}></Route>
          <Route path='/CreatePosts' element={<CreatePosts />}></Route>
          <Route path='/UpdatePosts' element={<UpdatePosts />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Sign_Up />}></Route>
          <Route path='/allCourses' element={<TeacherView />}></Route>
          <Route path='/myCourses' element={<TeacherCourses />}></Route>
          <Route path='/edit' element={<UpdatePosts />}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;
