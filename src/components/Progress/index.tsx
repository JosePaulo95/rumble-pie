// Progress.tsx
import React from 'react';

interface ProgressProps {
  max: number;
  current: number;
}

const Progress: React.FC<ProgressProps> = ({ max, current }) => {
  return (
    <div className="progress-container">
      <p>
        Progresso: {current} / {max}
      </p>
    </div>
  );
};

export default Progress;
