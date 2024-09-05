import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectionCard from './ProtectionCard';
import './P_Dashboard.css';
import ChatGPTIcon from './IMAGES/icons/ChatGPT.png';
import ClaudeIcon from './IMAGES/icons/Claud.png';
import Gemini from './IMAGES/icons/Gimini.png';
// Add more imports for other icons if needed

const P_Dashboard = () => {
  const [protectionCards, setProtectionCards] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('a few seconds ago');
  const [da, setDa] = useState({});
  const [noTabOpen, setNoTabOpen] = useState(false);
  const [closeAllColor, setCloseAllColor] = useState(false);  // New state for button color

  const iconMap = {
    "https://chatgpt.com": ChatGPTIcon,
    "https://claude.ai": ClaudeIcon,
    "https://gemini.google.com": Gemini,
  };

  const closeAI = async (value) => {
    try {
      const response = await fetch('https://aws.antiai.ltd/apiii/closeTab/${userid}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "url": value }),
      });
  
      if (!response.ok) {
        console.error(`Server responded with status: ${response.status}`);
        return;
      }
  
      const data = await response.json();
      console.log(data.message);
      fetchData();
    } catch (error) {
      console.error('Error closing AI tab:', error);
    }
  };

  const closeAllTabs = async () => {
    try {
      const response = await fetch('https://aws.antiai.ltd/apiii/closeLiveTabs/SrYPkqI1Dr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "close": true }),
      });
  
      if (!response.ok) {
        console.error(`Server responded with status: ${response.status}`);
        return;
      }
  
      const data = await response.json();
      console.log(data.message);
      setCloseAllColor(true);  // Toggle color state
      fetchData();  
    } catch (error) {
      console.error('Error closing all live tabs:', error);
    }
  };

  const fetchData = async () => {
    try {
      const cache = JSON.parse(localStorage.getItem('cache'));
      const userid = cache ? cache.userid : null;

      if (userid) {
        const response = await axios.get(`https://aws.antiai.ltd/apiii/liveTabs/${userid}`);
        const res = response.data;
        console.log(res);

        localStorage.setItem('dashboardData', JSON.stringify(res));

        if (res.message) {
          setNoTabOpen(res.message === "currently no tab is open");
          setProtectionCards([]);
          setDa({});
        } else {
          const cardsArray = Object.entries(res).map(([id, url]) => ({
            id,
            icon: iconMap[url] || null,
            url,
          }));
          setProtectionCards(cardsArray);
          setDa(res);
          setNoTabOpen(false);
        }
        setLastUpdated(res.lastUpdated || 'a few seconds ago');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem('dashboardData'));
    if (cachedData) {
      if (cachedData.message) {
        setNoTabOpen(cachedData.message === "currently no tab is open");
      } else {
        const cardsArray = Object.entries(cachedData).map(([id, url]) => ({
          id,
          icon: iconMap[url] || null,
          url,
        }));
        setProtectionCards(cardsArray);
        setDa(cachedData);
        setNoTabOpen(false);
      }
      setLastUpdated(cachedData.lastUpdated || 'a few seconds ago');
    }
  }, [noTabOpen]);

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>You are fully protected</h2>
        
        {/* Updated button with dynamic class based on state */}
        <button 
          className={`close-all-button ${closeAllColor ? 'green' : 'red'}`} 
          onClick={closeAllTabs}
        >
         Terminate AI Tabs
        </button>

        <div className="protection-cards">
          {/* Protection Cards here */}
        </div>

        <div className="dashboard-links">
          <h1>Active AI Tabs</h1>
          {noTabOpen ? (
            <p>No tab is open</p>
          ) : (
            Object.entries(da).length > 0 ? (
              <ul>
                {Object.entries(da).map(([key, value]) => (
                  <li key={key} className="dashboard-link-item">
                    <div className="icons-container">
                      {iconMap[value] ? (
                        <img src={iconMap[value]} alt={`icon-${key}`} className="dashboard-icon" />
                      ) : (
                        <p>Icon not available</p>
                      )}
                    </div>
                    <button className="block-button" onClick={() => closeAI(value)}>Block</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading AI Tabs ...</p>
            )
          )}
        </div>

        <div className="scan-status">
          <p>You’re up to date</p>
          <p>Last updated: {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default P_Dashboard;
