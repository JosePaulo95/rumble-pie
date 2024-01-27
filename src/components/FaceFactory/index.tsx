// FaceFactory.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Importe o arquivo CSS

const FaceFactory = ({ id }) => {
  // Mapeia o ID para a classe CSS usando switch case
  const getCssClass = (id) => {
    switch (id) {
      case 1:
        return 'personagem-1';
      case 2:
        return 'personagem-2';
      case 3:
        return 'personagem-3';
      case 4:
        return 'personagem-4';
      default:
        return ''; // Retorna vazio se o ID não for reconhecido
    }
  };

  return <div className={`face-factory ${getCssClass(id)}`} />;
};

FaceFactory.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FaceFactory;
