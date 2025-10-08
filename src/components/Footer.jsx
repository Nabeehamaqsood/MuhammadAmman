// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { Mail, Phone, MessageSquare, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Muhammad Amman</h4>
            <p>Experienced web designer and developer providing awesome websites since 2005.</p>
          </div>
          
          {/* ✅ Use Link instead of <a> */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web Design</Link></li>
              <li><Link to="/services">WordPress Development</Link></li>
              <li><Link to="/services">E-commerce Solutions</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>
                <Mail className="icon" /> ammanm0789@gmail.com
              </li>
              <li>
                <Phone className="icon" /> +923295425413
              </li>
              <li>
                <Clock className="icon" /> Mon-Fri 07am-07pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nabeeha Maqsood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
