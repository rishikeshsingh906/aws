import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>You are safe</h1>
      <p className="para">We're looking out for your device and data.</p>
      
      <div className="anti-ai-box">
        <h2>AntiAi protect your device</h2>
        <p>"Anti-AI is a tool that protects against the influence and risks of artificial intelligence, safeguarding users from potential risks associated with AI technology."</p>
        <ToggleSwitch />
      </div>
      
      <div className="features-grid">
        <FeatureBox icon="🔒" title="Block Ai tools" />
        <FeatureBox icon="🖥️" title="System Ai Scan" />
        <FeatureBox icon="🔍" title="Vulnerability Ai Scan" />
        <FeatureBox icon="Ai" title="Secure Ai Tools" />
        <FeatureBox icon="👆" title="Id Protection" />
        <FeatureBox icon="⚡" title="Add a quick action" />
      </div>
      
      <p className="para">You can protect 2 more devices with your subscription. <a href="#">Install ANTI AI on a new device</a></p>
    </div>
  );
}

function ToggleSwitch() {
  const [isBlocked, setIsBlocked] = useState(true);

  const toggleBlock = () => {
    setIsBlocked(!isBlocked);
  };

  return (
    <div className="toggle-switch" onClick={toggleBlock}>
      <div className={`switch-handle ${isBlocked ? 'blocked' : 'Unblocked'}`}>
        {isBlocked ? 'Unblock' : 'Block'}
      </div>
      <div className="switch-label">
        {isBlocked ? '' : ''}
      </div>
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
