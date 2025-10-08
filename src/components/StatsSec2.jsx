// src/components/StatsSec2.jsx
import React from "react";

const StatsSec2 = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen py-16 px-4"
      style={{ 
        backgroundColor: '#f8fafc',
        backgroundImage: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}
    >
      <div className="container mx-auto text-center max-w-3xl">
        {/* Welcome text with much larger size */}
        <h6 className="text-4xl font-bold mb-6" style={{ color: '#4c51bf' }}>
          <span style={{ color: '#667eea', fontSize: '2.8rem' }}>Welcome to my Online Desk!</span>
        </h6>
        
        {/* Main heading with exact styling from image */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#2d3748' }}>
          Please Feel Free To Explore All My Web<br />Development Services
        </h2> 
        
        {/* Content paragraph with centered text and larger size */}
        <div className="flex justify-center">
          <p className="text-xl mb-10 leading-relaxed max-w-2xl" style={{ color: '#4a5568', lineHeight: '1.8' }}>
            My name is <strong style={{ color: '#2d3748' }}>Muhammad Amman</strong>. I am a freelance web developer in Pakistan, having over 15 years experience in websites projects development, I have worked with many clients from around the world. In my career, I have designed many websites of various companies. During this time I've built up a massive reputation for producing professional work for my clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSec2;