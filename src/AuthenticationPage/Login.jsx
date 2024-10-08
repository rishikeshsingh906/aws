import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIm from "../IMAGES/Google.png"; 
import AppleIm from '../IMAGES/Apple1.png'; 
import FacebookIm from '../IMAGES/Facebook.png'; 
import './Login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://aws.antiai.ltd/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Username: username, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userid', data.userid);
        sessionStorage.setItem('fullname', data.fullname);
        sessionStorage.setItem('usertype', data.usertype);
        sessionStorage.setItem('personalemail', data.personalemail);

        localStorage.setItem('token', data.token);
        localStorage.setItem('userid', data.userid);
        localStorage.setItem('fullname', data.fullname);
        localStorage.setItem('usertype', data.usertype);
        localStorage.setItem('personalemail', data.personalemail);

        const cacheData = {
          token: data.token,
          userid: data.userid,
          fullname: data.fullname,
          usertype: data.usertype,
          personalemail: data.personalemail,
          timestamp: Date.now(),
        };
        localStorage.setItem('cache', JSON.stringify(cacheData));

        onLoginSuccess();
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  
  const handleGoogleLoginSuccess = (response) => {
    console.log(response); 

    
    fetch('https://aws.antiai.ltd/api/google-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: response.credential }),
    })
    .then(res => res.json())
    .then(data => {
    
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('userid', data.userid);
      sessionStorage.setItem('fullname', data.fullname);

      localStorage.setItem('token', data.token);
      localStorage.setItem('userid', data.userid);
      localStorage.setItem('fullname', data.fullname);

      onLoginSuccess();
      navigate('/dashboard');
    })
    .catch(err => {
      setError('Google login failed. Please try again.');
    });
  };

  
  const handleGoogleLoginError = (error) => {
    console.error('Google login failed:', error);
    setError('Google login failed. Please try again.');
  };

  return (
    <div className="login-box">
      <div>
        <h1 className="logo">ANTI AI</h1>
      </div>
      <h2 className="login-title">Connect with Anti-AI</h2>
      <p className="login-subtitle">Sign in to Access Anti-AI Features</p>
      <form className="form1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Sign In</button>
        {error && <p className="login-error">{error}</p>}
      </form>

      <p className="login-forgot">Forget your login details?</p>
      
      <div className="login-divider">
        <span>Or sign in using</span>
      </div>
      
      <div className="login-social-icons">
      
        <GoogleOAuthProvider clientId="78625107766-p997qv80kraufstobrfkeaa5tkmcl16r.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            render={(renderProps) => (
              <img
                src={GoogleIm}
                alt="Google"
                onClick={renderProps.onClick}
                className="social-login-icon"
              />
            )}
          />
        </GoogleOAuthProvider>

        {/* Placeholder links for Apple and Facebook */}
        {/* <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
          <img src={AppleIm} alt="Apple" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIm} alt="Facebook" />
        </a> */}
      </div>

      <p className="login-register">
        New user? <a href="/register">Register now</a> Create an Account
      </p>
    </div>
  );
};

export default Login;
