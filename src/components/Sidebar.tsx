import { useState } from 'react';
import { GameGrid, GenresList, SortSelector } from '.';
import { Genres } from '../hooks/useGenres';
import { Selector } from './';
import Platform from '../hooks/useGames';

export const Sidebar = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <div className='drawer lg:drawer-open relative'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <div className='absolute top-5 lg:flex w-[200px] space-x-4 z-50 hidden'>
          <Selector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector />
        </div>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </div>
      <div className='drawer-side'>
        <GenresList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </div>
    </div>
  );
};
