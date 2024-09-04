import React from 'react';

const ProtectionCard = ({ icon, title, status }) => {
  return (
    <div className="protection-card">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="status">{status}</div>
    </div>
  );
};

export default ProtectionCard;
