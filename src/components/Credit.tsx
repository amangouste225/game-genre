import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

export const Credit = ({ score }: Props) => {
  const color = score > 75 ? 'black' : score > 60 ? 'red' : '';

  return (
    <Badge
      className='bg-base-100 px-3 text-[`${color}`] rounded-md shadow-lg text-sm'
      colorScheme={color}
    >
      ➕{score}
    </Badge>
  );
};
