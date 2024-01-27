// Timer.tsx
import React, { useEffect, useState } from 'react';
import { formatTime } from '../../utils/formatTime';

interface TimerProps {
  bestTime: number;
}

const Timer: React.FC<TimerProps> = ({ bestTime }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const tick = () => {
      setCurrentTime((prevTime) => prevTime + 100); // Atualize conforme necessário
    };

    // Inicie o cronômetro quando o componente for montado
    const intervalId = setInterval(tick, 100); // Atualize conforme necessário

    // Limpe o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, []); // O array de dependências vazio garante que este efeito seja executado apenas uma vez

  return (
    <div className="timer-container">
      <p>Tempo Atual: {formatTime(currentTime)}</p>
      <p>Recorde: {formatTime(bestTime)}</p>
    </div>
  );
};

export default Timer;
