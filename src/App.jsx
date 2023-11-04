// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import Welcome from './pages/welcome';
import SignIn from './pages/sign-in';
import Otp from './pages/otp';
import OtpComponent from './pages/otp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/otp" element={<OtpComponent />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
