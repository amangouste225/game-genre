import { GameGrid, GamesHeading, GenresList, SortSelector } from '.';
import { Selector } from './';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
}

export const Sidebar = ({ gameQuery, setGameQuery }: Props) => {
  return (
    <div className='drawer lg:drawer-open relative'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />

      <div className='drawer-content'>
        <div className='absolute top-7 left-[130px] lg:left-[250px]'>
          <GamesHeading gameQuery={gameQuery} />
        </div>
        <div className='absolute top-28 lg:flex w-[200px] space-x-4 z-50 hidden'>
          <Selector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </div>
      <div className='drawer-side'>
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>
    </div>
  );
};
