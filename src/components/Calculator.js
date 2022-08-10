import React from 'react';

function Calculator() {
  return (
    <div className="ui">
      <div className="output cell">0</div>
      <div className="clear cell">AC</div>
      <div className="sign cell">+/-</div>
      <div className="percent cell">%</div>
      <div className="operand cell">÷</div>
      <div className="num cell">7</div>
      <div className="num cell">8</div>
      <div className="num cell">9</div>
      <div className="operand cell">x</div>
      <div className="num cell">4</div>
      <div className="num cell">5</div>
      <div className="num cell">6</div>
      <div className="operand cell">-</div>
      <div className="num cell">1</div>
      <div className="num cell">2</div>
      <div className="num cell">3</div>
      <div className="operand cell">+</div>
      <div className="num zero cell">0</div>
      <div className="point cell">.</div>
      <div className="equals operand cell">=</div>
    </div>
  );
}

export default Calculator;
