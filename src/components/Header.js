// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src='/images/picture.png' alt="Profile" className="profile-image" />
      <h1>Shivani Sharma</h1>
      <p>Full Stack Software Developer</p>
    </div>
  );
};

export default Header;
