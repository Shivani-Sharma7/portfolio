// src/components/RightSection.js
import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import './RightSection.css'; // Import the CSS file

const RightSection = () => {
  return (
    <div className="right-section">
      <About />
      <Experience />
      <Projects />
      <p style={{padding: '40px 50px 0px 50px'}}>Coded in Visual Studio Code by yours truly. Built with ReactJs and Vanilla CSS, deployed with Vercel.</p>
      {/* <Certifications /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default RightSection;
