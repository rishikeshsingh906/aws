
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import P_Dashboard from './P_Dashboard';
import BackgroundAnimation from './BackgroundAnimation';
import "./container.css";

function Container() {
  return (
    <div className='container-comp'>
      <BackgroundAnimation /> 
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/protection" element={<P_Dashboard />} />
          <Route path="/privacy" element={<div>Privacy Content</div>} />
          <Route path="/utilities" element={<div>Utilities Content</div>} />
          <Route path="/notifications" element={<div>Notifications Content</div>} />
          <Route path="/settings" element={<div>Settings Content</div>} />
          <Route path="*" element={<Navigate to="/dashboard" />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default Container;
