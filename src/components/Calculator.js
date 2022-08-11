import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };

  const { next, total, operation } = state;
  return (
    <div className="ui">
      <div className="output cell">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" onClick={handleClick} className="clear cell">
        AC
      </button>
      <button type="button" onClick={handleClick} className="sign cell">
        +/-
      </button>
      <button type="button" onClick={handleClick} className="percent cell">
        %
      </button>
      <button type="button" onClick={handleClick} className="operand cell">
        ÷
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        7
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        8
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        9
      </button>
      <button type="button" onClick={handleClick} className="operand cell">
        x
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        4
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        5
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        6
      </button>
      <button type="button" onClick={handleClick} className="operand cell">
        -
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        1
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        2
      </button>
      <button type="button" onClick={handleClick} className="num cell">
        3
      </button>
      <button type="button" onClick={handleClick} className="operand cell">
        +
      </button>
      <button type="button" onClick={handleClick} className="num zero cell">
        0
      </button>
      <button type="button" onClick={handleClick} className="point cell">
        .
      </button>
      <button type="button" onClick={handleClick} className="equals operand cell">
        =
      </button>
    </div>
  );
};

export default Calculator;
