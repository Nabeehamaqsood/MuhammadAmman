// components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Hi, I'm Nabeeha Maqsood",
      description: "Software Engineer | Full Stack Developer",
      image: "images/1.jpg",
      buttonText: "Explore My Work",
      buttonAction: "portfolio",
      textAlign: "left",
      backgroundPosition: "100% 10%" // Custom position for slide 1
    },
    {
      title: "Code. Design. Create.",
      description: "I build modern web apps with React, Node.js & AI",
      image: "images/2.jpg",
      buttonText: "See Projects",
      buttonAction: "portfolio",
      textAlign: "left",
      backgroundPosition: "100% 10%"// Custom position for slide 2
    },
    {
      title: "Let's Collaborate!",
      description: "Passionate about solving real-world problems with technology",
      image: "images/3.jpg",
      buttonText: "Contact Me",
      buttonAction: "contact",
      textAlign: "center",
      backgroundPosition: "100% 50%" // Custom position for slide 3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(/${slide.image})`,
              backgroundPosition: slide.backgroundPosition // Dynamic position
            }}
          >
            <div className="slide-overlay"></div>
            <div className={`hero-content text-${slide.textAlign}`}>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.description}</p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection(slide.buttonAction)}
                >
                  {slide.buttonText}
                </button>
                {index === 0 && (
                  <button 
                    className="btn btn-secondary"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <button className="slider-nav prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="slider-nav next" onClick={goToNextSlide}>
          &#10095;
        </button>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;