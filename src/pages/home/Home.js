import React from "react";
import Navbar from "../../components/Navbar";
import MainContent from "../../components/MainContent";

const Home = () => {
  return (
    <div>
      <div className="circle"></div>
      <div className="circle-top"></div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Home;
