import React, { useState } from 'react';
import './ForgotP.css';
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    navigate('/');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      <div className="form-box">
        <p className="form-text">
          Don't worry! Enter your email below and we will <br/> send you a link to change password.
        </p>
        <form onSubmit={handleSubmit}>
          <input className='forgotinput'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit" className="signin-btn">
            Submit
          </button>
          <button type="button" className="signup-btn" onClick={handleSignup}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;