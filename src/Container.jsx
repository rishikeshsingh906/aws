import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import P_Dashboard from './P_Dashboard';
import SettingPage from './SettingPage';
import Payments from './Payments';
// import BackgroundAnimation from './BackgroundAnimation';
import "./container.css";

function Container() {
  return (
    <div className='container-comp'>
      {/* <BackgroundAnimation />  */}
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/protection" element={<P_Dashboard />} />
          <Route path="/settings" element={<SettingPage/>} />
          {/* <Route path="/Product" element={<Product />} /> */}
          <Route path="*" element={<Navigate to="/dashboard" />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default Container;
