// MenuPrincipal.js
import './MenuPrincipal.css'; // Importa o arquivo CSS

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Leaderboard from '../components/Leaderboard';

function MenuPrincipal() {
  // Estado para armazenar os dados do leaderboard
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Efeito para carregar os dados do localStorage ao montar o componente
  useEffect(() => {
    const storedData = localStorage.getItem('leaderboard');

    // Verifica se há dados no localStorage antes de tentar fazer o parse
    if (storedData) {
      setLeaderboardData(JSON.parse(storedData));
    }
  }, []); // O array vazio garante que este efeito seja executado apenas uma vez ao montar o componente

  return (
    <div className="container">
      <img style={{ width: '60vh' }} src=".assets/img/rumble-pie-logo.svg" alt="" />
      <Leaderboard numrows={5} data={leaderboardData} />
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
