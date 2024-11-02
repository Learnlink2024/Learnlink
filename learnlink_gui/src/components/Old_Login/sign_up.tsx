import React, { useState } from 'react';
import '../../styles/styles.css'; // Using the same styles from login.tsx
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., API call)
    if (password === confirmPassword) {
      alert('Account created successfully');
      navigate('/login'); // Redirect to login page after successful signup
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="login-container">
      <h2>
        Sign Up for <span className="highlight">Learn</span>
        <span className="highlight-secondary">Link</span>
      </h2>
      <h3>Create your account</h3>
      <form id="signUpForm" onSubmit={handleSignUp}>
        <div className="input-group">
          <PersonIcon className="input-icon" />
          <input
            type="text"
            placeholder="Username" /* The placeholder will have the space like "       Username" */
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <EmailIcon className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <PasswordIcon className="input-icon" />
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
            onClick={togglePasswordVisibility}
            id="togglePassword"
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
        <div className="input-group">
          <PasswordIcon className="input-icon" />
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="or-divider">Or</div>
      <button className="provider-btn google">Sign In with Google</button>
      <p className="signup-text">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
