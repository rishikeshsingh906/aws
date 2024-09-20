import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome, you are authenticated!</h1>
      <button onClick={handleLogout} style={{ padding: '10px', marginTop: '20px' }}>Logout</button>
    </div>
  );
};

export default Auth;
