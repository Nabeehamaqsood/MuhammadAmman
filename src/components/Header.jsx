// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        zIndex: 1000,
        padding: isScrolled ? '10px 0' : '15px 0',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {/* Logo */}
        <div className="logo">
          <h1 
            className="site-name"
            style={{
              fontFamily: "'Lobster', cursive",
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: '600',
              color: '#27196b',
              letterSpacing: '2px',
              margin: 0
            }}
          >
           Nabeeha Maqsood
          </h1>
          <p 
            className="tagline"
            style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '400',
              color: '#999',
              marginTop: '4px',
              textAlign: 'center',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Freelancer
          </p>
        </div>

        {/* Navigation */}
        <nav 
          className={`nav ${menuOpen ? 'nav-open' : ''}`}
          style={{
            display: isMobile && !menuOpen ? 'none' : 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '15px' : '20px',
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '100%' : 'auto',
            left: isMobile ? '0' : 'auto',
            width: isMobile ? '100%' : 'auto',
            background: isMobile ? 'white' : 'transparent',
            padding: isMobile ? '20px' : '0',
            boxShadow: isMobile ? '0 5px 10px rgba(0, 0, 0, 0.1)' : 'none'
          }}
        >
          {['/', '/about', '/portfolio', '/contact'].map((path, index) => (
            <Link 
              key={index}
              to={path} 
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#2d2e32',
                fontWeight: '500',
                fontSize: isMobile ? '16px' : '16px',
                transition: 'color 0.3s',
                cursor: 'pointer',
                textAlign: isMobile ? 'center' : 'left',
                padding: isMobile ? '10px' : '0'
              }}
              onMouseOver={(e) => e.target.style.color = '#5e5dbe'}
              onMouseOut={(e) => e.target.style.color = '#2d2e32'}
            >
              {path === '/' ? 'Home' : 
               path === '/about' ? 'About' :
               path === '/portfolio' ? 'Portfolio' : 'Contact'}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            <span style={{
              width: '25px',
              height: '3px',
              background: '#2d2e32',
              margin: '3px 0',
              transition: '0.3s',
              borderRadius: '2px',
              transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: '#2d2e32',
              margin: '3px 0',
              transition: '0.3s',
              borderRadius: '2px',
              opacity: menuOpen ? '0' : '1'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: '#2d2e32',
              margin: '3px 0',
              transition: '0.3s',
              borderRadius: '2px',
              transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
            }}></span>
          </button>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .container {
            padding: 0 15px !important;
          }
          
          .site-name {
            font-size: 20px !important;
          }
          
          .tagline {
            font-size: 10px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;