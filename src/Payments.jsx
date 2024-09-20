import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payments.css';

const Payments = () => {
  const [selectedOption, setSelectedOption] = useState('creditCard');
  const navigate = useNavigate();  // To navigate to the confirmation page

  const handlePaymentChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirmOrder = () => {
    navigate('/ConfirmationPage');  // Navigate to confirmation page on order confirmation
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h1>Payment</h1>

        {/* Payment Method Options */}
        <div className="payment-options">
          <div className={`option-box ${selectedOption === 'creditCard' ? 'active' : ''}`}>
            <input
              type="radio"
              value="creditCard"
              checked={selectedOption === 'creditCard'}
              onChange={handlePaymentChange}
            />
            <label>Credit Card</label>
            {selectedOption === 'creditCard' && (
              <div className="card-input">
                <input type="text" placeholder="Card Number" />
                <div className="card-details">
                  <input type="text" placeholder="MM/YY" />
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
            )}
          </div>

          <div className={`option-box ${selectedOption === 'paypal' ? 'active' : ''}`}>
            <input
              type="radio"
              value="paypal"
              placeholder="PayPal"
              checked={selectedOption === 'paypal'}
              onChange={handlePaymentChange}
            />
            <label>PayPal</label>
          </div>

          <div className={`option-box ${selectedOption === 'applePay' ? 'active' : ''}`}>
            <input
              type="radio"
              value="applePay"
              placeholder="Apple Pay"
              checked={selectedOption === 'applePay'}
              onChange={handlePaymentChange}
            />
            <label>Apple Pay</label>
          </div>
        </div>

        {/* Order total and confirm button */}
        <div className="order-summary">
          <p>Order total: <span>£19.99</span></p>
          <button className="confirm-button" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
