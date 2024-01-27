// MenuPrincipal.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import './MenuPrincipal.css'; // Importa o arquivo CSS

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
      <h1>Rumble Pie</h1>
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
