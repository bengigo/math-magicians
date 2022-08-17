import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
