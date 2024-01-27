import './App2.css';

import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="screen-container">
        <div className="background"></div>
        <div className="rect-1x1">
          <div className="rect-4x1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
