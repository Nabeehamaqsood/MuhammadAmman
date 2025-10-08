import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 245,
      label: "Happy Customers around Globe",
      icon: "bi-people",
    },
    {
      number: 450,
      label: "Websites, Apps & Projects",
      icon: "bi-code-slash",
    },
    {
      number: 15,
      label: "Years of Freelance Experience",
      icon: "bi-clock-history",
    },
    {
      number: 30,
      label: "Languages, Software & Technologies",
      icon: "bi-tools",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Inline styles
  const styles = {
    statsSection: {
      width: "100%",
      backgroundColor: "#f4f4f4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
        marginTop: "-100px", 
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px",
      width: "100%",
      maxWidth: "1200px",
    },
    statItem: {
      display: "flex",
      alignItems: "center", // icon + text vertically aligned
      gap: "20px", // icon aur text ke beech space
    },
    statIcon: {
      fontSize: "3.5rem",
      color: "#007bff", // blue icon
      flexShrink: 0,
    },
    statText: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    statNumber: {
      fontSize: "2.2rem",
      fontWeight: 700,
      color: "#333",
      fontFamily: "Arial, sans-serif",
      marginBottom: "5px",
    },
    statLabel: {
      fontSize: "1rem",
      color: "#666",
      fontWeight: 500,
      lineHeight: 1.4,
    },
  };

  return (
    <section style={styles.statsSection} ref={sectionRef}>
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statItem}>
            <i className={`bi ${stat.icon}`} style={styles.statIcon}></i>

            <div style={styles.statText}>
              <div style={styles.statNumber}>
                {countersVisible ? <Counter target={stat.number} /> : 0}
              </div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Counter component for animated numbers
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target > 0) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      const stepTime = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [target]);

  return <span>{count}</span>;
};

export default StatsSection;
