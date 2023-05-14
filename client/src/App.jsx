import React, { useState } from 'react';
import Login from './components/Authetification/Login';
import Sign_Up from './components/Authetification/Sign_Up';

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [role, setRole] = useState("");

  const handleShowSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
    setRole(role);
  };

  const handleShowLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
    setRole(role);
  };

  return (
    <div>
      {showLogin && <Login showSignUp={handleShowSignUp} />}
      {showSignUp && <Sign_Up showLogin={handleShowLogin} role={role} /> }
    </div>
  );
}

export default App;
