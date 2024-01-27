// Game.tsx
import React from 'react';
import './style.css'; // Importe o arquivo CSS
import Progress from '../Progress';
import FaceTable from '../FaceTable';
import Timer from '../Timer';

function Game() {
  return (
    <div className="vertical-container">
      <div className="subcontainer-flex1">
        <Timer bestTime={4500} />
      </div>
      <div className="subcontainer-flex3">
        {/* <FaceTable currentLevel={levels[currentIndex]} onCorrectShot={} onMistakenShot={} /> */}
      </div>
      <div className="subcontainer-flex1">
        <Progress max={10} current={3} />
      </div>
    </div>
  );
}

export default Game;
