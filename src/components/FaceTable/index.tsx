// FaceTable.tsx
import React from 'react';
import './style.css';
import FaceFactory from '../FaceFactory';

interface FaceTableProps {
  objetivoId: number;
  currentLevel: string[][];
  onCorrectShot: () => void;
  onMistakenShot: () => void;
  gameInProgress: boolean; // Adiciona a propriedade gameInProgress
}

const FaceTable: React.FC<FaceTableProps> = ({
  objetivoId,
  currentLevel,
  onCorrectShot,
  onMistakenShot,
  gameInProgress,
}) => {
  const handleClick = (value: string, correct: number) => {
    const shot = value.split('-')[1];
    if (gameInProgress) {
      if (String(shot) === String(correct)) {
        onCorrectShot();
      } else {
        onMistakenShot();
      }
    }
  };

  return (
    <div className="face-table-container">
      <table className="custom-table">
        <tbody>
          {currentLevel.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <div
                    className={`face-cell face-${value}`}
                    onClick={() => handleClick(value, objetivoId)}
                  ></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FaceTable;
