// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Dashboard from './Dashboard';
// import PaymentOptions from './PaymentOptions';
// import CardDetailsForm from './CardDetailsForm';
// import ConfirmationScreen from './ConfirmationScreen'; // Correct import
// import P_Dashboard from './P_Dashboard';

// const App = () => {
//     const [showPayment, setShowPayment] = useState(false);
//     const [orderConfirmed, setOrderConfirmed] = useState(false);

//     const handleUpgradeClick = () => {
//         setShowPayment(true);
//         setOrderConfirmed(false);
//     };

//     const handlePaymentMethodSelect = (method) => {
//         console.log('Selected payment method:', method);
//     };

//     const handleOrderSubmit = (details) => {
//         console.log('Order details:', details);
//         setOrderConfirmed(true);
//         setShowPayment(false);
//     };

//     return (
//         <Router>
//             <div className="app">
//                 <Header onUpgradeClick={handleUpgradeClick} />
//                 <Sidebar />
//                 <Routes>

//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/protection" element={<P_Dashboard />} />
//                     <Route path="/privacy" element={<div>Privacy Content</div>} />
//                     <Route path="/utilities" element={<div>Utilities Content</div>} />
//                     <Route path="/notifications" element={<div>Notifications Content</div>} />
//                     <Route path="/settings" element={<div>Settings Content</div>} />
//                 </Routes>
//                 {/* {showPayment && (
//                     <div className="payment-dashboard">
//                         {!orderConfirmed ? (
//                             <div className="payment-section">
//                                 <PaymentOptions onSelect={handlePaymentMethodSelect} />
//                                 <CardDetailsForm onSubmit={handleOrderSubmit} />
//                             </div>
//                         ) : (
//                             <ConfirmationScreen />
//                         )}
//                     </div>
//                 )} */}
                
//             </div>
//         </Router>
//     );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
// import PaymentOptions from './PaymentOptions';
// import CardDetailsForm from './CardDetailsForm';
// import ConfirmationScreen from './ConfirmationScreen';
import P_Dashboard from './P_Dashboard';
import LoginForm from './AuthenticationPage/Login';

const App = () => {
    const [showPayment, setShowPayment] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

    const handleUpgradeClick = () => {
        setShowPayment(true);
        setOrderConfirmed(false);
    };

    const handlePaymentMethodSelect = (method) => {
        console.log('Selected payment method:', method);
    };

    const handleOrderSubmit = (details) => {
        console.log('Order details:', details);
        setOrderConfirmed(true);
        setShowPayment(false);
    };

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div className="app">
                {isAuthenticated ? (
                    <>
                        <Header onUpgradeClick={handleUpgradeClick} />
                        <Sidebar />
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/protection" element={<P_Dashboard />} />
                            <Route path="/privacy" element={<div>Privacy Content</div>} />
                            <Route path="/utilities" element={<div>Utilities Content</div>} />
                            <Route path="/notifications" element={<div>Notifications Content</div>} />
                            <Route path="/settings" element={<div>Settings Content</div>} />
                            <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Default route */}
                        </Routes>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
                        <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect all other routes to login */}
                    </Routes>
                )}
                
                {/* {showPayment && (
                    <div className="payment-dashboard">
                        {!orderConfirmed ? (
                            <div className="payment-section">
                                <PaymentOptions onSelect={handlePaymentMethodSelect} />
                                <CardDetailsForm onSubmit={handleOrderSubmit} />
                            </div>
                        ) : (
                            <ConfirmationScreen />
                        )}
                    </div>
                )} */}
                
            </div>
        </Router>
    );
};

export default App;
