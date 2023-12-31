import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo-white.svg';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem('theme')
      ? JSON.parse(localStorage.getItem('theme')!)
      : 'light'
  );

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme('black');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    const localTheme = JSON.parse(localStorage.getItem('theme') || '');
    document.querySelector('html')?.setAttribute('data-theme', localTheme);
  }, [theme]);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <nav className='navbar bg-base-100 gap-4'>
        <figure className='flex-none w-30 logo'>
          <a className='p-2 hidden md:block' href='/'>
            <img src={Logo} alt='logo' />
          </a>
        </figure>
        <div className='flex-1 gap-2'>
          <div className='form-control w-full relative'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (ref.current) onSearch(ref.current.value);
              }}
            >
              <InputGroup
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <InputLeftElement
                  children={<BsSearch />}
                  fontSize='20'
                  top='13'
                  left='10'
                />
                <Input
                  ref={ref}
                  borderRadius={20}
                  placeholder='Search Games...'
                  paddingY='7px'
                  paddingX='50px'
                  variant='filled'
                  width='100%'
                />
              </InputGroup>
            </form>
          </div>
        </div>
        <div className='dropdown dropdown-end flex gap-3'>
          {/* DARK MODE */}
          <label className='cursor-pointer grid place-items-center'>
            <input
              onChange={toggle}
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
          <span className='lg:inline hidden'> Dark Mode</span>
        </div>
      </nav>
    </div>
  );
};
