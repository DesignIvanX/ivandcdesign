import React from "react";
import "./style/Loading.css";
const Loading = () => {
  window.addEventListener("load", () => {
    const loading = document.querySelector(".lazy-loading-content");
    setTimeout(() => {
      loading.classList.add("lazy");
    }, 1000);
  });
  return (
        <div className="lazy-loading-content">
        <div className="loadingio-spinner-pulse-yyczceyun6e">
          <div className="ldio-vbx0wyzhpxm">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
  );
};

export default Loading;
