import { mockedLeaderboardData } from "../data/mockedLeaderboardData";

export const findPlayerPosition = (time) => {
    console.log(time)
    const existingScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const scores = existingScores.sort((a,b) => a.time-b.time)
    for (let i = 0; i < scores.length; i++) {
      if (time < scores[i].time) {
        return i; // Retorna a posição onde o novo tempo deve ser inserido
      }
    }
    return scores.length; // Se for o maior tempo, coloca no final
};