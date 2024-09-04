import React, { useState, useEffect } from 'react';
import logo from './IMAGES/logo.png';
import './Header.css';
import PaymentOptions from './PaymentOptions';
import CardDetailsForm from './CardDetailsForm';
import ConfirmationScreen from './ConfirmationScreen';

const Header = ({ onUpgradeClick }) => {
    const [showPayment, setShowPayment] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [username, setUsername] = useState('Rishikesh Singh'); // Default value

    useEffect(() => {
        // Retrieve cached data
        const cache = JSON.parse(localStorage.getItem('cache'));
        if (cache && cache.fullname) {
            setUsername(cache.fullname); // Update the username with the cached fullname
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

    const handleClose = () => {
        setShowPayment(false);
    };

    return (
        <header className="header">
            <div className="left">
                <img src={logo} alt="logo" className="logo" />
                <h1>ANTI AI</h1>
            </div>
            <div className="center">
                <button className="upgrade-btn" onClick={handleClickUpgrade}>Upgrade</button>
                <button className="view-options-btn">View options</button>
            </div>
            <div className="right">
                <span className="user-name">{username}</span> {/* Display the updated username */}
                <button className="close-btn">X</button>
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
