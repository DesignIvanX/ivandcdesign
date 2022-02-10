import React, { useState } from "react";
import { Link } from "@reach/router";
import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import "./style/Navegation.css";
import "./style/DarkMode.css";
const Navegation = () => {
  const [mode, setMode] = useState(false);
  const handleModeClick = () => {
    setMode(!mode);
    inicializate();
  };
  const inicializate = () => {
    const white = document.querySelector(".white");
    if (!white.classList.contains("white-focus-moon")) {
      white.classList.remove("white-focus-sun");
      white.classList.add("white-focus-moon");
      changeMode("dark");
    } else {
      white.classList.remove("white-focus-moon");
      white.classList.add("white-focus-sun");
      changeMode("ligth");
    }
  };
  const changeMode = (mode) => {
    setTimeout(() => {
      document.documentElement.setAttribute("data-theme", `${mode}`);
    }, 1000);
  };
  const loadingRemove = () => {
    const loading = document.querySelector(".lazy-loading-content");
    loading.classList.remove("lazy");
    setTimeout(() => {
      loading.classList.add("lazy");
    }, 1000);
  };
  return (
    <div>
      <div className="lazy-loading-content">
        <div className="loadingio-spinner-pulse-yyczceyun6e">
          <div className="ldio-vbx0wyzhpxm">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <header className="header">
        <ul>
          <Link to="/" className="header-link" onClick={loadingRemove}>
            <AiFillHome size="60px" className="fas"></AiFillHome>
          </Link>
          <Link to="/works" className="header-link" onClick={loadingRemove}>
            <MdWork size="65px" className="fas"></MdWork>
          </Link>
          <Link to="/contact" className="header-link" onClick={loadingRemove}>
            <HiIdentification size="65px" className="fas"></HiIdentification>
          </Link>
          {/* <Link to="/skills" className="header-link" onClick={loadingRemove}>
            <BsNutFill size="60px" className="fas"></BsNutFill>
          </Link> */}
        </ul>
      </header>
      <div className="button-dark-mode" onClick={handleModeClick}>
        <div className="sun-mode">
          <i className="fas fa-sun"></i>
        </div>
        <div className="button-mode">
          <div className="white white-focus-sun"></div>
        </div>
        <div className="moon-mode">
          <i className="fas fa-moon"></i>
        </div>
      </div>
      <div className="home-social-media">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ivan-del-campo-09b644215/"
        >
          <AiFillLinkedin className="fab fa-linkedin"></AiFillLinkedin>
        </a>
        <a target="_blank" rel="noreferrer" href="/">
          <AiOutlineTwitter className="fab fa-twitter"></AiOutlineTwitter>
        </a>
        <a target="_blank" rel="noreferrer" href="/">
          <AiOutlineGithub className="fab fa-github-square"></AiOutlineGithub>
        </a>
        <a
          href="https://www.instagram.com/ivan_camp0/?hl=es-la"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="fab fa-instagram"></AiOutlineInstagram>
        </a>
      </div>
    </div>
  );
};

export default Navegation;
