import React from "react";
import "./style/Works.css";
const Works = () => {
  return (
    <main className="main">
      <section className="works-section">
        <div className="works-content">
          <h3>Case Studies</h3>
          <h2>Latest Works</h2>
          <div className="works-content-card-all">

            <div className="works-content-card-img">
              <div className="effect-hover"></div>
              <div className="works-content-card">
                <h2 className="number-card-works">01</h2>
                <h3>POKEDEX</h3>
                <p>pokedex with ReactJs</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pokemon-rho-seven.vercel.app/pokedex"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Works;
