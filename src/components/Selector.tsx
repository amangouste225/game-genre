import { usePlatforms } from '../hooks/usePlateforms';

export const Selector = () => {
  const { data, error } = usePlatforms();

  return (
    <div className='absolute top-0 mb-10 pb-10  z-50'>
      <details className='dropdown'>
        <summary className='m-1 btn w-52'>Platforms </summary>
        <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-52'>
          {data.map((menu) => (
            <li key={menu.id}>
              <a href=''>{menu.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};
