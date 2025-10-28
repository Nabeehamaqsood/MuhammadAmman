// pages/Services.jsx
import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section with Unsplash Image */}
      <div className="banner" style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}></div>
        <div className="banner-content" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Services</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            I have a well-rounded skillset, from design and development to SEO and digital marketing
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        className="container"
        style={{ padding: "1rem 0", maxWidth: "1200px", margin: "0 auto" }}
      >
        <p style={{ margin: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Home
          </Link>{" "}
          / Freelance Services
        </p>
      </div>

      {/* Services Section */}
      <section id="services" className="services" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#333' }}>
            Our Services
          </h2>
          
          <div className="services-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
           
            {/* Website Development Development Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea',
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fab fa-wordpress"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Website Development</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                The websites I develop shows very secure and profitable benefits to my clients because there are huge qualities in Wordpress websites.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/website-development">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* Android App Development Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fab fa-android"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Android App Development</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Professional Android app development services to create high-performance, user-friendly mobile applications for your business needs.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/android-app-development">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* iOS App Development Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fab fa-apple"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>iOS App Development</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Expert iOS app development creating sleek, intuitive applications for iPhones and iPads that deliver exceptional user experiences.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/ios-app-development">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* SEO Services Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea',
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-search"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>SEO Services</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Comprehensive SEO strategies to improve your website's visibility, drive organic traffic, and increase conversions.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/seo-services">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* Graphic Designing Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Graphic Designing</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Creative graphic design solutions including logos, branding materials, marketing collateral, and more.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/graphic-designing">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Digital Marketing</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Strategic digital marketing campaigns including social media marketing, PPC, email marketing, and content marketing.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/digital-marketing">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* Management Systems Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-tasks"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Management Systems</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Custom management systems development including CRM, ERP, inventory management, and other business solutions.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/management-systems">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* UI/UX Designing Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>UI/UX Designing</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                User-centered interface and experience design that enhances usability, engagement, and customer satisfaction.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/ui-ux-designing">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* Maintenance of App and Web Card */}
            <div className="service-card" style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '2rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="service-icon" style={{ 
                fontSize: '3rem', 
                color: '#4a6cf7', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-tools"></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Maintenance of App and Web</h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6', flexGrow: 1 }}>
                Ongoing maintenance and support services to keep your applications and websites running smoothly and securely.
              </p>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <Link to="/service/maintenance">
                  <button style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#4a6cf7', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* FontAwesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
      
      {/* Updated responsive styles */}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .banner h1 {
            font-size: 2rem;
          }
          
          .banner p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .banner {
            height: 250px; /* Even shorter on very small screens */
          }
          
          .banner h1 {
            font-size: 1.8rem;
          }
          
          .banner p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;