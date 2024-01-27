// Timer.tsx
import './style.css';
import React, { useEffect, useState } from 'react';
import { formatTime } from '../../utils/formatTime';

interface TimerProps {
  bestTime: number;
  gameInProgress: boolean; // Adiciona a propriedade gameInProgress
}

const Timer: React.FC<TimerProps> = ({ bestTime, gameInProgress }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (gameInProgress) {
      const tick = () => {
        setCurrentTime((prevTime) => prevTime + 100); // Atualize conforme necessário
      };

      // Inicie o cronômetro quando o componente for montado
      const intervalId = setInterval(tick, 100); // Atualize conforme necessário

      // Limpe o intervalo quando o componente for desmontado
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameInProgress]); // Adiciona gameInProgress como dependência para reagir a mudanças

  return (
    <div className="timer-container">
      <div>
        <p>⌚ {formatTime(currentTime)}</p>
      </div>
      <div>
        <p>👑 {formatTime(bestTime)}</p>
      </div>
    </div>
  );
};

export default Timer;
