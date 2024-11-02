import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from '../components/Login/login';
import Login from '../components/Login_Page/login_page';
//import SignUp from '../components/Login/sign_up';
import MainDashboard from '../components/Main_Page/MainDashboard'; // Updated path
import '@fortawesome/fontawesome-free/css/all.min.css';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';

//<Route path="/sign_up" element={<SignUp />} />
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />{' '}
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* New route for Forgot Password */}
      </Routes>
    </Router>
  );
}
