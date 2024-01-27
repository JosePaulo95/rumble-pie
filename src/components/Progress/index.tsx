// Progress.tsx
import React from 'react';
import './style.css';

interface ProgressProps {
  max: number;
  current: number;
}

const Progress: React.FC<ProgressProps> = ({ max, current }) => {
  // Cria um array com o número de tortas a serem exibidas
  const pies = '🥧'.repeat(max - current);
  return (
    <div className="progress-container">
      {/* <p>
        Progresso: {current} / {max}
      </p> */}
      <div className="pie-images">{pies}</div>
    </div>
  );
};

export default Progress;
