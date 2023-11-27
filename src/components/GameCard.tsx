import { IconsList } from '.';
import { Games } from '../hooks/useGames';

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  return (
    <div className='card max-w-[380px] h-[260px] bg-base-300 shadow-lg cursor-pointer hover:scale-105'>
      <figure className='h-full w-full'>
        <img
          src={game.background_image}
          alt='Shoes'
          className='w-full h-full object-cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{game.name}</h2>
        <IconsList platforms={game.parent_platforms.map((p) => p.platform)} />
        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};
