import React from 'react';
import SettingIm from './IMAGES/setting.jpg'; 
import './Setting.css';

const Settings = () => {
    return (
        <div className='setImg'>
     
            {/* <p>Settings content goes here...</p> */}
            <h1>Setting</h1>
      
      <img className="D_setting" src={SettingIm} alt="Setting Icon" />
      
      
        </div>
    );
};

export default Settings;
