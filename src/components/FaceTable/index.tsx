// FaceTable.tsx
import React from 'react';
import './style.css';
import FaceFactory from '../FaceFactory';

interface FaceTableProps {
  currentLevel: number[][];
  onCorrectShot: () => void;
  onMistakenShot: () => void;
  gameInProgress: boolean; // Adiciona a propriedade gameInProgress
}

const FaceTable: React.FC<FaceTableProps> = ({
  currentLevel,
  onCorrectShot,
  onMistakenShot,
  gameInProgress,
}) => {
  const handleClick = (value: number) => {
    if (gameInProgress) {
      if (value === 1) {
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
                  <div onClick={() => handleClick(value)}>
                    <FaceFactory id={value} />
                  </div>
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
