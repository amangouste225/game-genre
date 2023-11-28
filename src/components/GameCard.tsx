import { GameCardContainer, IconsList } from '.';
import { Games } from '../hooks/useGames';
import { getCropped } from '../services/image-url';
import { Credit } from './';

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <figure className='h-full w-full'>
        <img
          src={getCropped(game.background_image)}
          alt='Shoes'
          className='w-full h-full object-cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{game.name}</h2>
        <div className='flex items-center justify-between'>
          <IconsList platforms={game.parent_platforms.map((p) => p.platform)} />
          <Credit score={game.metacritic} />
        </div>
      </div>
    </GameCardContainer>
  );
};
