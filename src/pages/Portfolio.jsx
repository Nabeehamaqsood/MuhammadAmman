// pages/Portfolio.jsx
import React from 'react';
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "/images/Apexium.jpg",
      title: "Apexium Technologies",
      link: "https://aperxiums-technologies.vercel.app/",
      
    },
    {
      id: 2,
      image: "/images/shopping.jpg",
      title: "Ecomerce Website",
      link: "https://shopping-by-appexium.vercel.app/",
     
    },
    {
      id: 3,
      image: "/images/coursee.jpg",
      title: "Languages course",
      link: "https://course-by-apexium.vercel.app/",
    
    },
   
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="portfolio-page">
      {/* Banner Section with Unsplash Image */}
      <div className="banner" style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Portfolio</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            Explore my creative work and successful projects across various industries
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
          / Portfolio
        </p>
      </div>

      {/* Content Section 
      <section className="portfolio-content" style={{ padding: "4rem 1rem", backgroundColor: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
            What We Build
          </h2>
          <p style={{ color: "#374151", lineHeight: "1.6" }}>
            From cutting-edge apps to enterprise platforms, explore some of our most
            impactful projects designed to transform businesses.
          </p>
        </div>
      </section>
 */}
      {/* Projects Showcase Section */}
      <section className="projects-showcase" style={{ padding: "4rem 1rem", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "1.875rem", 
            fontWeight: "bold", 
            textAlign: "center", 
            color: "#111827",
            marginBottom: "2.5rem"
          }}>
            Featured Projects
          </h2>
          
          <div className="projects-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card" 
                onClick={() => handleProjectClick(project.link)}
                style={{
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  border: "2px solid #e5e7eb",
                  cursor: "pointer",
                  position: "relative"
                }}
              >
                <div style={{
                  width: "100%",
                  height: "16rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f3f4f6",
                  overflow: "hidden",
                  padding: "1rem"
                }}>
                  <div style={{
                    width: "100%",
                    height: "100%",
                    border: "4px solid #d1d5db",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    position: "relative"
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                      }}
                    />
                    {/* Hover Overlay */}
                    <div className="project-overlay" style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      color: "white",
                      padding: "1rem",
                      textAlign: "center"
                    }}>
                      <h3 style={{ 
                        fontSize: "1.25rem", 
                        fontWeight: "bold", 
                        marginBottom: "0.5rem" 
                      }}>
                        {project.title}
                      </h3>
                      <p style={{ 
                        fontSize: "0.875rem", 
                        marginBottom: "1rem",
                        color: "#d1d5db"
                      }}>
                        {project.description}
                      </p>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        padding: "0.5rem 1rem",
                        borderRadius: "2rem",
                        border: "1px solid rgba(255, 255, 255, 0.3)"
                      }}>
                        <span style={{ fontSize: "0.75rem" }}>🔗</span>
                        <span style={{ 
                          fontSize: "0.75rem", 
                          fontWeight: "500",
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }}>
                          {project.link.replace('https://', '')}
                        </span>
                      </div>
                      <p style={{
                        fontSize: "0.75rem",
                        color: "#9ca3af",
                        marginTop: "1rem",
                        fontStyle: "italic"
                      }}>
                        Click to visit project
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Project Info (Visible by default) */}
                <div style={{
                  padding: "1.5rem"
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem"
                  }}>
                    <h3 style={{ 
                      fontSize: "1.125rem", 
                      fontWeight: "600", 
                      color: "#111827",
                      margin: 0
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "#6b7280",
                      backgroundColor: "#f3f4f6",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.375rem"
                    }}>
                      {project.category}
                    </span>
                  </div>
                  <p style={{ 
                    fontSize: "0.875rem", 
                    color: "#6b7280",
                    margin: 0,
                    lineHeight: "1.5"
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    padding: "0.75rem",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "0.5rem",
                    border: "1px solid #e9ecef"
                  }}>
                    <span style={{ fontSize: "0.75rem" }}>🌐</span>
                    <span style={{ 
                      fontSize: "0.75rem", 
                      color: "#495057",
                      fontWeight: "500"
                    }}>
                      Live Project
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .project-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
          }

          .project-card:hover .project-overlay {
            opacity: 1;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          @media (max-width: 768px) {
            .banner h1 {
              font-size: 2rem !important;
            }

            .banner p {
              font-size: 1.2rem !important;
            }

            .projects-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }

            .project-card div {
              height: 14rem !important;
            }
          }

          @media (max-width: 480px) {
            .banner {
              height: 50vh !important;
            }

            .banner h1 {
              font-size: 1.75rem !important;
            }

            .banner p {
              font-size: 1rem !important;
            }

            .project-card div {
              height: 12rem !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Portfolio;