import { useState } from 'react';
import { GameGrid, GenresList } from '.';
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
        <Selector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
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
