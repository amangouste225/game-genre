import { GameCardSkeleton } from '.';
import Platform, { useGames } from '../hooks/useGames';
import { Genres } from '../hooks/useGenres';
import { GameCard } from './GameCard';

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, loading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18];

  return (
    <>
      {loading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};
