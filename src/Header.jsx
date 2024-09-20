import React, { useState, useEffect } from 'react';
import logo from './IMAGES/logo.png';
import './Header.css';
import PaymentOptions from './PaymentOptions';
import CardDetailsForm from './CardDetailsForm';
import profileIcon from './IMAGES/avtar.png'
// import ConfirmationScreen from './ConfirmationScreen';
import { Link } from 'react-router-dom';  

const Header = ({ onUpgradeClick }) => {
    const [showPayment, setShowPayment] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [username, setUsername] = useState('Rishikesh Singh'); 

    useEffect(() => {
       
        const cache = JSON.parse(localStorage.getItem('cache'));
        if (cache && cache.fullname) {
            
            setUsername(cache.fullname); 
        }
    }, []);

    const handlePaymentMethodSelect = (method) => {
        console.log('Selected payment method:', method);
        setShowPayment(false);
    };

    const handleOrderSubmit = (details) => {
        console.log('Order details:', details);
        setOrderConfirmed(true);
    };

    const handleClickUpgrade = () => {
        setShowPayment(true); 
    };

    const downExtension = () => {
        window.open('https://drive.google.com/drive/folders/1xY052cxD33XiymzXxqr0s8o7Vh0Ldwmz?usp=sharing', '_blank');
    };

    const handleClose = () => {
        setShowPayment(false);
    };

    return (
        <header className="header">
            <div className="left">
                <img src={logo} alt="logo" className="logo2" />
                <h1>ANTI AI</h1>
            </div>
            <div className="center">
                <button className="upgrade-btn" >Upgrade</button>
                <button className="view-options-btn" onClick={downExtension}>Download</button>
            </div>
            <div className="right">
                {/* <span className="user-name">{username}</span>  */}
                <span className="icon">🔔</span> 
                <img src={profileIcon} alt="Profile" className="profile-icon" style={{ width: "40px",
        height: "37px",
        borderRadius: "50%", 
        marginRight: "10px"}} /> 
                <button className="close-btn"></button>
            </div>
            {showPayment && (
                <div className="modal-overlay">
                    <div className="payment-dashboard">
                        {!orderConfirmed ? (
                            <div className="payment-section">
                                <PaymentOptions onSelect={handlePaymentMethodSelect} />
                                <CardDetailsForm onSubmit={handleOrderSubmit} />
                            </div>
                        ) : (
                            <div className="confirmation-screen">
                                <h2>Order Confirmed</h2>
                                <p>Your order has been placed successfully.</p>
                                <button onClick={handleClose}>Continue Shopping</button>
                                <button>Share</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
