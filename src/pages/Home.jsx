import React from "react";
import { Link } from "@reach/router";
import Cv from "../static/cv/cv.pdf";
import "./style/Home.css";
const Home = () => {
  // const handleClickHamburger = () => {
  //   const links = document.querySelector(".nav-home ul li");
  //   const hamburger = document.querySelector(".hamburger");
  //   links.classList.toggle("toggle");
  //   hamburger.classList.toggle("change");
  //   links.addEventListener("click", () => {
  //     links.classList.remove("toggle");
  //     hamburger.classList.remove("change");
  //   });
  // };
  const loadingRemove = () => {
    const loading = document.querySelector(".lazy-loading-content");
    loading.classList.remove("lazy");
    setTimeout(() => {
      loading.classList.add("lazy");
    }, 1000);
  };
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <p>HELLO!</p>
          <h1>I'M IVÁN</h1>
          <p>
            Freelancer Web Designer & Developer<span className="poin">.</span>
            <span className="poin">.</span>
            <span className="poin">.</span>
          </p>
          <Link to="/contact" onClick={loadingRemove}>
            About Me
          </Link>
          <a href={Cv} download="cv.png">
            Download Cv
          </a>
        </div>
        <Link to="/works" onClick={loadingRemove} className="btn-home-works">
          Works<i className="fas fa-arrow-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
