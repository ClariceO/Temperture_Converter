import React, { useState } from "react";
import ReactDOM from "react-dom";

const toCelsius = (fahrenheit) => {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
};
const toFahrenheit = (celsius) => {
  return ((celsius * 9) / 5 + 32).toFixed(2);
};

const TempInput = (props) => {
  return (
    <div>
      <label>Enter {props.name} here: </label>
      <input
        value={props.value}
        onChange={props.handleChange}
        type="tel"
        pattern="^-?[0-9]\d*\.?\d*$"
      />
    </div>
  );
};

const TempConverter = () => {
  const [temp, setTemp] = useState({ f: 0, c: 0 });

  const updateCelsius = (e) => {
    if (e.target.validity.valid) {
      setTemp({ c: e.target.value, f: toFahrenheit(e.target.value) });
    }
  };
  const updateFahrenheit = (e) => {
    if (e.target.value === "-") {
      setTemp({ ...temp, f: e.target.value });
    }
    if (!isNaN(e.target.value)) {
      setTemp({ c: toCelsius(e.target.value), f: e.target.value });
    }
  };
  return (
    <>
      <h1>My Temperature Converter</h1>
      <TempInput name="Celsius" value={temp.c} handleChange={updateCelsius} />
      <TempInput
        name="Fahrenheit"
        value={temp.f}
        handleChange={updateFahrenheit}
      />
    </>
  );
};

ReactDOM.render(<TempConverter />, document.getElementById("root"));
