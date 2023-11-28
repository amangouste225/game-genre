import { useEffect, useState } from 'react';
import apiClients from '../services/api-clients';
import { CanceledError } from 'axios';

export interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};
