import React, { useState } from 'react';
import { Cog, HelpCircle } from 'lucide-react';
import './Setting.css';

const SettingPage = () => {
  const [updatePreference, setUpdatePreference] = useState('daily');
  const [notifications, setNotifications] = useState({
    enable: true,
    push: true,
    email: true,
  });
  const [autoRenew, setAutoRenew] = useState(true);

  const handleUpdatePreference = (value) => {
    setUpdatePreference(value);
  };

  const handleToggle = (key) => {
    if (key === 'autoRenew') {
      setAutoRenew(!autoRenew);
    } else {
      setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  return (
    <div className="setting-container">
      <h1 className="setting-title">
        <Cog className="icon" />
        Setting
      </h1>

      <div className="setting-section">
        <h2>Update Preference</h2>
        <div className="radio-group">
          {['Daily', 'Weekly', 'Monthly'].map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="updatePreference"
                value={option.toLowerCase()}
                checked={updatePreference === option.toLowerCase()}
                onChange={() => handleUpdatePreference(option.toLowerCase())}
              />
              <span className="radio-button"></span>
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="setting-section">
        <h2>App Notifications</h2>
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="toggle-item">
            <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Notifications</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleToggle(key)}
              />
              <span className="slider"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="setting-section">
        <h2>Manage Subscriptions</h2>
        <div className="toggle-item">
          <span>Auto-Renew</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={autoRenew}
              onChange={() => handleToggle('autoRenew')}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="plan-upgrade">
          <span>Current Plan Procedure</span>
          <button className="upgrade-button">Upgrade Plan</button>
        </div>
      </div>

      <div className="footer">
        <button className="footer-button">
          <Cog className="icon" />
          Advance Setting
        </button>
        <button className="footer-button help">
          <HelpCircle className="icon" />
          Get Help?
        </button>
      </div>
    </div>
  );
};

export default SettingPage;