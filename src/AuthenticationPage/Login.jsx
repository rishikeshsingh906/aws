import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

        // Store data in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userid', data.userid);
        localStorage.setItem('fullname', data.fullname);
        localStorage.setItem('usertype', data.usertype);
        localStorage.setItem('personalemail', data.personalemail);

        // Cache the data
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
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleLogout = () => {
    // Clear session and local storage
    sessionStorage.clear();
    localStorage.clear();
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px' }}>Logout</button>
    </div>
  );
};

export default Login;
