import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Platform from '../hooks/useGames';
import { usePlatforms } from '../hooks/usePlateforms';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const Selector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <div className='absolute top-0 mb-10 pb-10  z-50'>
      <Menu>
        <MenuButton
          borderRadius='10'
          as={Button}
          rightIcon={<BsChevronDown />}
          borderWidth='2px'
          px={20}
          py={10}
          colorScheme='pink'
          _focus={{ boxShadow: 'outline' }}
        >
          {' '}
          {selectedPlatform?.name || 'Platforms'}{' '}
        </MenuButton>
        <MenuList px={20} py={10} bg='gray' borderRadius='10'>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
              _hover={{ bg: 'transparent' }}
            >
              <Button paddingY='3'>{platform.name}</Button>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
