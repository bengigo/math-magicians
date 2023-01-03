import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link className="link active" to="/">
          Home
        </Link>
        <Link className="link" to="/calculator">
          Calculator
        </Link>
        <Link className="link" to="/quote">
          Quote
        </Link>
      </nav>
    </header>
    <div className="welcome-section">
      <h2 className="welcome">Welcome to Math Magicians!</h2>
      <p className="welcome">
        We are a single page application designed to
        help you perform simple calculator actions with ease. Whether you are a
        student working on math homework or a professional needing quick
        calculations, our user-friendly interface allows you to perform math
        operations with just a few clicks.
        <br />
        <br />
        Our app includes basic functions such
        as addition, subtraction, multiplication, and division. Thank you for
        choosing Math Magicians for your mathematical needs. We hope you
        find our app helpful and easy to use. Happy calculating!
      </p>

    </div>
  </main>
);

export default Home;
