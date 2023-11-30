import { Genres, useGenres } from '../hooks/useGenres';
import { getCropped } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

export const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <div className='menu p-4 flex gap-5 w-60 min-h-full bg-base text-base-content'>
      <h1 className='text-[25px] font-bold'>Genres</h1>
      {data.map((genre) => (
        <div key={genre.id} className='flex items-center gap-2 group'>
          <img
            src={getCropped(genre.image_background)}
            className='max-h-[25px] rounded-md'
          />
          <button
            onClick={() => onSelectGenre(genre)}
            className={`group-hover:underline text-md text fontWeight ${
              genre.id === selectedGenre?.id ? 'font-bold' : 'font-normal'
            } `}
          >
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};
