// FaceTable.tsx
import React, { useEffect, useState } from 'react';
import './style.css';
import Pie from '../Pie';

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
  const [showPieMatrix, setShowPieMatrix] = useState(
    Array.from({ length: currentLevel.length }, () =>
      Array(currentLevel[0].length).fill(false),
    ),
  );

  useEffect(() => {
    // Resetar a matriz quando o currentLevel mudar
    setShowPieMatrix(
      Array.from({ length: currentLevel.length }, () =>
        Array(currentLevel[0].length).fill(false),
      ),
    );
  }, [currentLevel]);

  const handleClick = (rowIndex: number, colIndex: number, correct: number) => {
    const value: string = currentLevel[rowIndex][colIndex];
    const shot = value.split('-')[1];

    const updatedShowPieMatrix = [
      ...Array.from({ length: currentLevel.length }, () =>
        Array(currentLevel[0].length).fill(false),
      ),
    ];
    updatedShowPieMatrix[rowIndex][colIndex] = true;
    setShowPieMatrix(updatedShowPieMatrix);

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
                    onClick={() => handleClick(rowIndex, colIndex, objetivoId)}
                  >
                    <Pie
                      show={showPieMatrix[rowIndex] && showPieMatrix[rowIndex][colIndex]}
                    />
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
