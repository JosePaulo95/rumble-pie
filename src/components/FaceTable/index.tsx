// FaceTable.tsx
import React from 'react';

interface FaceTableProps {
  currentLevel: Level;
  onCorrectShot: () => void;
  onMistakenShot: () => void;
}

interface Level {
  // Defina a estrutura do objeto Level conforme necessário
}

const FaceTable: React.FC<FaceTableProps> = ({
  currentLevel,
  onCorrectShot,
  onMistakenShot,
}) => {
  // Lógica para renderizar a tabela de rostos e lidar com as seleções
  return (
    <div className="face-table-container">{/* Conteúdo da tabela de rostos aqui */}</div>
  );
};

export default FaceTable;
