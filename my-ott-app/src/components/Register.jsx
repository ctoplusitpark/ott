import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('Please agree to the terms and privacy policy.');
      return;
    }
    
    try {
      await axios.post('https://api.indrajala.in/api/user/register', { name, email, password });
      navigate('/otp-verification');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Let's Sign You Up!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I agree to the terms of use and acknowledge the privacy policy
          </label>
          <button type="submit">Create New Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
