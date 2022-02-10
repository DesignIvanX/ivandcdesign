import React from "react";
import "./style/Skills.css";
const Skills = () => {
  return (
    <section className="skills-section">
      <h2>
        <span className="line-color">Skil</span>ls
      </h2>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/html-5.svg" alt="html" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "95%" }}></div>
        </div>
        <span className="value">95%</span>
      </div>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/css.svg" alt="css" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "97%" }}></div>
        </div>
        <span className="value">97%</span>
      </div>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/javascript.svg" alt="javascript" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "50%" }}></div>
        </div>
        <span className="value">50%</span>
      </div>
      <h2>
        <span className="line-color">Othe</span>r Skills
      </h2>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/icons8-webpack.svg" alt="webpack" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "60%" }}></div>
        </div>
        <span className="value">60%</span>
      </div>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/github.svg" alt="github" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "69%" }}></div>
        </div>
        <span className="value">69%</span>
      </div>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/git.svg" alt="git" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "75%" }}></div>
        </div>
        <span className="value">75%</span>
      </div>
      <div className="skills">
        <span className="name">
          <img
            src="../../img/icons-skills/adobe-photoshop.svg"
            alt="photoshop"
          />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "63%" }}></div>
        </div>
        <span className="value">63%</span>
      </div>
      <h2>
        <span className="line-color">Lear</span>ning
      </h2>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/unity_icon_136074.svg" alt="unity" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "78%" }}></div>
        </div>
        <span className="value">78%</span>
      </div>
      <div className="skills">
        <span className="name">
          <img src="../../img/icons-skills/hashtag.svg" alt="c#" />
        </span>
        <div className="percent">
          <div className="progress" style={{ width: "47%" }}></div>
        </div>
        <span className="value">47%</span>
      </div>
    </section>
  );
};

export default Skills;
