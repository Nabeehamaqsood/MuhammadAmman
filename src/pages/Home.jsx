// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import StatsSec2 from "../components/StatsSec2"; 

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsSection />
      <StatsSec2 /> {/* Updated to match the new component name */}
    </main>
  );
};

export default Home;