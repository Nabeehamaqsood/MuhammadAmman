// src/components/StatsSec2.jsx
import React, { useState, useEffect } from "react";

const StatsSec2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const styles = {
    section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? 'auto' : (isTablet ? '70vh' : '100vh'),
      padding: isMobile ? '40px 20px' : (isTablet ? '60px 30px' : '80px 40px'),
      backgroundColor: '#f8fafc',
      backgroundImage: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      width: '100%',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center'
    },
    welcomeText: {
      fontSize: isMobile ? '1.5rem' : (isTablet ? '2.2rem' : '2.8rem'),
      fontWeight: 'bold',
      marginBottom: isMobile ? '1rem' : (isTablet ? '1.5rem' : '2rem'),
      color: '#667eea',
      lineHeight: '1.2'
    },
    mainHeading: {
      fontSize: isMobile ? '1.5rem' : (isTablet ? '2rem' : '2.5rem'),
      fontWeight: 'bold',
      marginBottom: isMobile ? '1.5rem' : (isTablet ? '2rem' : '3rem'),
      color: '#2d3748',
      lineHeight: '1.3'
    },
    content: {
      fontSize: isMobile ? '0.9rem' : (isTablet ? '1.1rem' : '1.2rem'),
      color: '#4a5568',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'left'
    }
  };

  return (
    <section
      id="about"
      style={styles.section}
    >
      <div style={styles.container}>
        {/* Welcome text */}
        <h6 style={styles.welcomeText}>
          Welcome to my Online Desk!
        </h6>
        
        {/* Main heading */}
        <h2 style={styles.mainHeading}>
          Please Feel Free To Explore All My Web<br />
          Development Services
        </h2> 
        
        {/* Content paragraph */}
        <div style={styles.content}>
          My name is <strong style={{ color: '#2d3748' }}>Nabeeha Maqsood</strong>. I am a software engineer and full stack developer, having experience in website projects development. I have worked with many clients from around the world. In my career, I have designed many websites of various companies. During this time I've built up a massive reputation for producing professional work for my clients.
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .section {
            padding: 30px 15px !important;
          }
          
          .welcomeText {
            font-size: 1.3rem !important;
          }
          
          .mainHeading {
            font-size: 1.3rem !important;
            margin-bottom: 1rem !important;
          }
          
          .content {
            font-size: 0.85rem !important;
            text-align: center !important;
          }
        }

        @media (max-width: 360px) {
          .welcomeText {
            font-size: 1.1rem !important;
          }
          
          .mainHeading {
            font-size: 1.1rem !important;
          }
          
          .content {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSec2;