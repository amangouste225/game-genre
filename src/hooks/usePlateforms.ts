import { useData } from './useData';
import Platform from './useGames';

interface Props {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
