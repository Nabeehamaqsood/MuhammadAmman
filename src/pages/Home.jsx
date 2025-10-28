// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";

import StatsSec2 from "../components/StatsSec2"; 
import TechnologyStack from "../components/TechnologyStack"; // Fixed import path

const Home = () => {
  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      
      <StatsSec2 />
      <TechnologyStack />
    </main>
  );
};

export default Home;