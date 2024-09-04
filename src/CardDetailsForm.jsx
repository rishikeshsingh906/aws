// src/components/CardDetailsForm.jsx
import React, { useState } from 'react';
import './CardDetailsForm.css';


const CardDetailsForm = ({ onSubmit }) => {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(cardDetails);


    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <label>Card Number</label>
        //         <input 
        //             type="text" 
        //             name="cardNumber" 
        //             value={cardDetails.cardNumber} 
        //             onChange={handleChange} 
        //         />
        //     </div>
        //     <div>
        //         <label>Expiry Date</label>
        //         <input 
        //             type="text" 
        //             name="expiryDate" 
        //             value={cardDetails.expiryDate} 
        //             onChange={handleChange} 
        //         />
        //     </div>
        //     <div>
        //         <label>CVC</label>
        //         <input 
        //             type="text" 
        //             name="cvc" 
        //             value={cardDetails.cvc} 
        //             onChange={handleChange} 
        //         />
        //     </div>
        //     <button type="submit">Confirm Order</button>
        // </form>
        <form onSubmit={handleSubmit} className="card-details-form">
            <div>
                <label>Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Expiry Date</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>CVC</label>
                <input
                    type="text"
                    name="cvc"
                    value={cardDetails.cvc}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Confirm Order</button>
        </form>

    );
};

export default CardDetailsForm;
