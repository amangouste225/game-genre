import { useGenres } from '../hooks/useGenres';
import { getCropped } from '../services/image-url';

export const GenresList = () => {
  const { genres } = useGenres();

  return (
    <div className='menu p-4 flex gap-5 w-60 min-h-full bg-base text-base-content'>
      {genres.map((genre) => (
        <div key={genre.id} className='flex items-center gap-2 group'>
          <img
            src={getCropped(genre.image_background)}
            className='max-h-[25px] rounded-md'
          />
          <a href='#' className='group-hover:underline'>
            {genre.name}
          </a>
        </div>
      ))}
    </div>
  );
};
