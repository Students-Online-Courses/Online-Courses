import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
    } else {
      axios
        .post("http://localhost:3000/api/Oneu", {
          userEmail: email,
          userPassword: password,
        })
        .then((response) => {
          const res = response.data;
          if (res === "Wrong password") alert(res);
          else if (res === "Wrong email ladyBOI") alert(res);
          else {
            navigate("/AllPosts");
          }
  
        })
        .catch((err) => console.log(err));
    }
  };

  const navigate = useNavigate();

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter your email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Enter your password'
          />
        </div>
        <button type='submit' className='submit-btn' onClick={() => {navigate("/CreatePosts")}}>
          Login
        </button>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <p>
          You don't have an account?{" "}
          <button
            type='button'
            className='secondary-btn'
            onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
