// MenuPrincipal.js
import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import { mockedLeaderboardData } from '../data/mockedLeaderboardData';
import './MenuPrincipal.css'; // Importa o arquivo CSS

function MenuPrincipal() {
  return (
    <div className="container">
      <h1>Rumble Pie</h1>
      <Leaderboard numrows={5} data={mockedLeaderboardData} />
      <Link to="/play">
        <button className="menu-button">Começar</button>
      </Link>
      <Link to="/credits">
        <button className="menu-button">Créditos</button>
      </Link>
    </div>
  );
}

export default MenuPrincipal;
