// pages/About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="about" className="about-section">
      {/* Full-width header banner */}
      <div className="about-banner">
        <div className="banner-overlay">
          <h1>Nabeeha Maqsood</h1>
          <p>WEB DEVELOPER</p>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="about-nav">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/about">About</Link>
        </div>
      </div>

      {/* Main content with image and text */}
      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="/images/Nabeeha.jpg"
                alt="Nabeeha "
              />
            </div>

            <div className="about-text">
              <h3>About Nabeeha</h3>
              <p>
                I am an <span className="text-highlight">experienced web designer and developer</span> 
                 providing professional websites in Pakistan since 2025. With a 
                <span className="text-highlight"> </span>, my journey began 
                in the traditional IT sector. I completed my foundational studies in Computer Science from the prestigious <span className="text-highlight">FAST National University in Karachi</span>.
              </p>
              <p>
                I specialize in building <span className="text-highlight">marketing-focused websites</span> 
                that help clients stand out. My work blends technical expertise with 
                strategic thinking to support business growth.
              </p>
              <p>
                Beyond development, I value early discussions to understand your 
                goals and guide you toward the best solutions. I especially enjoy 
                designing effective website architecture.
              </p>
            </div>

            <div className="divider"></div>
            <div className="contact-prompt">
              <button className="contact-button" onClick={goToContact}>
                GET IN TOUCH!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;