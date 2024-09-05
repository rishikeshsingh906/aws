import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Container from './Container';
import LoginForm from './AuthenticationPage/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div className="app">
                {isAuthenticated ? (
                    <>
                        <Header />
                        <Container />
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
