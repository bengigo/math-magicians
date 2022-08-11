import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="ui">
        <div className="output cell">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" onClick={this.handleClick} className="clear cell">AC</button>
        <button type="button" onClick={this.handleClick} className="sign cell">+/-</button>
        <button type="button" onClick={this.handleClick} className="percent cell">%</button>
        <button type="button" onClick={this.handleClick} className="operand cell">÷</button>
        <button type="button" onClick={this.handleClick} className="num cell">7</button>
        <button type="button" onClick={this.handleClick} className="num cell">8</button>
        <button type="button" onClick={this.handleClick} className="num cell">9</button>
        <button type="button" onClick={this.handleClick} className="operand cell">x</button>
        <button type="button" onClick={this.handleClick} className="num cell">4</button>
        <button type="button" onClick={this.handleClick} className="num cell">5</button>
        <button type="button" onClick={this.handleClick} className="num cell">6</button>
        <button type="button" onClick={this.handleClick} className="operand cell">-</button>
        <button type="button" onClick={this.handleClick} className="num cell">1</button>
        <button type="button" onClick={this.handleClick} className="num cell">2</button>
        <button type="button" onClick={this.handleClick} className="num cell">3</button>
        <button type="button" onClick={this.handleClick} className="operand cell">+</button>
        <button type="button" onClick={this.handleClick} className="num zero cell">0</button>
        <button type="button" onClick={this.handleClick} className="point cell">.</button>
        <button type="button" onClick={this.handleClick} className="equals operand cell">=</button>
      </div>
    );
  }
}

export default Calculator;
