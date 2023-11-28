import { useGenres } from '../hooks/useGenres';

export const GenresList = () => {
  const { genres } = useGenres();

  return (
    <ul className='menu p-4 w-60 min-h-full bg-base text-base-content'>
      {genres.map((genre) => (
        <li key={genre.id}>
          <a href=''>{genre.name}</a>
        </li>
      ))}
    </ul>
  );
};
