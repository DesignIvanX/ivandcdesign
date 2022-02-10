import React from "react";
import Navegation from "./Navegation";
import Loading from "./Loading";
const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Loading />
    </>
  );
};

export default Canva;
