// components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const slides = [
    {
      title: "Transform Your Ideas  ",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      textAlign: "Center",
      backgroundPosition: "center center"
    },
    {
      title: "Code. Design. Create.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      textAlign: "center",
      backgroundPosition: "center center"
    },
    {
      title: "Let's Collaborate!",
      description: "Passionate about solving real-world problems with technology",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      textAlign: "center",
      backgroundPosition: "center center"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [slides.length]);

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
      <div 
        className="hero-slider"
        style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '70vh' : '80vh',
          overflow: 'hidden'
        }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.backgroundPosition,
              backgroundRepeat: 'no-repeat',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div 
              className="slide-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.4)'
              }}
            ></div>
            <div 
              className={`hero-content text-${slide.textAlign}`}
              style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                maxWidth: '700px',
                padding: '0 20px',
                margin: slide.textAlign === 'left' ? '0 0 0 10%' : 
                        slide.textAlign === 'right' ? '0 10% 0 auto' : '0 auto',
                textAlign: isMobile ? 'center' : slide.textAlign
              }}
            >
              <h1 
                className="slide-title"
                style={{
                  fontSize: isMobile ? '2.2rem' : '2.8rem',
                  fontWeight: '700',
                  marginBottom: '1.2rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                {slide.title}
              </h1>
              <p 
                className="slide-description"
                style={{
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  marginBottom: '0',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          className="slider-nav prev" 
          onClick={goToPrevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.7)',
            border: 'none',
            color: 'white',
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            padding: isMobile ? '0.6rem' : '0.8rem',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.3s ease',
            borderRadius: '50%',
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: isMobile ? '1rem' : '1.5rem'
          }}
        >
          &#10094;
        </button>
        <button 
          className="slider-nav next" 
          onClick={goToNextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.7)',
            border: 'none',
            color: 'white',
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            padding: isMobile ? '0.6rem' : '0.8rem',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.3s ease',
            borderRadius: '50%',
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: isMobile ? '1rem' : '1.5rem'
          }}
        >
          &#10095;
        </button>
        
        {/* Dots Indicator */}
        <div 
          className="slider-dots"
          style={{
            position: 'absolute',
            bottom: isMobile ? '1rem' : '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.8rem',
            zIndex: 10
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background 0.3s ease, transform 0.3s ease',
                transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider-nav:hover {
          background: rgba(0, 0, 0, 0.9) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8) !important;
        }

        @media (max-width: 480px) {
          .hero-slider {
            height: 65vh !important;
          }
          
          .slide-title {
            font-size: 1.8rem !important;
          }
          
          .slide-description {
            font-size: 1rem !important;
          }
          
          .slider-dots {
            bottom: 1rem !important;
          }
          
          .slider-nav {
            width: 35px !important;
            height: 35px !important;
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;