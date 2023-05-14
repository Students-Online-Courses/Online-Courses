import React, { useState } from "react";
import "./Sign_Up.css";
import axios from "axios";

const Sign_Up = ({ showLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [section, setSection] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const signup = () => {
    const user = {
      userFullName: fullName,
      userEmail: email,
      userPassword: password,
      userRole: role,
      userSection: section
      
    };
    axios
      .post("http://localhost:3000/api/users", user)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const sections = [
    "Mathematics",
    "Sciences",
    "Technology",
    "Economics",
    "Computer Sciences",
    "Literature",
  ];

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSectionChange = (event) => {
    const selectedSection = event.target.value;
    setSection(selectedSection);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    let hasErrors = false;
    if (!fullName.trim()) {
      errors.fullName = "Please fill in your full name";
      hasErrors = true;
    }

    if (!email.trim()) {
      errors.email = "Please fill in your email address";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    if (!password) {
      errors.password = "Please fill in your password";
      hasErrors = true;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      hasErrors = true;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
      hasErrors = true;
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
      hasErrors = true;
    }

    if (!role) {
      errors.role = "Please select your role";
      hasErrors = true;
    }

    if (!section) {
      errors.section = "Please select your section";
      hasErrors = true;
    }

    setFormErrors(errors);

    if (!hasErrors) {
      console.log({
        fullName,
        email,
        password,
        role,
        section,
      });
    }
    showLogin(role);
  };

  return (
    <div className='sign_in-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='fullName'>Full Name:</label>
          <input
            type='text'
            id='fullName'
            value={fullName}
            onChange={handleFullNameChange}
            placeholder='Enter your full name'
            required
          />
          {formErrors.fullName && (
            <span className='error'>{formErrors.fullName}</span>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter your e-mail'
            required
          />
          {formErrors.email && (
            <span className='error'>{formErrors.email}</span>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Enter your password'
            required
          />
          {formErrors.password && (
            <span className='error'>{formErrors.password}</span>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder='Cofirm your password'
            required
          />
          {formErrors.confirmPassword && (
            <span className='error'>{formErrors.confirmPassword}</span>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select id='role' value={role} onChange={handleRoleChange} required>
            <option value=''>Select a role</option>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
          </select>
          {formErrors.role && <span className='error'>{formErrors.role}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='section'>Section:</label>
          <select
            id='section'
            value={section}
            onChange={handleSectionChange}
            required>
            <option value=''>Select a section</option>
            {sections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
          {formErrors.section && (
            <span className='error'>{formErrors.section}</span>
          )}
        </div>
        <button type='submit' onClick={signup}>Sign Up</button>
        <p>
          Already have an account?{" "}
          <button type='button' onClick={showLogin}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Sign_Up;
