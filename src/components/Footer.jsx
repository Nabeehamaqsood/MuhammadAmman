// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// You need to import these icon components - example using react-icons
import { MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';

const Footer = () => {
  return (
    <footer 
      className="footer"
      style={{
        padding: '40px 20px',
        backgroundColor: '#2d2e32',
        color: 'white',
        width: '100%'
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <div 
          className="footer-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '30px'
          }}
        >
          <div className="footer-section">
            <h4 style={{ marginBottom: '15px', color: '#5e5dbe' }}>Nabeeha Maqsood</h4>
            <p style={{ lineHeight: '1.6', color: '#ccc' }}>
              Experienced web designer and developer providing awesome websites since 2025.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 style={{ marginBottom: '15px', color: '#5e5dbe' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['/', '/about', '/portfolio', '/contact'].map((path, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link 
                    to={path} 
                    style={{ 
                      color: '#ccc', 
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#5e5dbe'}
                    onMouseOut={(e) => e.target.style.color = '#ccc'}
                  >
                    {path === '/' ? 'Home' : 
                     path === '/about' ? 'About' :
                     path === '/portfolio' ? 'Portfolio' : 'Contact'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
    {/*    <div className="footer-section">
            <h4 style={{ marginBottom: '15px', color: '#5e5dbe' }}>Services</h4>
            <u style={{ listStyle: 'none', padding: 0 }}>
              {['Web Design', 'WordPress Development', 'E-commerce Solutions', 'Digital Marketing'].map((service, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link 
                    to="/services"
                    style={{ 
                      color: '#ccc', 
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#5e5dbe'}
                    onMouseOut={(e) => e.target.style.color = '#ccc'}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </u
          </div> 
          
          <div className="footer-section">
            <h4 style={{ marginBottom: '15px', color: '#5e5dbe' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', color: '#ccc' }}>
                <MdEmail style={{ marginRight: '8px' }} />
                ammanm0789@gmail.com
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', color: '#ccc' }}>
                <MdPhone style={{ marginRight: '8px' }} />
                +923295425413
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', color: '#ccc' }}>
                <MdAccessTime style={{ marginRight: '8px' }} />
                Mon-Fri 07am-07pm
              </li>
            </ul>
          </div>*/}
        </div>
        
        <div 
          className="footer-bottom"
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid #444',
            color: '#999'
          }}
        >
          <p>&copy; {new Date().getFullYear()} Nabeeha Maqsood. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer {
            padding: 30px 15px !important;
          }
          
          .footer-container {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
            text-align: center;
          }
          
          .footer-section ul li {
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 25px 10px !important;
          }
          
          .footer-container {
            gap: 20px !important;
          }
          
          h4 {
            font-size: 16px !important;
          }
          
          p, li {
            font-size: 14px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;