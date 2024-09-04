// src/App.jsx
import React, { useState } from 'react';
import PaymentOptions from './PaymentOptions';
import CardDetailsForm from './CardDetailsForm';
import ConfirmationScreen from './ConfirmationScreen';

const App = () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
    };

    const handleOrderSubmit = (details) => {
        // Handle order submission (e.g., API call)
        console.log('Order details:', details);
        setOrderConfirmed(true);
    };

    return (
        <div className="app">
            {!orderConfirmed ? (
                <div className="payment-section">
                    <PaymentOptions onSelect={handlePaymentMethodSelect} />
                    {paymentMethod === 'credit-card' && <CardDetailsForm onSubmit={handleOrderSubmit} />}
                </div>
            ) : (
                <ConfirmationScreen />
            )}
        </div>
    );
};

export default App;
