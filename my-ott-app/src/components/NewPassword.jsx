import React, { useState } from 'react';
import './NewPassword.css';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add your password reset logic here
    alert('Password reset successful!');
    navigate('/login');
  };

  return (
    <div className="new-password-container">
      <div className="new-password-box">
        <h2>Let's Create New Password!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
