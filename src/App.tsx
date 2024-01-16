import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="background"></div>
      <div className="panel">
        <header className="panel__header">SUPER AWESOME GAME</header>
        <div className="panel__body">
          <button type="button" className="panel__button">
            START GAME
          </button>
          <button type="button" className="panel__button">
            OPTIONS
          </button>
          <button type="button" className="panel__button">
            CREDITS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
