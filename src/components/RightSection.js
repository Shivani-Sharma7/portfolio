import React, { useEffect, useState } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import './RightSection.css'; // Import the CSS file
import Header from './Header';

const RightSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="right-section">
      {!isMobile && <Header />}
      <About />
      <Experience />
      <Projects />
      <p style={{ padding: '40px 50px 0px 50px' }}>Coded in Visual Studio Code by yours truly. Built with ReactJs and Vanilla CSS, deployed with Vercel.</p>
      {/* <Certifications /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default RightSection;
