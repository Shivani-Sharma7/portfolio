// src/components/LeftSection.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './LeftSection.css';
import Header from './Header';

const LeftSection = () => {
  return (
    <div className="left-section">
      <Header></Header>
      <div className="section-links">
        <a href="#about">About</a>
        <span className="bar-sign">|</span> <a href="#experience">Experience</a>
        <span className="bar-sign">|</span> <a href="#project">Projects</a>
      </div>
      <div className="footer">
        <a href="https://github.com/Shivani-Sharma7" className='social_site'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivani-sharma-3a3a01112/" className='social_site'><FaLinkedin /></a>
        <a href="mailto:Shivani.lpu71096@gmail.com" className='social_site'><FaEnvelope /></a>
      </div>
    </div>
  );
};

export default LeftSection;
