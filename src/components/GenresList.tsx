import { Genres, useGenres } from '../hooks/useGenres';
import { getCropped } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

export const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <div className='menu p-4 flex gap-2 w-60 min-h-full bg-base text-base-content'>
      <h1 className='text-[27px] lg:mb-8 font-bold genresTitle'>Genres</h1>
      {data.map((genre) => (
        <div key={genre.id} className='flex items-center gap-3'>
          <img
            src={getCropped(genre.image_background)}
            className='max-h-[30px] rounded-md'
          />
          <button
            onClick={() => onSelectGenre(genre)}
            className={`text-[15px] text fontWeight ${
              genre.id === selectedGenre?.id ? 'font-bold' : 'font-normal'
            }`}
          >
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};
