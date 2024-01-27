import React, { useState, useEffect } from 'react';
import './style.css';
import Progress from '../Progress';
import FaceTable from '../FaceTable';
import Timer from '../Timer';
import { generateLevel } from '../../utils/generateLevel';
import { formatTime } from '../../utils/formatTime';

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

  useEffect(() => {
    // Auto submeter quando 3 caracteres são atingidos
    if (playerName.length === 3) {
      // onSubmit(playerName);
      alert('mandei ' + playerName);
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
      setCurrentScreen('score');
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
              border: 'none',
              outline: 'none',
              color: 'purple',
              fontSize: '3.5em',
              width: '2em', // Ajuste o valor conforme desejado
              textTransform: 'uppercase',
            }}
            type="text"
            id="playerName"
            value={playerName}
            onChange={handleInputChange}
            maxLength="3"
            autoFocus
          />

          <h2>Tempo: {formatTime(endTime - startTime)} </h2>
        </div>
      )}
    </div>
  );
}

export default Game;
