// Leaderboard.tsx
import React, { FC } from 'react';

interface LeaderboardProps {
  numrows: number;
  data: { name: string; time: number }[];
}

const Leaderboard: FC<LeaderboardProps> = ({ numrows, data }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, numrows).map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
