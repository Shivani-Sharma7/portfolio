// src/components/Experience.js
import React from 'react';
import './Experience.css'; // Import the CSS file for styling

const experiences = [
  {
    title: 'Technical Lead',
    date: '12/2021 – 07/2022',
    company: 'TradeIndia, Noida, India',
    skills: ['Performance Monitoring and Scaling', 'Database Optimization', 'Script Creation and Automation','Code Optimization','Python','Django'],
    description: [
      "Guiding the e-commerce platform's architecture, fostering high-quality solutions from the development team, scripting for enhanced client inquiries through data analysis, and contributing collaboratively to the Scrum process with team members.",
    ],
  },
  {
    title: 'Application Developer',
    date: '09/2019 – 11/2021',
    company: 'TradeIndia, Noida, India',
    skills: ['API Integration','Python','Django','PostgreSQL','ElasticSearch'],
    description: [
      "Crafted seamless connections with Google Shopping, implemented advanced speech recognition, and optimized code for enhanced SEO, ensuring prominent search engine placement. Employed PostgreSQL and Elasticsearch for robust data management, fostering collaborative design implementation on products."
    ],
  },
  {
    title: 'Software Developer',
    date: '07/2018 – 08/2019',
    company: 'Xlpat Labs, Mohali, India',
    skills: ["Tcl/Tk","HTML5","CSS","Bootstrap","Jquery","Javascript","PostgreSQL","Git","Scrum"],
    description: [
      "Led the development of critical ERP system modules, orchestrating front-end and back-end integration. Executed robust testing methodologies, achieving a 95% test case coverage using Postman. Collaborated seamlessly with senior developers for efficient debugging and troubleshooting. Played a pivotal role in documenting comprehensive software design and development."
    ],
  },
];

const Experience = () => {
  const handleClick = (index) => {
    // Handle click event, e.g., set a state to highlight the clicked experience
    console.log(`Experience clicked: ${index}`);
  };

  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item" onClick={() => handleClick(index)}>
          <h3>{experience.title}</h3>
          <p>{experience.date}</p>
          <p>{experience.company}</p>
          <div className="description">
            {experience.description.map((point, i) => (
              <p key={i}>{point}</p>
            ))}
          </div>
          <div className="skills">
            {experience.skills.map((skill, i) => (
              <span key={i} className="skill-button">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
