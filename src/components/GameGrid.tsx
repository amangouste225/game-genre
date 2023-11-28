import { GameCardSkeleton } from '.';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';

export const GameGrid = () => {
  const { games, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18];

  return (
    <>
      {loading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};
