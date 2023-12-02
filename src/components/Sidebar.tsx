import { GameGrid, GenresList, SortSelector } from '.';
import { Genres } from '../hooks/useGenres';
import { Selector } from './';
import Platform from '../hooks/useGames';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

export const Sidebar = ({ gameQuery, setGameQuery }) => {
  return (
    <div className='drawer lg:drawer-open relative'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <div className='absolute top-5 lg:flex w-[200px] space-x-4 z-50 hidden'>
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
