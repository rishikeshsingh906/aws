import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <section className="protection-section">
      <h2>AntiAi protect your device</h2>
      <p>
        "Anti-AI is a tool that protects against the influence and risks of artificial intelligence, safeguarding users from potential risks associated with AI technology."
      </p>
      <div className="toggle-buttons">
        <button className="toggle-button">Block</button>
        <button className="toggle-button active">Blocked</button>
      </div>
    </section>
  );
};

export default Section;
