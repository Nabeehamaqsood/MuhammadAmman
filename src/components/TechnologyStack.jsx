import React from 'react';
import './TechnologyStack.css';

const TechnologyStack = () => {
  const technologies = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572b6' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777bb4' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47a248' },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/canva.svg', color: '#00c4cc' }
  ];

  return (
    <div className="tech-stack-container">
      <h2 className="tech-stack-title">Technology Stack</h2>
      
      <div className="carousel-container">
        <div className="carousel">
          <div className="logo-track">
            {technologies.map((tech, index) => (
              <div 
                key={`first-${index}`} 
                className="logo-item"
                style={{ '--tech-color': tech.color }}
              >
                <img src={tech.logo} alt={tech.name} className="logo-image" />
                <span className="logo-name">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="logo-track">
            {technologies.map((tech, index) => (
              <div 
                key={`second-${index}`} 
                className="logo-item"
                style={{ '--tech-color': tech.color }}
              >
                <img src={tech.logo} alt={tech.name} className="logo-image" />
                <span className="logo-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;