import React from "react";
import { Router } from "@reach/router";
import Canva from "../components/Canva";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Skills from "../pages/Skills";
const App = () => {
  return (
    <Canva>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Contact path="/contact" />
        <Works path="/works" />
        <Skills path="/skills" />
      </Router>
    </Canva>
  );
};

export default App;
