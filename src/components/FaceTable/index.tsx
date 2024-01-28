// FaceTable.tsx
import './style.css';
import { Howl } from 'howler';

import React, { useEffect, useState } from 'react';

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
  const splash_sound = new Howl({
    src: ['./assets/sound/splash sound.m4a'],
  });

  const wrong_sound = new Howl({
    src: ['./assets/sound/wrong sound.m4a'],
  });

  const [showPieMatrix, setShowPieMatrix] = useState(
    Array.from({ length: currentLevel.length }, () =>
      Array(currentLevel[0].length).fill(false),
    ),
  );
  const [showFeedbackBg, setShowFeedbackBg] = useState(
    Array.from({ length: currentLevel.length }, () =>
      Array(currentLevel[0].length).fill('face-background'),
    ),
  );

  useEffect(() => {
    // Resetar a matriz quando o currentLevel mudar
    setShowPieMatrix(
      Array.from({ length: currentLevel.length }, () =>
        Array(currentLevel[0].length).fill(false),
      ),
    );
    setShowFeedbackBg(
      Array.from({ length: currentLevel.length }, () =>
        Array(currentLevel[0].length).fill('face-background'),
      ),
    );
  }, [currentLevel]);

  const findRowAndColIndexes = (correct) => {
    for (let rowIndex = 0; rowIndex < currentLevel.length; rowIndex++) {
      for (let colIndex = 0; colIndex < currentLevel[rowIndex].length; colIndex++) {
        const value = currentLevel[rowIndex][colIndex];
        const shot = value.split('-')[1];

        if (String(shot) === String(correct)) {
          // Encontrou o valor correto, retornar os índices
          return { corRowIndex: rowIndex, corColIndex: colIndex };
        }
      }
    }

    // Não encontrou o valor correto
    return { corRowIndex: -1, corColIndex: -1 };
  };

  const handleClick = (rowIndex: number, colIndex: number, correct: number) => {
    const value: string = currentLevel[rowIndex][colIndex];
    const shot = value.split('-')[1];

    if (gameInProgress) {
      if (String(shot) === String(correct)) {
        splash_sound.play();

        const updatedShowPieMatrix = [
          ...Array.from({ length: currentLevel.length }, () =>
            Array(currentLevel[0].length).fill(false),
          ),
        ];
        updatedShowPieMatrix[rowIndex][colIndex] = true;
        setShowPieMatrix(updatedShowPieMatrix);

        const updatedFeedbackMatrix = [
          ...Array.from({ length: currentLevel.length }, () =>
            Array(currentLevel[0].length).fill('face-background'),
          ),
        ];
        updatedFeedbackMatrix[rowIndex][colIndex] = 'feedback-bg-was-right';
        setShowFeedbackBg(updatedFeedbackMatrix);

        onCorrectShot();
      } else {
        wrong_sound.play();
        const updatedFeedbackMatrix = [
          ...Array.from({ length: currentLevel.length }, () =>
            Array(currentLevel[0].length).fill('face-background'),
          ),
        ];
        updatedFeedbackMatrix[rowIndex][colIndex] = 'feedback-bg-wrong';

        const { corRowIndex, corColIndex } = findRowAndColIndexes(correct);

        updatedFeedbackMatrix[corRowIndex][corColIndex] = 'feedback-bg-was-right';
        setShowFeedbackBg(updatedFeedbackMatrix);

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
                <td
                  className={`${
                    showFeedbackBg[rowIndex] && showFeedbackBg[rowIndex][colIndex]
                  }`}
                  key={colIndex}
                >
                  <div
                    className={`face-cell face-${value}-${
                      showFeedbackBg[rowIndex] && showFeedbackBg[rowIndex][colIndex]
                    }`}
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
