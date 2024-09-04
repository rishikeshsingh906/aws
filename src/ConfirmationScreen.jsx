// src/components/ConfirmationScreen.jsx
import React from 'react';

const ConfirmationScreen = () => {
    const handleClose = ()=> {
        
    }
    return (

        <div className="confirmation-screen">
            <h2>Order Confirmed</h2>
            <p>Your order has been placed successfully.</p>
            <button onClick={handleClose}>Continue Shopping</button>
            <button>Share</button>
        </div>
    );
};

export default ConfirmationScreen;
