export const GameCardSkeleton = () => {
  return (
    <div className='card max-w-[380px] h-[260px] flex-col gap-2'>
      <div className='skeleton h-full w-full'></div>
      <div className='skeleton h-7'></div>
      <div className='skeleton  h-7'></div>
    </div>
  );
};
