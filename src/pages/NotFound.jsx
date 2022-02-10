import React from "react";
import Desierto from "../static/img/desierto.jpg";
import "./style/NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <img
          className="not-found-content--img"
          src={Desierto}
          alt="dibujo del desierto"
        ></img>
      </div>
    </div>
  );
};

export default NotFound;
