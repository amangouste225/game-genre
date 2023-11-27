import { useEffect, useState } from 'react';
import apiClient from '../services/api-clients';

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}
export const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/xgames')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      <p>{error && <p>{error}</p>}</p>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};
