import React, { useState, useRef } from 'react';
import './App.css';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);

  return (
    <div
      ref={boxRef}
      className={`box ${color} ${inputValue === color ? 'active' : ''}`}
    >
      {inputValue}
    </div>
  );
};