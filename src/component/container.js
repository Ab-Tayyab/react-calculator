import React, { useState } from "react";
import Calculator from "./calulator/calculator.js";
import Bmi from "./bmi/bmi.js";
import "./container.css";
import UnitConverter from "./convertion/convertion.js";

function Container() {
  const [activeComponent, setActiveComponent] = useState("Calculator");
  const renderComponent = () => {
    switch (activeComponent) {
      case "Calculator":
        return <Calculator />;
      case "Bmi":
        return <Bmi />;
      case "Convertor":
        return <UnitConverter />;
      default:
        return <Calculator />;
    }
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => setActiveComponent("Calculator")}>
          Calculator
        </button>
        <button onClick={() => setActiveComponent("Bmi")}>
          BMI Calculator
        </button>
        <button onClick={() => setActiveComponent("Convertor")}>
          Length convertor
        </button>
      </div>
      <div className="component-display">{renderComponent()}</div>
    </div>
  );
}

export default Container;
