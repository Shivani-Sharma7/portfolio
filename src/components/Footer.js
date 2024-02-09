// src/components/LeftSection.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
      <div className="footer">
        <a href="https://github.com/Shivani-Sharma7" className='social_site'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivani-sharma-3a3a01112/" className='social_site'><FaLinkedin /></a>
        <a href="mailto:Shivani.lpu71096@gmail.com" className='social_site'><FaEnvelope /></a>
      </div>
  );
};

export default Footer;
