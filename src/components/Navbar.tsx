import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'black');

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme('black');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.querySelector('html')?.setAttribute('data-theme', theme);
    // document.documentElement.removeAttribute('data-theme');
    // document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <nav className='navbar bg-base-100'>
        <div className='flex-none'>
          <a className='px-5 text-xl'>daisyUI</a>
        </div>
        <div className='flex-1 gap-2'>
          <div className='form-control w-full'>
            <input
              type='text'
              placeholder='Search games'
              className='input input-bordered w-10/12 md:w-11/12 rounded-full mx-auto hover:bg-base-100 hover:text-base-0'
            />
          </div>
        </div>
        <div className='dropdown dropdown-end flex gap-3'>
          {/* DARK MODE */}
          <label className='cursor-pointer grid place-items-center'>
            <input
              onChange={(e) => toggle(e)}
              checked={theme === 'light' ? false : true}
              type='checkbox'
              className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
            />
            <svg
              className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='5' />
              <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
            </svg>
            <svg
              className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
            </svg>
          </label>
          Dark Mode
        </div>
      </nav>
    </div>
  );
};
