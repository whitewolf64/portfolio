import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Campandegui Munio</h1>
          <h2>Développeur Full-Stack</h2>
          <div className="pdf">
            <a href="./media/cvmunio.pdf" target="_blanck">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
