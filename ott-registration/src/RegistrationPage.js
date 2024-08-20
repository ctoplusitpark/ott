import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setError('You must agree to the terms and privacy policy to register.');
      return;
    }

    try {
      const response = await axios.post('https://api.indrajala.in/api/user/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess('Registration successful!');
        setError('');

        setTimeout(() => {
            window.location.reload();
          }, 3000);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="registration-background">
      <div className="registration-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group input-container">
            <img src="/name-logo.png" alt="Name Icon" className="form-icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group input-container">
            <img src="/email-logo.png" alt="Email Icon" className="form-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group input-container">
            <img src="/password-logo.png" alt="Password Icon" className="form-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Checkbox for agreeing to terms */}
          <div className="form-group checkbox-container">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agree">
              I agree to the terms of use and acknowledge the privacy policy.
            </label>
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
