// 📁 src/pages/Home.jsx
import React from "react";
import Navbar from "src/components/Navbar";
import Hero from "src/components/Hero";
// import other sections as they are created

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* More sections like About, Services, etc. */}
    </>
  );
};

export default Home;