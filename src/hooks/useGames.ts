import { useEffect, useState } from 'react';
import apiClients from '../services/api-clients';
import { CanceledError } from 'axios';

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

export const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClients
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
