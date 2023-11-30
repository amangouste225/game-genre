import { useData } from './useData';

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => useData<Genres>('/genres');
