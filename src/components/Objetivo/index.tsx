// Objetivo.tsx
import { getTextObjetivo } from '../../utils/objetivo';
import './style.css'; // Importe o arquivo CSS

interface ObjetivoProps {
  objetivoId: number;
}

function Objetivo({ objetivoId }: ObjetivoProps) {
  return (
    <div className="objetivo-content">
      <h2>Objetivo:</h2>
      <p>{getTextObjetivo(objetivoId)}</p>
    </div>
  );
}

export default Objetivo;
