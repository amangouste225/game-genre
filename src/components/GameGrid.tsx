import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';

export const GameGrid = () => {
  const { games } = useGames();

  return (
    <>
      {/* {error && <p>{error}</p>} */}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};
