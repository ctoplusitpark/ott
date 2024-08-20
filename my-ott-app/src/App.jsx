import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register.jsx';
import OtpVerification from './components/OtpVerification.jsx';
import NewPassword from './components/NewPassword.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/new-password" element={<NewPassword />} />
    </Routes>
  </Router>
);

export default App;
