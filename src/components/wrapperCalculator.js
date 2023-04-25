import React from "react";
import Screen from "./screen";
import ButtonBox from "./buttonbox";

const Calculator = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
      <Screen />
      <ButtonBox/>
    </div>
  );
};

export default Calculator;
