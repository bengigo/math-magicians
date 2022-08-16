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
      Mathematics is a language developed by humanity to understand nature and
      use it for its own benefit. -Pınar Ezgi Kadı
    </p>
  </>
);

export default Quote;
