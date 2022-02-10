import React from "react";
import ReactDOM from "react-dom";
import App from "./router/App";
import reportWebVitals from "./reportWebVitals";
import "./components/style/GlobalStyle.css";
import "./components/style/Media.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
