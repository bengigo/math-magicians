import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link className="link" to="/">
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
      <h2 className="welcome">Welcome to our page!</h2>
      <p className="welcome">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus
        laoreet non curabitur gravida arcu ac tortor. Nulla porttitor massa id
        neque. Sit amet tellus cras adipiscing enim eu turpis. Et tortor at
        risus viverra adipiscing at in tellus. Volutpat maecenas volutpat
        blandit aliquam etiam erat velit scelerisque. Turpis egestas integer
        eget aliquet nibh praesent.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac
        tortor. Nulla porttitor massa id neque. Sit amet tellus cras adipiscing
        enim eu turpis. Et tortor at risus viverra adipiscing at in tellus.
        Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
        Turpis egestas integer eget aliquet nibh praesent.
      </p>
      <p className="welcome">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pretium aenean
        pharetra magna ac placerat vestibulum. Eget nunc scelerisque viverra
        mauris in aliquam sem. Nascetur ridiculus mus mauris vitae. Non
        consectetur a erat nam at lectus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida
        arcu ac tortor. Nulla porttitor massa id neque. Sit amet tellus cras
        adipiscing enim eu turpis. Et tortor at risus viverra adipiscing at in
        tellus. Volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque. Turpis egestas integer eget aliquet nibh praesent. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet
        non curabitur gravida arcu ac tortor. Nulla porttitor massa id neque.
        Sit amet tellus cras adipiscing enim eu turpis. Et tortor at risus
        viverra adipiscing at in tellus. Volutpat maecenas volutpat blandit
        aliquam etiam erat velit scelerisque. Turpis egestas integer eget
        aliquet nibh praesent.
      </p>
    </div>
  </main>
);

export default Home;
