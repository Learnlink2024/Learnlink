import React, { useState } from 'react';
import '../../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to sign-up page
  const goToSignUp = () => {
    navigate('/sign_up');
  };
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // You can implement the login logic here
      const response = {
        success: username === 'admin' && password === 'admin',
      }; // Mock login
      if (response.success) {
        alert('Login successful');
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        alert('The username or password is wrong !');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>
        Welcome Back to <span className="highlight">Learn</span>
        <span className="highlight-secondary">Link</span>
      </h2>
      <form id="loginForm" onSubmit={handleLogin}>
        <div className="input-group">
          <PersonIcon className="input-icon" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <PasswordIcon className="input-icon" />
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
            onClick={togglePasswordVisibility}
            id="togglePassword"
            style={{ cursor: 'pointer' }} // Ensure the icon is clickable
          ></i>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
      <p className="signup-text">
        Don't have an account?{' '}
        <span
          onClick={goToSignUp}
          style={{ cursor: 'pointer', color: '#5865f2' }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
