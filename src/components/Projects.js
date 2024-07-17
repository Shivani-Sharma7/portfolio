// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Scotchiees Restaurant Website',
    link: '',
    skills: ['ReactJS', 'MongoDb', 'Node.js', 'Express,js'],
    description: [
      "Scotchiees, a dynamic full-stack software solution, seamlessly integrates an intuitive user interface for customers to browse and order from a diverse menu. Leveraging robust backend systems, it efficiently manages user authentication, real-time menu updates, and secure transactions, providing a delightful and secure online dining experience."
    ]
  },
  {
    title: 'Online Quiz App',
    link: 'https://github.com/Shivani-Sharma7/onlinequizportal',
    skills: ['Python', 'Django', 'CSS', 'HTML5', 'Jinja Templates', 'Django ORM'],
    description: [
      "Developed and implemented a user-friendly login and signup page for student registration, streamlining the onboarding process.Implemented a comprehensive quiz feature across multiple modules, providing users with real-time performance feedback on a centralized results page"
    ]
  }
];

const Projects = () => {
  const handleClick = (index) => {
    // Handle click event, e.g., set a state to highlight the clicked project
    console.log(`project clicked: ${index}`);
  };

  return (
    <div id="project" className="project">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item" onClick={() => handleClick(index)}>
          <h3><a href={project.link} style={{color:'white'}}>{project.title}</a></h3>
          <p>{project.date}</p>
          <p>{project.company}</p>
          <div className="description">
            {project.description.map((point, i) => (
              <p key={i}>{point}</p>
            ))}
          </div>
          <div className="skills">
            {project.skills.map((skill, i) => (
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



export default Projects;


