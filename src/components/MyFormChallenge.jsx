import React, { useState } from 'react';
import './App.css';

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');
  const [matchedColor, setMatchedColor] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    setMatchedColor(colors.includes(value));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe un color"
      />
      <p className="result">
        {matchedColor
          ? "¡Sí, es el color!"
          : "No soy el color"}
      </p>
      <div className="box-container">
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            inputValue={inputValue}
          />
        ))}
      </div>
    </div>
  );
};
