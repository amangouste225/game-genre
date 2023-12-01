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
    <div>
      <Menu>
        <MenuButton
          borderRadius='10'
          as={Button}
          rightIcon={<BsChevronDown />}
          borderWidth='2px'
          px={20}
          py={6}
        >
          {' '}
          {selectedPlatform?.name || 'Platforms'}{' '}
        </MenuButton>
        <MenuList px={20} py={10} bg='#fffff0' borderRadius='10'>
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
