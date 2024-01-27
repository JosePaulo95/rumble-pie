import React, { useState, useEffect } from 'react';
import './style.css';
import Progress from '../Progress';
import FaceTable from '../FaceTable';
import Timer from '../Timer';
import { generateLevel } from '../../utils/generateLevel';
import { formatTime } from '../../utils/formatTime';
import { findPlayerPosition } from '../../utils/score';
import { useNavigate } from 'react-router-dom';

function Game() {
  const [currentLevel, setCurrentLevel] = useState<number[][]>([]);
  const [currentProgress, setCurrentProgress] = useState(-1);
  const [gameInProgress, setGameInProgress] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('playing');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

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
      setGameInProgress(false);
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }, [playerName]);

  useEffect(() => {
    setStartTime(Date.now());
    generateNewLevel();
  }, []);

  const generateNewLevel = () => {
    setCurrentLevel(generateLevel());
    setCurrentProgress(currentProgress + 1);
    setGameInProgress(true);
    setCurrentScreen('playing');
  };

  const handleCorrectShot = () => {
    setGameInProgress(false);
    if (currentProgress >= 2) {
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
      setCurrentScreen('menu');
    }, 1500);
  };

  return (
    <div className="vertical-container">
      {currentScreen === 'playing' && (
        <div>
          screen playing:
          <div className="subcontainer-flex1">
            <Timer bestTime={4500} gameInProgress={gameInProgress} />
          </div>
          <div className="subcontainer-flex3">
            <FaceTable
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

      {currentScreen === 'score' && (
        <div>
          <input
            style={{
              textAlign: 'center',
              border: 'none',
              outline: 'none',
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
            ({findPlayerPosition(endTime - startTime)}º lugar) Tempo:{' '}
            {formatTime(endTime - startTime)}{' '}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Game;
