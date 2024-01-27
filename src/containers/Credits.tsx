// Credits.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Credits: React.FC = () => {
  return (
    <div className="credits-container">
      <h1>Créditos</h1>
      <p>Feito com React.js na Global Game Jam 2024</p>
      <p>Pablo Wauis - Arte 2D</p>
      <p>José Paulo - Programador</p>

      <Link to="/">
        <button>Voltar</button>{' '}
      </Link>
    </div>
  );
};

export default Credits;
