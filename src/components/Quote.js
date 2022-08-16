import React from 'react';
import { Link } from 'react-router-dom';

const Quote = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <p>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding. -William Paul Thurston
    </p>
  </>
);

export default Quote;
