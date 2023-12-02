import { useState } from 'react';
import { GameGrid, GenresList, SortSelector } from '.';
import { Genres } from '../hooks/useGenres';
import { Selector } from './';
import Platform from '../hooks/useGames';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
}

export const Sidebar = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
              setGameQuery({ ...sortOrder, sortOrder })
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
