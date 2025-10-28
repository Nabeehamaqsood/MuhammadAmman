// components/PortfolioGrid.jsx
import React, { useState, useEffect } from 'react';

const PortfolioGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
    <div 
      className="projects-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isMobile ? '20px' : '30px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 15px' : '0'
      }}
    >
      {projects.map(project => (
        <div 
          key={project.id} 
          className="project-card"
          style={{
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
        >
          <div 
            className="project-image"
            style={{
              height: isMobile ? '180px' : '200px',
              overflow: 'hidden'
            }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s'
              }}
            />
          </div>
          <div 
            className="project-content"
            style={{
              padding: isMobile ? '20px' : '25px'
            }}
          >
            <h3 style={{
              fontSize: isMobile ? '18px' : '20px',
              marginBottom: '15px',
              color: '#2d2e32'
            }}>
              {project.title}
            </h3>
            <p style={{
              color: '#555',
              marginBottom: '15px',
              lineHeight: '1.6',
              fontSize: isMobile ? '14px' : '16px'
            }}>
              {project.description}
            </p>
            <div 
              className="project-tags"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}
            >
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="tag"
                  style={{
                    background: '#f0f0f0',
                    color: '#555',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: isMobile ? '12px' : '14px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div 
              className="project-links"
              style={{
                display: 'flex',
                gap: '15px'
              }}
            >
              <a 
                href="#" 
                className="project-link"
                style={{
                  color: '#5e5dbe',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: isMobile ? '14px' : '16px',
                  transition: 'color 0.3s'
                }}
              >
                Live Demo
              </a>
              <a 
                href="#" 
                className="project-link"
                style={{
                  color: '#5e5dbe',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: isMobile ? '14px' : '16px',
                  transition: 'color 0.3s'
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-link:hover {
          color: #4a49a0;
        }

        @media (max-width: 480px) {
          .projects-grid {
            gap: 15px !important;
            padding: 0 10px !important;
          }
          
          .project-image {
            height: 160px !important;
          }
          
          .project-content {
            padding: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioGrid;