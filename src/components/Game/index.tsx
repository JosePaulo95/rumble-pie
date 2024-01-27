// Game.tsx
import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Progress from '../Progress';
import FaceTable from '../FaceTable';
import Timer from '../Timer';
import { generateLevel } from '../../utils/generateLevel';

function Game() {
  const [currentLevel, setCurrentLevel] = useState<number[][]>([]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(true);
  const navigate = useNavigate(); // Utiliza o hook useNavigate para redirecionamento

  useEffect(() => {
    generateNewLevel();
  }, []);

  const generateNewLevel = () => {
    setCurrentLevel(generateLevel());
    setCurrentProgress(currentProgress + 1);
    setGameInProgress(true);
  };

  const handleCorrectShot = () => {
    alert('certo!');
    generateNewLevel();
  };

  const handleMistakenShot = () => {
    alert('errado!');
    setGameInProgress(false);
    setTimeout(() => {
      navigate('/'); // Usa o navigate para redirecionamento
    }, 3000);
  };

  return (
    <div className="vertical-container">
      <div className="subcontainer-flex1">
        <Timer bestTime={4500} />
      </div>
      <div className="subcontainer-flex3">
        <FaceTable
          currentLevel={currentLevel}
          onCorrectShot={handleCorrectShot}
          onMistakenShot={handleMistakenShot}
        />
      </div>
      <div className="subcontainer-flex1">
        <Progress max={10} current={currentProgress} />
      </div>
    </div>
  );
}

export default Game;
