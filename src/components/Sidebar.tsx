import { useState } from 'react';
import { GameGrid, GenresList } from '.';
import { Genres } from '../hooks/useGenres';
import { Selector } from './';

export const Sidebar = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <div className='drawer lg:drawer-open relative'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <Selector />
        <GameGrid selectedGenre={selectedGenre} />
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
