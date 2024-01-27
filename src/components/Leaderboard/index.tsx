// Leaderboard.tsx
import React, { FC } from 'react';
import { formatTime } from '../../utils/formatTime';

interface LeaderboardProps {
  numrows: number;
  data: { name: string; time: number }[];
}

const getMedalEmoji = (index: number): string => {
  switch (index) {
    case 0:
      return '🥇';
    case 1:
      return '🥈';
    case 2:
      return '🥉';
    default:
      return '';
  }
};

const Leaderboard: FC<LeaderboardProps> = ({ numrows, data }) => {
  // Preenche as linhas restantes com valores padrão
  const sortedData = [...data].sort((a, b) => a.time - b.time);
  const filledData = [
    ...sortedData,
    ...Array(numrows - sortedData.length).fill({ name: '---', time: 0 }),
  ];

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filledData.slice(0, numrows).map((entry, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'right' }}>{getMedalEmoji(index) + (index + 1)}</td>
              <td style={{ textAlign: 'right' }}>{entry.name}</td>
              <td style={{ textAlign: 'right' }}>{formatTime(entry.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
