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

  </>
);

export default Quote;
