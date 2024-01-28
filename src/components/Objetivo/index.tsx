// Objetivo.tsx
import './style.css'; // Importe o arquivo CSS

import { getTextObjetivo } from '../../utils/objetivo';

interface ObjetivoProps {
  objetivoId: number;
}

function Objetivo({ objetivoId }: ObjetivoProps) {
  return (
    <div className="objetivo-content">
      {/* <h1>Objetivo:</h1> */}
      <h2>{getTextObjetivo(objetivoId)}</h2>
    </div>
  );
}

export default Objetivo;
