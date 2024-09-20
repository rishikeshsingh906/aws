import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <div className="confirmation-message">
          <div className="confirmation-icon">✔</div>
          <h2>Order Confirmed</h2>
          <p>Thank you for your order. You will receive an email confirmation shortly.</p>
          <Link to="/" className="continue-button">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
