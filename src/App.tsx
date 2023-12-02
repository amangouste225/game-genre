import { useState } from 'react';
import { Sidebar, Navbar } from './components';
import Platform from './hooks/useGames';
import { Genres } from './hooks/useGenres';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className='container'>
      <Navbar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Sidebar gameQuery={gameQuery} setGameQuery={setGameQuery} />
    </div>
  );
}

export default App;
