import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <h2>Welcome to our page!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. At tellus at urna
      condimentum mattis pellentesque id. Sodales ut etiam sit amet. Volutpat
      blandit aliquam etiam erat velit scelerisque in dictum. Accumsan in nisl
      nisi scelerisque eu.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Pretium aenean
      pharetra magna ac placerat vestibulum. Eget nunc scelerisque viverra
      mauris in aliquam sem. Nascetur ridiculus mus mauris vitae. Non
      consectetur a erat nam at lectus.
    </p>
  </main>
);

export default Home;
