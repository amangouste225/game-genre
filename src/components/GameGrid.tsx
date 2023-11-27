import { useGames } from '../hooks/useGames';

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <ul>
      <p>{error && <p>{error}</p>}</p>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};
