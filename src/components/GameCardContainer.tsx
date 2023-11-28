import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <div className='card max-w-[380px] h-[260px] bg-base-300 shadow-lg cursor-pointer hover:scale-105 ease-in-out duration-300'>
      {children}
    </div>
  );
};
