import React from 'react';
import AliquotCalculator from './AliquotCalculator.js'
import './style.css'

function App() {
  return (
    <>
      <div className="header">
        <div style={{ fontSize: "3em" }}><b>AliCalc</b></div>
        <div><i>Aliquot Calculator for Electrophysiology</i></div>
      </div>
      <div className="content">
        <AliquotCalculator />
      </div>
    </>
  );
}

export default App;
