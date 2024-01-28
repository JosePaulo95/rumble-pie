import React from 'react';
import './style.css';

interface PieProps {
  show: boolean;
}

const Pie: React.FC<PieProps> = ({ show }) => {
  return <div className={`pie ${show ? 'show' : ''}`}></div>;
};

export default Pie;
