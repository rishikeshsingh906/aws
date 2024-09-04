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
  
      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        console.error(`Server responded with status: ${response.status}`);
        return;
      }
  
      // Try to parse the response as JSON
      const data = await response.json();
      console.log(data.message);
      fetchData();
    } catch (error) {
      console.error('Error closing AI tab:', error);
    }
  };
  

  const fetchData = async () => {
    try {
      // Retrieve the userid from cache
      const cache = JSON.parse(localStorage.getItem('cache'));
      const userid = cache ? cache.userid : null;

      if (userid) {
        // Fetch data from the API using the userid
        const response = await axios.get(`https://aws.antiai.ltd/apiii/liveTabs/${userid}`);
        const res = response.data;
        console.log(res);

        // Cache the fetched data
        localStorage.setItem('dashboardData', JSON.stringify(res));

        // Handle the response
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
    // Fetch data initially
    fetchData();

    // Set up interval to re-fetch data every 10 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 100);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Retrieve data from cache if no data is fetched
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
        <div className="protection-cards">
          {/* {protectionCards.length > 0 ? (
            protectionCards.map((card) => (
              <ProtectionCard
                key={card.id}
                icon={card.icon}
                title={card.url}
                status={card.status}
              />
            ))
          ) : (
            <p>Loading protection status...</p>
          )} */}
        </div>
        <div className="dashboard-links">
          <h1>Dashboard Links</h1>
          {noTabOpen ? (
            <p>No tab is open</p>
          ) : (
            Object.entries(da).length > 0 ? (
              <ul>
                {Object.entries(da).map(([key, value]) => (
                  <li key={key} className="dashboard-link-item">
                    {/* Display the icon */}
                    <div className="icons-container">
                      {iconMap[value] ? (
                        <img src={iconMap[value]} alt={`icon-${key}`} className="dashboard-icon" />
                      ) : (
                        <p>Icon not available</p>
                      )}
                    </div>
                    {/* Block button */}
                    <button className="block-button" onClick={() => closeAI(value)}>Block</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading links...</p>
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
