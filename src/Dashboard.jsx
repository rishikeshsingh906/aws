// Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>YOU ARE SAFE</h1>
      {/* <p className="para">We're looking out for your device and data.</p> */}
      
      <div className="anti-ai-box">
        <h2>Get Secure With Us</h2>
        <p>"Anti-AI is a tool that protects against the influence and risks of artificial intelligence, safeguarding users from potential risks associated with AI technology."</p>
      </div>
      
      <div className="features-grid">
        <FeatureBox icon="🔒" title="Block Ai tools" />
        <FeatureBox icon="🖥️" title="System Ai Scan" />
        <Link to="/payments">
          <FeatureBox icon="🔍" title="Subscription" />
        </Link>
        <FeatureBox icon="Ai" title="Secure Ai Tools" />
        <FeatureBox icon="👆" title="Id Protection" />
        <FeatureBox icon="⚡" title="Add a quick action" />
      </div>
      
      <p className="para">You can protect 2 more devices with your subscription. <a href="#">Install ANTI AI on a new device</a></p>
    </div>
  );
}

function FeatureBox({ icon, title }) {
  return (
    <div className="feature-box">
      <span className="icon">{icon}</span>
      <p>{title}</p>
    </div>
  );
}

export default Dashboard;
