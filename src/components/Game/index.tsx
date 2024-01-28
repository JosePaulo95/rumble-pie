import './style.css';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { formatTime } from '../../utils/formatTime';
import { generateLevel } from '../../utils/generateLevel';
import { findPlayerPosition } from '../../utils/score';
import FaceTable from '../FaceTable';
import Progress from '../Progress';
import Timer from '../Timer';

interface GameProps {
  objetivoId: number;
}

function Game({ objetivoId }: GameProps) {
  const [currentLevel, setCurrentLevel] = useState<string[][]>([]);
  const [currentProgress, setCurrentProgress] = useState(-1);
  const [gameInProgress, setGameInProgress] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('playing');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);

  const [playerName, setPlayerName] = useState('');

  const handleInputChange = (e) => {
    // Limita o comprimento do nome do jogador para 3 caracteres
    const inputName = e.target.value.slice(0, 3);
    setPlayerName(inputName);
  };

  const navigate = useNavigate();
  useEffect(() => {
    // Auto submeter quando 3 caracteres são atingidos
    if (playerName.length === 3) {
      const elapsedTime = endTime - 500 - startTime - 100; // Calcular o tempo decorrido em milissegundos

      // Salvar o novo score no localStorage
      const newScore = { name: playerName, time: elapsedTime };
      const existingScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
      const updatedScores = [...existingScores, newScore].sort((a, b) => a.time - b.time);

      setGameInProgress(false);

      setTimeout(() => {
        localStorage.setItem('leaderboard', JSON.stringify(updatedScores));
        navigate('/');
      }, 1500);
    }
  }, [playerName]);

  useEffect(() => {
    const existingScores = JSON.parse(localStorage.getItem('leaderboard')) || [];

    setBestTime(existingScores.sort((a, b) => a.time - b.time)[0]?.time);
    setStartTime(Date.now());
    generateNewLevel();
  }, []);

  const generateNewLevel = () => {
    setCurrentLevel(generateLevel(objetivoId));
    setCurrentProgress(currentProgress + 1);
    setGameInProgress(true);
    setCurrentScreen('playing');
  };

  const handleCorrectShot = () => {
    setGameInProgress(false);
    if (currentProgress >= 9) {
      setEndTime(Date.now());
      setTimeout(() => {
        setCurrentScreen('score');
        setGameInProgress(true);
      }, 500);
    } else {
      setTimeout(() => generateNewLevel(), 500);
    }
  };

  const handleMistakenShot = () => {
    alert('errado!');
    setGameInProgress(false);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="vertical-container">
      {currentScreen === 'playing' && (
        <div>
          <div className="subcontainer-flex1">
            <Timer bestTime={bestTime} gameInProgress={gameInProgress} />
          </div>
          <div className="subcontainer-flex3">
            <FaceTable
              objetivoId={objetivoId}
              currentLevel={currentLevel}
              onCorrectShot={handleCorrectShot}
              onMistakenShot={handleMistakenShot}
              gameInProgress={gameInProgress}
            />
          </div>
          <div className="subcontainer-flex1">
            <Progress max={10} current={currentProgress} />
          </div>
        </div>
      )}

      {currentScreen === 'score' &&
        findPlayerPosition(endTime - startTime - 500 - 100) < 5 && (
          <div>
            <span>Insira seu nome:</span>
            <br />
            <input
              style={{
                textAlign: 'center',
                border: 'none',
                outline: 'none',
                borderBottom: '1px solid black',
                color: 'purple',
                fontSize: '3.5em',
                width: '3em', // Ajuste o valor conforme desejado
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontFamily: 'BubblegumSans-Regular',
              }}
              disabled={!gameInProgress}
              type="text"
              id="playerName"
              value={playerName}
              onChange={handleInputChange}
              maxLength="3"
              autoFocus
            />

            <h2>
              ({findPlayerPosition(endTime - startTime - 500 - 100) + 1}º lugar) Tempo:{' '}
              {formatTime(endTime - startTime - 1000)}{' '}
            </h2>
          </div>
        )}

      {currentScreen === 'score' &&
        findPlayerPosition(endTime - startTime - 500 - 100) >= 5 && (
          <div>
            <h2>
              ({findPlayerPosition(endTime - startTime - 500 - 100) + 1}º lugar) Tempo:{' '}
              {formatTime(endTime - startTime - 1000)}{' '}
            </h2>
            <Link to="/">
              <button className="menu-button">Okay</button>
            </Link>
          </div>
        )}
    </div>
  );
}

export default Game;
