import React, { useState } from "react";
import "./bmi.css"; 

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCalculate();
    setHeight("")
    setWeight("")
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "height") {
      setHeight(value);
    }
    if (name === "weight") {
      setWeight(value);
    }
  };

  const handleCalculate = () => {
    const feetToMeterConversion = height * 0.3048;
    const squareOfHeight = feetToMeterConversion * feetToMeterConversion;
    const calculatedBmi = weight / squareOfHeight;
    setBmi(calculatedBmi.toFixed(2));

    if (calculatedBmi < 18) {
      setResult("You are underweight");
    } else if (calculatedBmi > 18 && calculatedBmi <= 24) {
      setResult("Your weight is normal");
    } else if (calculatedBmi > 24 && calculatedBmi <= 29) {
      setResult("You are overweight");
    } else {
      setResult("You are in the obesity state");
    }
  };

  return (
    <div className="bmi-container">
      <form onSubmit={handleSubmit} className="bmi-form">
        <input
          placeholder="Height in Feet"
          onChange={handleChange}
          name="height"
          value={height}
          className="bmi-input"
          required
        />
        <input
          placeholder="Weight in Kilogram"
          onChange={handleChange}
          name="weight"
          value={weight}
          className="bmi-input"
          required
        />
        <button className="bmi-submit">Submit</button>
      </form>

      <div className="bmi-output">
        <p>Final BMI: {bmi}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Bmi;
