// Objetivo.tsx
import './style.css'; // Importe o arquivo CSS

interface ObjetivoProps {
  texto: string;
}

function Objetivo({ texto }: ObjetivoProps) {
  return (
    <div className="objetivo-content">
      <h2>Objetivo:</h2>
      <p>{texto}</p>
    </div>
  );
}

export default Objetivo;
