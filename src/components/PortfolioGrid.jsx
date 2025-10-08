// components/PortfolioGrid.jsx
import React from 'react';

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/p1.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with team collaboration features.",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      image: "/images/p2.jpg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information application with forecasting and location services.",
      tags: ["JavaScript", "API Integration", "CSS3", "Geolocation"],
      image: "/images/p3.jpg"
    }
  ];

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;