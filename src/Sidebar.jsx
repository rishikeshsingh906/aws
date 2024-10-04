
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import home from './IMAGES/icons/home.jpg';
import Protection from './IMAGES/icons/Protection.png';
import Setting from './IMAGES/icons/Setting.png';
import Logout from './IMAGES/icons/Logout.png';
import Product from './IMAGES/icons/Product.png';

import './Sidebar.css';

const Sidebar = () => {
    const [activeSlide, setActiveSlide] = useState('Dashboard');
    const navigate = useNavigate();

    const handleMenuClick = (slide, route) => {
        setActiveSlide(slide);
        navigate(route);
    };
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }else{

            console.log(localStorage.getItem("token"))
        }
    }, [localStorage.getItem("token")])
    const handleSignOut = () => {
         localStorage.clear();
        console.log("Logout");
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <div className="sidebar">
            <div
                className={`menu-item ${activeSlide === 'Dashboard' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Dashboard', '/dashboard')}
            >
                <span className="icon"> <img src={home}></img> </span>
                <span className="text">Home</span>
            </div>
            <div
                className={`menu-item ${activeSlide === 'Protection' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Protection', '/protection')}
            >
                <span className="icon"><img src={Protection}></img></span>
                <span className="text">Protection</span>
            </div>
            <div
                className={`menu-item ${activeSlide === 'Product' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Product', '/product')}
            >
                <span className="icon"><img src={Product}></img></span>
                <span className="text">Product</span>
            </div>
            <div
                className={`menu-item ${activeSlide === 'Settings' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Settings', '/settings')}
            >
                <span className="icon"><img src={Setting}></img></span>
                <span className="text">Settings</span>
            </div>
            <div
                className={`menu-item ${activeSlide === 'Sign out' ? 'active' : ''}`}
                onClick={handleSignOut}
            >
                <span className="icon"><img src={Logout}></img></span>
                <span className="text">Sign out</span>
            </div>
        </div>
    );
};

export default Sidebar;
