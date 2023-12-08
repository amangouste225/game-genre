import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

export const GamesHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <div>
      <h1 className='text-4xl lg:text-5xl font-bold '>{heading} </h1>
    </div>
  );
};
