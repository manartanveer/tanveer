import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const getFahrenheit = () => {
    if (celsius === "" || isNaN(celsius)) return "";
    return (parseFloat(celsius) * 9/5 + 32).toFixed(2);
  };

  const handleReset = () => {
    setCelsius("");
  };

  return (
    <div>
      <h1>Temperature Converter</h1>

      <label>
        Celsius: 
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="Enter Celsius"
        />
      </label>

      <h2>Fahrenheit: {getFahrenheit()}</h2>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TemperatureConverter;
