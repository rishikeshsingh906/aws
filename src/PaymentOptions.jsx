
import React, { useState } from 'react';

const PaymentOptions = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('credit-card');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onSelect(event.target.value);
    };

    return (
        <div className="payment-options">
            <label>
                <input 
                    type="radio" 
                    value="credit-card" 
                    checked={selectedOption === 'credit-card'}
                    onChange={handleOptionChange} 
                />
                Credit Card
            </label>
            <label>
                <input 
                    type="radio" 
                    value="paypal" 
                    checked={selectedOption === 'paypal'}
                    onChange={handleOptionChange} 
                />
                PayPal
            </label>
            <label>
                <input 
                    type="radio" 
                    value="apple-pay" 
                    checked={selectedOption === 'apple-pay'}
                    onChange={handleOptionChange} 
                />
                Apple Pay
            </label>
        </div>
    );
};

export default PaymentOptions;
