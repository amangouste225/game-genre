import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

export const Credit = ({ score }: Props) => {
  const color = score > 75 ? 'black' : score > 60 ? 'red' : '';

  return (
    <Badge
      className='bg-[gray] px-2 text-[`${color}`] rounded-sm text-sm'
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};
