import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  </>
);

export default Home;
