import React, { useState } from 'react';
import './OtpVerification.css';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your OTP verification logic here
    navigate('/new-password');
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2>OTP Verification</h2>
        <p>This Verification is essential for 2-Step Verification and making your account secure in any case of loss.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="4-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
        </form>
        <p>The OTP has been sent to your personal email. Please do not share it with others.</p>
        <button onClick={() => alert('OTP resent!')}>Resend OTP</button>
      </div>
    </div>
  );
};

export default OtpVerification;
