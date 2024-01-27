// MenuPrincipal.js
import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import { mockedLeaderboardData } from '../data/mockedLeaderboardData';

function MenuPrincipal() {
  return (
    <div>
      <h1>Toninho 2</h1>
      <Leaderboard numrows={5} data={mockedLeaderboardData} />
      <Link to="/play">
        <button>Começar</button>
      </Link>
    </div>
  );
}

export default MenuPrincipal;
