// InGame.js
import React, { useState, useEffect } from 'react';
import Objetivo from '../components/Objetivo';
import Game from '../components/Game';

function InGame() {
  const [mostrarObjetivo, setMostrarObjetivo] = useState(true);
  const [objetivoId, setObjetivoId] = useState(0);

  useEffect(() => {
    setObjetivoId(Math.floor(Math.random() * 4) + 1);
    const timer = setTimeout(() => {
      setMostrarObjetivo(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {mostrarObjetivo ? (
        <Objetivo objetivoId={objetivoId} />
      ) : (
        <Game objetivoId={objetivoId} />
      )}
    </div>
  );
}

export default InGame;
