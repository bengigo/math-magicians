import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };

  const { next, total, operation } = state;
  return (
    <div>
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </nav>
      </header>
      <main>
        <h2>Let&apos;s do some math!</h2>

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
          <button
            type="button"
            onClick={handleClick}
            className="equals operand cell"
          >
            =
          </button>
        </div>
      </main>
    </div>
  );
};

export default Calculator;
