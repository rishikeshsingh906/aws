import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [activeSlide, setActiveSlide] = useState('Dashboard');
    const navigate = useNavigate();

    const handleMenuClick = (slide, route) => {
        setActiveSlide(slide);
        navigate(route);
    };

    return (
        <div className="sidebar">
            <div
                className={`menu-item ${activeSlide === 'Dashboard' ? 'active' : ''} btn`}
                onClick={() => handleMenuClick('Dashboard', '/dashboard')}
            >

              
                <span className="icon">📦</span>
                <span className="text-">Dashboard</span>
              
              
            </div>
            <div
                className={`menu-item ${activeSlide === 'Protection' ? 'active' : ''} btn`}
                onClick={() => handleMenuClick('Protection', '/protection')}
            >
                <span className="icon">🛡️</span>
                <span className="text-">Protection</span>
            </div>
            {/* <div
                className={`menu-item ${activeSlide === 'Privacy' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Privacy', '/privacy')}
            >
                <span className="icon">👁️</span>
                <span className="text-">Privacy</span>
            </div> */}
            {/* <div
                className={`menu-item ${activeSlide === 'Utilities' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Utilities', '/utilities')}
            >
               
                <span className="icon">⚙️</span>
                <span className="text-">Utilities</span>
                
            </div> */}
            {/* <div
                className={`menu-item ${activeSlide === 'Notifications' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Notifications', '/notifications')}
            >
                <span className="icon">🔔</span>
                <span className="text-">Notifications</span>
                <span className="badge">2</span>
            </div> */}
            <div
                className={`menu-item ${activeSlide === 'Settings' ? 'active' : ''} btn`}
                onClick={() => handleMenuClick('Settings', '/settings')}
            >
                <span className="icon">⚙️</span>
                <span className="text-">Settings</span>
            </div>
        </div>
    );
};

export default Sidebar;
