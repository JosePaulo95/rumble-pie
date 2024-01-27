// InGame.js
import React, { useState, useEffect } from 'react';
import Objetivo from '../components/Objetivo';
import Game from '../components/Game';

function InGame() {
  const [mostrarObjetivo, setMostrarObjetivo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarObjetivo(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {mostrarObjetivo ? <Objetivo texto="Bigode!" /> : <Game />}
    </div>
  );
}

export default InGame;
