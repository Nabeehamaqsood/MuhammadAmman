// pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Service data
  const services = {
    'website-development': {
      title: 'Website Development',
      features: ['Custom WordPress Development', 'Responsive Design', 'E-commerce Solutions', 'SEO Optimization', 'Fast Loading Times'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'android-app-development': {
      title: 'Android App Development',
      features: ['Native Android Development', 'Material Design', 'API Integration', 'Play Store Deployment', 'Ongoing Maintenance'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'ios-app-development': {
      title: 'iOS App Development',
      features: ['Native iOS Development', 'Swift Programming', 'App Store Deployment', 'UI/UX Focused', 'Regular Updates'],
      image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'seo-services': {
      title: 'SEO Services',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy', 'Performance Tracking'],
      image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'graphic-designing': {
      title: 'Graphic Designing',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print Design'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      features: ['Social Media Marketing', 'PPC Advertising', 'Email Campaigns', 'Content Strategy', 'Analytics & Reporting'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'management-systems': {
      title: 'Management Systems',
      features: ['Custom CRM Development', 'Inventory Management', 'ERP Solutions', 'Database Design', 'Integration Services'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'ui-ux-designing': {
      title: 'UI/UX Designing',
      features: ['User Research', 'Wireframing', 'Prototyping', 'UI Design', 'Usability Testing'],
      image: 'https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'maintenance': {
      title: 'Maintenance of App and Web',
      features: ['Regular Updates', 'Bug Fixing', 'Security Patches', 'Performance Optimization', 'Backup Solutions'],
      image: 'https://images.unsplash.com/photo-1463194537334-3940784aa69a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="not-found">
        <h2>Service Not Found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <div className="service-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${service.image})` }}>
        <div className="hero-content">
          <h1>{service.title}</h1>
        </div>
      </div>

      {/* Back to Services under banner */}
      <div className="back-link">
        <Link to="/services"><i className="fas fa-arrow-left"></i> Back to Services</Link>
      </div>

      {/* Main Content */}
      <div className="service-content">
        {/* What I Offer in Middle */}
        <section className="offer-section">
          <h2>What I Offer</h2>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}><i className="fas fa-check"></i> {feature}</li>
            ))}
          </ul>
        </section>

        {/* Why Choose Me below */}
        <section className="why-section">
          <h2>Why Choose Me</h2>
          <p>
            With years of experience in {service.title.toLowerCase()}, I deliver high-quality solutions tailored to your specific needs. 
            I focus on understanding your business goals and creating solutions that help you achieve them.
          </p>
        </section>
      </div>

      {/* FontAwesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
    </div>
  );
};

export default ServiceDetail;
