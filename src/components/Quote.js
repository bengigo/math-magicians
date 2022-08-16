import React from 'react';
import { Link } from 'react-router-dom';

const Quote = () => (
  <main>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calculator">Calculator</Link>
        <Link className="link" to="/quote">Quote</Link>
      </nav>
    </header>
    <p>
      Mathematics is a language developed by humanity to understand nature and
      use it for its own benefit. -Pınar Ezgi Kadı
    </p>
  </main>
);

export default Quote;
