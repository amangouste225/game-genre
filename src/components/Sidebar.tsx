import { useState } from 'react';
import { GameGrid, GenresList } from '.';
import { Genres } from '../hooks/useGenres';

export const Sidebar = () => {
  const [GenreSelected, setGenreSelected] = useState<Genres | null>(null);

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <GameGrid />
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <GenresList onSelectGenre={(genre) => setGenreSelected(genre)} />
      </div>
    </div>
  );
};
