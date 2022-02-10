import React from "react";
import { Link } from "@reach/router";
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
      {/* <nav className="nav-home">
        <ul>
          <div className="hamburger" onClick={handleClickHamburger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <li>
            <Link to="/works" onClick={loadingRemove}>
              {"[h1>Code Estudies"}
              <span className="line-hover"></span>
            </Link>
            <Link to="/contact" onClick={loadingRemove}>
              {"{Contact Me]"}
              <span className="line-hover"></span>
            </Link>
            <Link to="/skills" onClick={loadingRemove}>
              {"{ Skills ]"}
              <span className="line-hover"></span>
            </Link>
            <Link to="/404" onClick={loadingRemove}>
              {"{ 404 />"}
              <span className="line-hover"></span>
            </Link>
          </li>
        </ul>
      </nav> */}
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
        </div>
        <Link to="/works" onClick={loadingRemove} className="btn-home-works">
          Works<i className="fas fa-arrow-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
