// Progress.tsx
import './style.css';

import React from 'react';

interface ProgressProps {
  max: number;
  current: number;
}

const Progress: React.FC<ProgressProps> = ({ max, current }) => {
  // Cria um array com o número de tortas a serem exibidas
  const pieArray = Array(max - current).fill(0);

  return (
    <div className="progress-container">
      {pieArray.map((_, index) => (
        <img key={index} style={{ width: '3vw' }} src="./img/pie.svg" alt="" />
      ))}
    </div>
  );
};

export default Progress;
